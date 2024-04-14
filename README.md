# Typed Data Interchange Format - TDIF

under the heavy development

## comparasion to json

```json
{
  "name": "john",
  "surname": "doe",
  "age": 24,
  "id": 1234
}
```

```ts
name: str = "john";
surname: str = "doe";
age: int = 24;
id: int = 1234;
```

## language support

### javascript

```js
import { read, edit } from "tdif";
const file = read("user.tdif");
edit(file, "name", "luke");
```

### rust

soon
#   T D I F  
 