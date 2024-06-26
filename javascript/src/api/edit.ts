import { writeFileSync } from "fs";
import typeCheck from "../type_system/typeCheck";
import { FileMeta, GenusValue } from "../types";
/**
 * @param {FileMeta} file
 * file you would like to edit
 * @param {string} key
 * name of the key you would like to edit
 * @param {any} newValue
 * new value of the you would like to edit
 * @returns {void}
 *
 * @example
 * ```ts
 * import {read, edit} from "genus-format";
 *
 * const file = read("user.gen");
 * edit(file, "name", "luke");
 * ```
 *
 * @version v0.0.4
 */
export default function edit(file: FileMeta, key: string, newValue: any): void {
  let data = file.data;
  const newObj = {
    value: newValue,
    type: data[key].type,
  };
  data[key] = newObj;
  typeCheck(newObj);

  const newContent = Object.entries(data)
    .map(
      ([k, v]: [string, GenusValue<any>]) =>
        `${v.type} ${k} = ${
          typeof v.value === "string" ? `"${v.value}"` : v.value
        };`
    )
    .join("\n");
  writeFileSync(file.path, newContent);
}
