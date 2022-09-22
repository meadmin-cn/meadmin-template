//vxe-table-plugin-element插件过不去vue-tsc检查，提bug没人理无奈只能自己copy下来改一下
import { h, resolveComponent, ComponentOptions } from 'vue';
import XEUtils from 'xe-utils';
import {
  VXETableCore,
  VxeTableDefines,
  VxeColumnPropTypes,
  VxeGlobalRendererHandles,
  VxeGlobalInterceptorHandles,
  FormItemRenderOptions,
  FormItemContentRenderParams,
} from 'vxe-table';
import dayjs from 'dayjs';

let vxetable: VXETableCore;

function isEmptyValue(cellValue: any) {
  return cellValue === null || cellValue === undefined || cellValue === '';
}

function getOnName(type: string) {
  return 'on' + type.substring(0, 1).toLocaleUpperCase() + type.substring(1);
}

function getModelProp(renderOpts: VxeGlobalRendererHandles.RenderOptions) {
  return 'modelValue';
}

function getModelEvent(renderOpts: VxeGlobalRendererHandles.RenderOptions) {
  return 'update:modelValue';
}

function getChangeEvent(renderOpts: VxeGlobalRendererHandles.RenderOptions) {
  let type = 'change';
  switch (renderOpts.name) {
    case 'ElAutocomplete':
      type = 'select';
      break;
    case 'ElInput':
    case 'ElInputNumber':
      type = 'input';
      break;
  }
  return type;
}

function toDayStringDate(value: any, format: string) {
  return dayjs(value, format).date;
}

function toDayDateString(date: any, format: string) {
  return dayjs(date).format(format);
}

function parseDate(value: any, props: { [key: string]: any }) {
  return value && props.valueFormat ? toDayStringDate(value, props.valueFormat) : value;
}

function getFormatDate(value: any, props: { [key: string]: any }, defaultFormat: string) {
  return value ? toDayDateString(parseDate(value, props), props.format || defaultFormat) : value;
}

function getFormatDates(values: any[], props: { [key: string]: any }, separator: string, defaultFormat: string) {
  return XEUtils.map(values, (date: any) => getFormatDate(date, props, defaultFormat)).join(separator);
}

function equalDaterange(cellValue: any, data: any, props: { [key: string]: any }, defaultFormat: string) {
  cellValue = getFormatDate(cellValue, props, defaultFormat);
  return (
    cellValue >= getFormatDate(data[0], props, defaultFormat) &&
    cellValue <= getFormatDate(data[1], props, defaultFormat)
  );
}

function getCellEditFilterProps(
  renderOpts: VxeGlobalRendererHandles.RenderOptions,
  params: VxeGlobalRendererHandles.RenderEditParams | VxeGlobalRendererHandles.RenderFilterParams,
  value: any,
  defaultProps?: { [prop: string]: any },
) {
  return XEUtils.assign({}, defaultProps, renderOpts.props, { [getModelProp(renderOpts)]: value });
}

function getItemProps(
  renderOpts: VxeGlobalRendererHandles.RenderOptions,
  params: FormItemContentRenderParams,
  value: any,
  defaultProps?: { [prop: string]: any },
) {
  return XEUtils.assign({}, defaultProps, renderOpts.props, { [getModelProp(renderOpts)]: value });
}

function formatText(cellValue: any) {
  return '' + (isEmptyValue(cellValue) ? '' : cellValue);
}

function getCellLabelVNs(
  renderOpts: VxeColumnPropTypes.EditRender,
  params: VxeGlobalRendererHandles.RenderCellParams,
  cellLabel: any,
) {
  const { placeholder } = renderOpts;
  return [
    h(
      'span',
      {
        class: 'vxe-cell--label',
      },
      placeholder && isEmptyValue(cellLabel)
        ? [
            h(
              'span',
              {
                class: 'vxe-cell--placeholder',
              },
              formatText(vxetable._t(placeholder)),
            ),
          ]
        : formatText(cellLabel),
    ),
  ];
}

