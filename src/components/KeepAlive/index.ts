import { CommonOptions } from "child_process";
import {  Component, ComponentCustomProps, ComponentOptions, KeepAlive} from "vue";
(KeepAlive as any as ComponentOptions).methods={aa:()=>{console.log(1)}};
export default KeepAlive;