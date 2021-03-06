// API
import "./lib/transform.js";
export { minify } from "./lib/minify.js";

// CLI
export {
    AST_Array,
    AST_Assign,
    AST_Constant,
    AST_Node,
    AST_PropAccess,
    AST_Sequence,
    AST_Symbol,
    AST_Token,
    TreeTransformer,
    TreeWalker,
} from "./lib/ast.js";
export {
    defaults,
    Dictionary,
    push_uniq,
    string_template,
} from "./lib/utils.js";
export { base54 } from "./lib/scope.js";
export { Compressor } from "./lib/compress.js";
export { OutputStream } from "./lib/output.js";
export { parse }  from "./lib/parse.js";
export {
    mangle_properties,
    reserve_quoted_keys,
} from "./lib/propmangle.js";
import "./lib/mozilla-ast.js";

// TESTS
export * from "./lib/ast.js";
export {
    JS_Parse_Error,
    tokenizer,
} from "./lib/parse.js";
export { to_ascii } from "./lib/minify.js";