function getOns(
  renderOpts: VxeGlobalRendererHandles.RenderOptions,
  params: VxeGlobalRendererHandles.RenderParams,
  inputFunc?: Function,
  changeFunc?: Function,
) {
  const { events } = renderOpts;
  const modelEvent = getModelEvent(renderOpts);
  const changeEvent = getChangeEvent(renderOpts);
  const isSameEvent = changeEvent === modelEvent;
  const ons: { [type: string]: Function } = {};
  XEUtils.objectEach(events, (func: Function, key: string) => {
    ons[getOnName(key)] = function (...args: any[]) {
      func(params, ...args);
    };
  });
  if (inputFunc) {
    ons[getOnName(modelEvent)] = function (targetEvnt: any) {
      inputFunc(targetEvnt);
      if (events && events[modelEvent]) {
        events[modelEvent](params, targetEvnt);
      }
      if (isSameEvent && changeFunc) {
        changeFunc(targetEvnt);
      }
    };
  }
  if (!isSameEvent && changeFunc) {
    ons[getOnName(changeEvent)] = function (...args: any[]) {
      changeFunc(...args);
      if (events && events[changeEvent]) {
        events[changeEvent](params, ...args);
      }
    };
  }
  return ons;
}

function getEditOns(
  renderOpts: VxeGlobalRendererHandles.RenderOptions,
  params: VxeGlobalRendererHandles.RenderEditParams,
) {
  const { $table, row, column } = params;
  return getOns(
    renderOpts,
    params,
    (value: any) => {
      // 处理 model 值双向绑定
      XEUtils.set(row, column.property, value);
    },
    () => {
      // 处理 change 事件相关逻辑
      $table.updateStatus(params);
    },
  );
}

function getFilterOns(
  renderOpts: VxeGlobalRendererHandles.RenderOptions,
  params: VxeGlobalRendererHandles.RenderFilterParams,
  option: VxeTableDefines.FilterOption,
  changeFunc: Function,
) {
  return getOns(
    renderOpts,
    params,
    (value: any) => {
      // 处理 model 值双向绑定
      option.data = value;
    },
    changeFunc,
  );
}

function getItemOns(renderOpts: VxeGlobalRendererHandles.RenderOptions, params: FormItemContentRenderParams) {
  const { $form, data, property } = params;
  return getOns(
    renderOpts,
    params,
    (value: any) => {
      // 处理 model 值双向绑定
      XEUtils.set(data, property, value);
    },
    () => {
      // 处理 change 事件相关逻辑
      $form.updateStatus(params);
    },
  );
}

function matchCascaderData(index: number, list: any[], values: any[], labels: any[]) {
  const val = values[index];
  if (list && values.length > index) {
    XEUtils.each(list, (item) => {
      if (item.value === val) {
        labels.push(item.label);
        matchCascaderData(++index, item.children, values, labels);
      }
    });
  }
}

function getSelectCellValue(
  renderOpts: VxeColumnPropTypes.EditRender,
  params: VxeGlobalRendererHandles.RenderCellParams,
) {
  const { options = [], optionGroups, props = {}, optionProps = {}, optionGroupProps = {} } = renderOpts;
  const { $table, rowid, row, column } = params;
  const { filterable, multiple } = props;
  const labelProp = optionProps.label || 'label';
  const valueProp = optionProps.value || 'value';
  const groupOptions = optionGroupProps.options || 'options';
  const cellValue = XEUtils.get(row, column.property);
  const colid = column.id;
  let cellData: any;
  if (filterable) {
    const { internalData } = $table;
    const { fullAllDataRowIdData } = internalData;
    const rest: any = fullAllDataRowIdData[rowid];
    if (rest) {
      cellData = rest.cellData;
      if (!cellData) {
        cellData = rest.cellData = {};
      }
    }
    if (rest && cellData[colid] && cellData[colid].value === cellValue) {
      return cellData[colid].label;
    }
  }
  if (!isEmptyValue(cellValue)) {
    const selectlabel = XEUtils.map(
      multiple ? cellValue : [cellValue],
      optionGroups
        ? (value) => {
            let selectItem: any;
            for (let index = 0; index < optionGroups.length; index++) {
              selectItem = XEUtils.find(optionGroups[index][groupOptions], (item) => item[valueProp] === value);
              if (selectItem) {
                break;
              }
            }
            return selectItem ? selectItem[labelProp] : value;
          }
        : (value) => {
            const selectItem = XEUtils.find(options, (item) => item[valueProp] === value);
            return selectItem ? selectItem[labelProp] : value;
          },
    ).join(', ');
    if (cellData && options && options.length) {
      cellData[colid] = { value: cellValue, label: selectlabel };
    }
    return selectlabel;
  }
  return '';
}

