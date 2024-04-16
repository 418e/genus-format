import { TDIFValue } from "../types";

export function isStrValue(value: TDIFValue<any>): value is TDIFValue<string> {
  return value.type === "str";
}

export function implStrValue(value: TDIFValue<any>): TDIFValue<string> | null {
  if (isStrValue(value)) {
    return value;
  }
  return null;
}

export function isIntValue(value: TDIFValue<any>): value is TDIFValue<number> {
  return (
    typeof value.value === "number" &&
    value.type === "int" &&
    value.value >= 0 &&
    Number.isInteger(value.value)
  );
}

export function implIntValue(value: TDIFValue<any>): TDIFValue<number> | null {
  if (isIntValue(value)) {
    return value;
  }
  return null;
}

export function isUntValue(value: TDIFValue<any>): value is TDIFValue<number> {
  return (
    typeof typeof value.value === "number" &&
    value.type === "unt" &&
    value.value < 0 &&
    Number.isInteger(value.value)
  );
}

export function implUntValue(value: TDIFValue<any>): TDIFValue<number> | null {
  if (isUntValue(value)) {
    return value;
  }
  return null;
}

export function isNumValue(value: TDIFValue<any>): value is TDIFValue<number> {
  return typeof value.value === "number" && value.type === "num";
}

export function implNumValue(value: TDIFValue<any>): TDIFValue<number> | null {
  if (isNumValue(value)) {
    return value;
  }
  return null;
}

export function isFloatValue(
  value: TDIFValue<any>
): value is TDIFValue<number> {
  return (
    typeof value.value === "number" &&
    value.type === "float" &&
    !Number.isInteger(value.value)
  );
}

export function implFloatValue(
  value: TDIFValue<any>
): TDIFValue<number> | null {
  if (isFloatValue(value)) {
    return value;
  }
  return null;
}

export function isBoolValue(
  value: TDIFValue<any>
): value is TDIFValue<boolean> {
  return typeof value.value === "boolean" && value.type === "bool";
}

export function implBoolValue(
  value: TDIFValue<any>
): TDIFValue<boolean> | null {
  if (isBoolValue(value)) {
    return value;
  }
  return null;
}

export function isTrueValue(
  value: TDIFValue<any>
): value is TDIFValue<boolean> {
  return (
    typeof value.value === "boolean" &&
    value.type === "bool" &&
    value.value === true
  );
}

export function implTrueValue(
  value: TDIFValue<any>
): TDIFValue<boolean> | null {
  if (isTrueValue(value)) {
    return value;
  }
  return null;
}

export function isFalseValue(
  value: TDIFValue<any>
): value is TDIFValue<boolean> {
  return (
    typeof value.value === "boolean" &&
    value.type === "bool" &&
    value.value === true
  );
}

export function implFalseValue(
  value: TDIFValue<any>
): TDIFValue<boolean> | null {
  if (isFalseValue(value)) {
    return value;
  }
  return null;
}