function getCascaderCellValue(
  renderOpts: VxeGlobalRendererHandles.RenderOptions,
  params: VxeGlobalRendererHandles.RenderCellParams,
) {
  const { props = {} } = renderOpts;
  const { row, column } = params;
  const cellValue = XEUtils.get(row, column.property);
  const values: any[] = cellValue || [];
  const labels: any[] = [];
  matchCascaderData(0, props.options, values, labels);
  return (props.showAllLevels === false ? labels.slice(labels.length - 1, labels.length) : labels).join(
    ` ${props.separator || '/'} `,
  );
}

function getDatePickerCellValue(
  renderOpts: VxeGlobalRendererHandles.RenderOptions,
  params: VxeGlobalRendererHandles.RenderCellParams | VxeGlobalRendererHandles.ExportMethodParams,
) {
  const { props = {} } = renderOpts;
  const { row, column } = params;
  const { rangeSeparator = '-' } = props;
  let cellValue = XEUtils.get(row, column.property);
  switch (props.type) {
    case 'week':
      cellValue = getFormatDate(cellValue, props, 'YYYYwWW');
      break;
    case 'month':
      cellValue = getFormatDate(cellValue, props, 'YYYY-MM');
      break;
    case 'year':
      cellValue = getFormatDate(cellValue, props, 'YYYY');
      break;
    case 'dates':
      cellValue = getFormatDates(cellValue, props, ', ', 'YYYY-MM-DD');
      break;
    case 'daterange':
      cellValue = getFormatDates(cellValue, props, ` ${rangeSeparator} `, 'YYYY-MM-DD');
      break;
    case 'datetimerange':
      cellValue = getFormatDates(cellValue, props, ` ${rangeSeparator} `, 'YYYY-MM-DD HH:ss:mm');
      break;
    case 'monthrange':
      cellValue = getFormatDates(cellValue, props, ` ${rangeSeparator} `, 'YYYY-MM');
      break;
    default:
      cellValue = getFormatDate(cellValue, props, 'YYYY-MM-DD');
  }
  return cellValue;
}

function getTimePickerCellValue(
  renderOpts: VxeGlobalRendererHandles.RenderOptions,
  params: VxeGlobalRendererHandles.RenderCellParams | VxeGlobalRendererHandles.RenderEditParams,
) {
  const { props = {} } = renderOpts;
  const { row, column } = params;
  const { isRange, format = 'hh:mm:ss', rangeSeparator = '-' } = props;
  let cellValue = XEUtils.get(row, column.property);
  if (cellValue && isRange) {
    cellValue = XEUtils.map(cellValue, (date) => toDayDateString(parseDate(date, props), format)).join(
      ` ${rangeSeparator} `,
    );
  }
  return toDayDateString(parseDate(cellValue, props), format);
}

function createEditRender(defaultProps?: { [key: string]: any }) {
  return function (renderOpts: VxeColumnPropTypes.EditRender, params: VxeGlobalRendererHandles.RenderEditParams) {
    const { row, column } = params;
    const { name, attrs } = renderOpts;
    const cellValue = XEUtils.get(row, column.property);
    return [
      h(resolveComponent(name!), {
        ...attrs,
        ...getCellEditFilterProps(renderOpts, params, cellValue, defaultProps),
        ...getEditOns(renderOpts, params),
      }),
    ];
  };
}

function defaultButtonEditRender(
  renderOpts: VxeColumnPropTypes.EditRender,
  params: VxeGlobalRendererHandles.RenderEditParams,
) {
  const { attrs } = renderOpts;
  return [
    h(
      resolveComponent('el-button'),
      {
        ...attrs,
        ...getCellEditFilterProps(renderOpts, params, null),
        ...getOns(renderOpts, params),
      },
      cellText(renderOpts.content),
    ),
  ];
}

function defaultButtonsEditRender(
  renderOpts: VxeColumnPropTypes.EditRender,
  params: VxeGlobalRendererHandles.RenderEditParams,
) {
  const { children } = renderOpts;
  if (children) {
    return children.map(
      (childRenderOpts: VxeColumnPropTypes.EditRender) => defaultButtonEditRender(childRenderOpts, params)[0],
    );
  }
  return [];
}

function createFilterRender(defaultProps?: { [key: string]: any }) {
  return function (renderOpts: VxeColumnPropTypes.FilterRender, params: VxeGlobalRendererHandles.RenderFilterParams) {
    const { column } = params;
    const { name, attrs } = renderOpts;
    return [
      h(
        'div',
        {
          class: 'vxe-table--filter-element-wrapper',
        },
        column.filters.map((option, oIndex) => {
          const optionValue = option.data;
          return h(resolveComponent(name!), {
            key: oIndex,
            ...attrs,
            ...getCellEditFilterProps(renderOpts, params, optionValue, defaultProps),
            ...getFilterOns(renderOpts, params, option, () => {
              // 处理 change 事件相关逻辑
              handleConfirmFilter(params, !!option.data, option);
            }),
          });
        }),
      ),
    ];
  };
}

function handleConfirmFilter(
  params: VxeGlobalRendererHandles.RenderFilterParams,
  checked: boolean,
  option: VxeTableDefines.FilterOption,
) {
  const { $panel } = params;
  $panel.changeOption(null, checked, option);
}

/**
 * 模糊匹配
 * @param params
 */
function defaultFuzzyFilterMethod(params: VxeGlobalRendererHandles.FilterMethodParams) {
  const { option, row, column } = params;
  const { data } = option;
  const cellValue = XEUtils.get(row, column.property);
  return XEUtils.toValueString(cellValue).indexOf(data) > -1;
}

/**
 * 精确匹配
 * @param params
 */
function defaultExactFilterMethod(params: VxeGlobalRendererHandles.FilterMethodParams) {
  const { option, row, column } = params;
  const { data } = option;
  const cellValue = XEUtils.get(row, column.property);
  /* eslint-disable eqeqeq */
  return cellValue === data;
}

function renderOptions(options: any[], optionProps: VxeGlobalRendererHandles.RenderOptionProps) {
  const labelProp = optionProps.label || 'label';
  const valueProp = optionProps.value || 'value';
  return XEUtils.map(options, (item, oIndex) => {
    return h(resolveComponent('el-option'), {
      key: oIndex,
      value: item[valueProp],
      label: item[labelProp],
      disabled: item.disabled,
    });
  });
}

function cellText(cellValue: any): string[] {
  return [formatText(cellValue)];
}

function createFormItemRender(defaultProps?: { [key: string]: any }) {
  return function (renderOpts: FormItemRenderOptions, params: FormItemContentRenderParams) {
    const { data, property } = params;
    const { name } = renderOpts;
    const { attrs } = renderOpts;
    const itemValue = XEUtils.get(data, property);
    return [
      h(resolveComponent(name!), {
        ...attrs,
        ...getItemProps(renderOpts, params, itemValue, defaultProps),
        ...getItemOns(renderOpts, params),
      }),
    ];
  };
}

function defaultButtonItemRender(renderOpts: FormItemRenderOptions, params: FormItemContentRenderParams) {
  const { attrs } = renderOpts;
  const props = getItemProps(renderOpts, params, null);
  return [
    h(
      resolveComponent('el-button') as ComponentOptions,
      {
        ...attrs,
        ...props,
        ...getOns(renderOpts, params),
      },
      {
        default: () => cellText(renderOpts.content || props.content),
      },
    ),
  ];
}

function defaultButtonsItemRender(renderOpts: FormItemRenderOptions, params: FormItemContentRenderParams) {
  const { children } = renderOpts;
  if (children) {
    return children.map(
      (childRenderOpts: FormItemRenderOptions) => defaultButtonItemRender(childRenderOpts, params)[0],
    );
  }
  return [];
}

function createExportMethod(getExportCellValue: Function) {
  return function (params: VxeGlobalRendererHandles.ExportMethodParams) {
    const { row, column, options } = params;
    return options && options.original
      ? XEUtils.get(row, column.property)
      : getExportCellValue(column.editRender || column.cellRender, params);
  };
}

function createFormItemRadioAndCheckboxRender() {
  return function (renderOpts: FormItemRenderOptions, params: FormItemContentRenderParams) {
    const { name, options = [], optionProps = {}, attrs } = renderOpts;
    const { data, property } = params;
    const labelProp = optionProps.label || 'label';
    const valueProp = optionProps.value || 'value';
    const itemValue = XEUtils.get(data, property);
    return [
      h(
        resolveComponent(`${name}Group`) as ComponentOptions,
        {
          ...attrs,
          ...getItemProps(renderOpts, params, itemValue),
          ...getItemOns(renderOpts, params),
        },
        {
          default: () => {
            return options.map((option, oIndex) => {
              return h(
                resolveComponent(name!) as ComponentOptions,
                {
                  key: oIndex,
                  label: option[valueProp],
                  disabled: option.disabled,
                },
                {
                  default: () => cellText(option[labelProp]),
                },
              );
            });
          },
        },
      ),
    ];
  };
}

/**
 * 检查触发源是否属于目标节点
 */
function getEventTargetNode(evnt: any, container: HTMLElement, className: string) {
  let targetElem;
  let target = evnt.target;
  while (target && target.nodeType && target !== document) {
    if (
      className &&
      target.className &&
      target.className.split &&
      target.className.split(' ').indexOf(className) > -1
    ) {
      targetElem = target;
    } else if (target === container) {
      return { flag: className ? !!targetElem : true, container, targetElem: targetElem };
    }
    target = target.parentNode;
  }
  return { flag: false };
}

/**
 * 事件兼容性处理
 */
function handleClearEvent(
  params:
    | VxeGlobalInterceptorHandles.InterceptorClearFilterParams
    | VxeGlobalInterceptorHandles.InterceptorClearActivedParams
    | VxeGlobalInterceptorHandles.InterceptorClearAreasParams,
) {
  const { $event } = params;
  const bodyElem = document.body;
  if (
    // 远程搜索
    getEventTargetNode($event, bodyElem, 'el-autocomplete-suggestion').flag ||
    // 下拉框
    getEventTargetNode($event, bodyElem, 'el-select-dropdown').flag ||
    // 级联
    getEventTargetNode($event, bodyElem, 'el-cascader__dropdown').flag ||
    getEventTargetNode($event, bodyElem, 'el-cascader-menus').flag ||
    // 日期
    getEventTargetNode($event, bodyElem, 'el-time-panel').flag ||
    getEventTargetNode($event, bodyElem, 'el-picker-panel').flag ||
    // 颜色
    getEventTargetNode($event, bodyElem, 'el-color-dropdown').flag
  ) {
    return false;
  }
}

declare module 'vxe-table' {
  interface DefineRendererOption<T> {
    defaultFilterMethod?(params: VxeGlobalRendererHandles.FilterMethodParams): boolean;
  }
}

/**
 * 基于 vxe-table 表格的适配插件，用于兼容 element-ui 组件库
 */
export const VXETablePluginElement = {
  install(vxetablecore: VXETableCore) {
    const { interceptor, renderer } = vxetablecore;

    vxetable = vxetablecore;

    renderer.mixin({
      ElAutocomplete: {
        autofocus: 'input.el-input__inner',
        renderDefault: createEditRender(),
        renderEdit: createEditRender(),
        renderFilter: createFilterRender(),
        defaultFilterMethod: defaultExactFilterMethod,
        renderItemContent: createFormItemRender(),
      },
      ElInput: {
        autofocus: 'input.el-input__inner',
        renderDefault: createEditRender(),
        renderEdit: createEditRender(),
        renderFilter: createFilterRender(),
        defaultFilterMethod: defaultFuzzyFilterMethod,
        renderItemContent: createFormItemRender(),
      },
      ElInputNumber: {
        autofocus: 'input.el-input__inner',
        renderDefault: createEditRender(),
        renderEdit: createEditRender(),
        renderFilter: createFilterRender(),
        defaultFilterMethod: defaultFuzzyFilterMethod,
        renderItemContent: createFormItemRender(),
      },
      ElSelect: {
        renderEdit(renderOpts, params) {
          const { options = [], optionGroups, optionProps = {}, optionGroupProps = {} } = renderOpts;
          const { row, column } = params;
          const { attrs } = renderOpts;
          const cellValue = XEUtils.get(row, column.property);
          const props = getCellEditFilterProps(renderOpts, params, cellValue);
          const ons = getEditOns(renderOpts, params);
          if (optionGroups) {
            const groupOptions = optionGroupProps.options || 'options';
            const groupLabel = optionGroupProps.label || 'label';
            return [
              h(
                resolveComponent('el-select') as ComponentOptions,
                {
                  ...attrs,
                  ...props,
                  ...ons,
                },
                {
                  default: () => {
                    return XEUtils.map(optionGroups, (group, gIndex) => {
                      return h(
                        resolveComponent('el-option-group') as ComponentOptions,
                        {
                          key: gIndex,
                          label: group[groupLabel],
                        },
                        {
                          default: () => renderOptions(group[groupOptions], optionProps),
                        },
                      );
                    });
                  },
                },
              ),
            ];
          }
          return [
            h(
              resolveComponent('el-select') as ComponentOptions,
              {
                ...props,
                ...attrs,
                ...ons,
              },
              {
                default: () => renderOptions(options, optionProps),
              },
            ),
          ];
        },
        renderCell(renderOpts, params) {
          return getCellLabelVNs(renderOpts, params, getSelectCellValue(renderOpts, params));
        },
        renderFilter(renderOpts, params) {
          const { options = [], optionGroups, optionProps = {}, optionGroupProps = {} } = renderOpts;
          const groupOptions = optionGroupProps.options || 'options';
          const groupLabel = optionGroupProps.label || 'label';
          const { column } = params;
          const { attrs } = renderOpts;
          return [
            h(
              'div',
              {
                class: 'vxe-table--filter-element-wrapper',
              },
              optionGroups
                ? column.filters.map((option, oIndex) => {
                    const optionValue = option.data;
                    const props = getCellEditFilterProps(renderOpts, params, optionValue);
                    return h(
                      resolveComponent('el-select') as ComponentOptions,
                      {
                        key: oIndex,
                        ...attrs,
                        ...props,
                        ...getFilterOns(renderOpts, params, option, () => {
                          // 处理 change 事件相关逻辑
                          handleConfirmFilter(
                            params,
                            props.multiple ? option.data && option.data.length > 0 : !XEUtils.eqNull(option.data),
                            option,
                          );
                        }),
                      },
                      {
                        default: () => {
                          return XEUtils.map(optionGroups, (group, gIndex) => {
                            return h(
                              resolveComponent('el-option-group') as ComponentOptions,
                              {
                                key: gIndex,
                                label: group[groupLabel],
                              },
                              {
                                default: () => renderOptions(group[groupOptions], optionProps),
                              },
                            );
                          });
                        },
                      },
                    );
                  })
                : column.filters.map((option, oIndex) => {
                    const optionValue = option.data;
                    const props = getCellEditFilterProps(renderOpts, params, optionValue);
                    return h(
                      resolveComponent('el-select') as ComponentOptions,
                      {
                        key: oIndex,
                        ...attrs,
                        ...props,
                        ...getFilterOns(renderOpts, params, option, () => {
                          // 处理 change 事件相关逻辑
                          handleConfirmFilter(
                            params,
                            props.multiple ? option.data && option.data.length > 0 : !XEUtils.eqNull(option.data),
                            option,
                          );
                        }),
                      },
                      {
                        default: () => renderOptions(options, optionProps),
                      },
                    );
                  }),
            ),
          ];
        },
        defaultFilterMethod(params) {
          const { option, row, column } = params;
          const { data } = option;
          const { property, filterRender: renderOpts } = column;
          const { props = {} } = renderOpts;
          const cellValue = XEUtils.get(row, property);
          if (props.multiple) {
            if (XEUtils.isArray(cellValue)) {
              return XEUtils.includeArrays(cellValue, data);
            }
            return data.indexOf(cellValue) > -1;
          }
          /* eslint-disable eqeqeq */
          return cellValue == data;
        },
        renderItemContent(renderOpts, params) {
          const { options = [], optionGroups, optionProps = {}, optionGroupProps = {} } = renderOpts;
          const { data, property } = params;
          const { attrs } = renderOpts;
          const itemValue = XEUtils.get(data, property);
          const props = getItemProps(renderOpts, params, itemValue);
          const ons = getItemOns(renderOpts, params);
          if (optionGroups) {
            const groupOptions = optionGroupProps.options || 'options';
            const groupLabel = optionGroupProps.label || 'label';
            return [
              h(
                resolveComponent('el-select') as ComponentOptions,
                {
                  ...attrs,
                  ...props,
                  ...ons,
                },
                {
                  default: () => {
                    return XEUtils.map(optionGroups, (group, gIndex) => {
                      return h(
                        resolveComponent('el-option-group') as ComponentOptions,
                        {
                          label: group[groupLabel],
                          key: gIndex,
                        },
                        {
                          default: () => renderOptions(group[groupOptions], optionProps),
                        },
                      );
                    });
                  },
                },
              ),
            ];
          }
          return [
            h(
              resolveComponent('el-select') as ComponentOptions,
              {
                ...attrs,
                ...props,
                ...ons,
              },
              {
                default: () => renderOptions(options, optionProps),
              },
            ),
          ];
        },
        exportMethod: createExportMethod(getSelectCellValue),
      },
      ElCascader: {
        renderEdit: createEditRender(),
        renderCell(renderOpts, params) {
          return getCellLabelVNs(renderOpts, params, getCascaderCellValue(renderOpts, params));
        },
        renderItemContent: createFormItemRender(),
        exportMethod: createExportMethod(getCascaderCellValue),
      },
      ElDatePicker: {
        renderEdit: createEditRender(),
        renderCell(renderOpts, params) {
          return getCellLabelVNs(renderOpts, params, getDatePickerCellValue(renderOpts, params));
        },
        renderFilter(renderOpts, params) {
          const { column } = params;
          const { name, attrs } = renderOpts;
          return [
            h(
              'div',
              {
                class: 'vxe-table--filter-element-wrapper',
              },
              column.filters.map((option, oIndex) => {
                const optionValue = option.data;
                return h(resolveComponent(name!), {
                  key: oIndex,
                  ...attrs,
                  ...getCellEditFilterProps(renderOpts, params, optionValue),
                  ...getFilterOns(renderOpts, params, option, () => {
                    // 处理 change 事件相关逻辑
                    handleConfirmFilter(params, !!option.data, option);
                  }),
                });
              }),
            ),
          ];
        },
        defaultFilterMethod(params) {
          const { option, row, column } = params;
          const { data } = option;
          const { filterRender: renderOpts } = column;
          const { props = {} } = renderOpts;
          const cellValue = XEUtils.get(row, column.property);
          if (data) {
            switch (props.type) {
              case 'daterange':
                return equalDaterange(cellValue, data, props, 'YYYY-MM-DD');
              case 'datetimerange':
                return equalDaterange(cellValue, data, props, 'YYYY-MM-DD HH:ss:mm');
              case 'monthrange':
                return equalDaterange(cellValue, data, props, 'YYYY-MM');
              default:
                return cellValue === data;
            }
          }
          return false;
        },
        renderItemContent: createFormItemRender(),
        exportMethod: createExportMethod(getDatePickerCellValue),
      },
      ElTimePicker: {
        renderEdit: createEditRender(),
        renderCell(renderOpts, params) {
          return getCellLabelVNs(renderOpts, params, getTimePickerCellValue(renderOpts, params));
        },
        renderItemContent: createFormItemRender(),
        exportMethod: createExportMethod(getTimePickerCellValue),
      },
      ElTimeSelect: {
        renderEdit: createEditRender(),
        renderItemContent: createFormItemRender(),
      },
      ElRate: {
        renderDefault: createEditRender(),
        renderEdit: createEditRender(),
        renderFilter: createFilterRender(),
        defaultFilterMethod: defaultExactFilterMethod,
        renderItemContent: createFormItemRender(),
      },
      ElSwitch: {
        renderDefault: createEditRender(),
        renderEdit: createEditRender(),
        renderFilter(renderOpts, params) {
          const { column } = params;
          const { name, attrs } = renderOpts;
          return [
            h(
              'div',
              {
                class: 'vxe-table--filter-element-wrapper',
              },
              column.filters.map((option, oIndex) => {
                const optionValue = option.data;
                return h(resolveComponent(name!), {
                  key: oIndex,
                  ...attrs,
                  ...getCellEditFilterProps(renderOpts, params, optionValue),
                  ...getFilterOns(renderOpts, params, option, () => {
                    // 处理 change 事件相关逻辑
                    handleConfirmFilter(params, XEUtils.isBoolean(option.data), option);
                  }),
                });
              }),
            ),
          ];
        },
        defaultFilterMethod: defaultExactFilterMethod,
        renderItemContent: createFormItemRender(),
      },
      ElSlider: {
        renderDefault: createEditRender(),
        renderEdit: createEditRender(),
        renderFilter: createFilterRender(),
        defaultFilterMethod: defaultExactFilterMethod,
        renderItemContent: createFormItemRender(),
      },
      ElRadio: {
        renderItemContent: createFormItemRadioAndCheckboxRender(),
      },
      ElCheckbox: {
        renderItemContent: createFormItemRadioAndCheckboxRender(),
      },
      ElButton: {
        renderDefault: defaultButtonEditRender,
        renderItemContent: defaultButtonItemRender,
      },
      ElButtons: {
        renderDefault: defaultButtonsEditRender,
        renderItemContent: defaultButtonsItemRender,
      },
    });

    interceptor.add('event.clearFilter', handleClearEvent);
    interceptor.add('event.clearActived', handleClearEvent);
    interceptor.add('event.clearAreas', handleClearEvent);
  },
};

if (typeof window !== 'undefined' && window.VXETable && window.VXETable.use) {
  window.VXETable.use(VXETablePluginElement);
}

export default VXETablePluginElement;
