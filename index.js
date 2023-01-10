
var Godot = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  
  return (
function(Godot) {
  Godot = Godot || {};



// Support for growable heap + pthreads, where the buffer may change, so JS views
// must be updated.
function GROWABLE_HEAP_I8() {
  if (wasmMemory.buffer != buffer) {
    updateGlobalBufferAndViews(wasmMemory.buffer);
  }
  return HEAP8;
}
function GROWABLE_HEAP_U8() {
  if (wasmMemory.buffer != buffer) {
    updateGlobalBufferAndViews(wasmMemory.buffer);
  }
  return HEAPU8;
}
function GROWABLE_HEAP_I16() {
  if (wasmMemory.buffer != buffer) {
    updateGlobalBufferAndViews(wasmMemory.buffer);
  }
  return HEAP16;
}
function GROWABLE_HEAP_U16() {
  if (wasmMemory.buffer != buffer) {
    updateGlobalBufferAndViews(wasmMemory.buffer);
  }
  return HEAPU16;
}
function GROWABLE_HEAP_I32() {
  if (wasmMemory.buffer != buffer) {
    updateGlobalBufferAndViews(wasmMemory.buffer);
  }
  return HEAP32;
}
function GROWABLE_HEAP_U32() {
  if (wasmMemory.buffer != buffer) {
    updateGlobalBufferAndViews(wasmMemory.buffer);
  }
  return HEAPU32;
}
function GROWABLE_HEAP_F32() {
  if (wasmMemory.buffer != buffer) {
    updateGlobalBufferAndViews(wasmMemory.buffer);
  }
  return HEAPF32;
}
function GROWABLE_HEAP_F64() {
  if (wasmMemory.buffer != buffer) {
    updateGlobalBufferAndViews(wasmMemory.buffer);
  }
  return HEAPF64;
}

var Module = typeof Godot !== "undefined" ? Godot : {};

var readyPromiseResolve, readyPromiseReject;

Module["ready"] = new Promise(function(resolve, reject) {
 readyPromiseResolve = resolve;
 readyPromiseReject = reject;
});

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_main")) {
 Object.defineProperty(Module["ready"], "_main", {
  configurable: true,
  get: function() {
   abort("You are getting _main on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_main", {
  configurable: true,
  set: function() {
   abort("You are setting _main on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_stack_get_end")) {
 Object.defineProperty(Module["ready"], "_emscripten_stack_get_end", {
  configurable: true,
  get: function() {
   abort("You are getting _emscripten_stack_get_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_emscripten_stack_get_end", {
  configurable: true,
  set: function() {
   abort("You are setting _emscripten_stack_get_end on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_stack_get_free")) {
 Object.defineProperty(Module["ready"], "_emscripten_stack_get_free", {
  configurable: true,
  get: function() {
   abort("You are getting _emscripten_stack_get_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_emscripten_stack_get_free", {
  configurable: true,
  set: function() {
   abort("You are setting _emscripten_stack_get_free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_stack_init")) {
 Object.defineProperty(Module["ready"], "_emscripten_stack_init", {
  configurable: true,
  get: function() {
   abort("You are getting _emscripten_stack_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_emscripten_stack_init", {
  configurable: true,
  set: function() {
   abort("You are setting _emscripten_stack_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_stackSave")) {
 Object.defineProperty(Module["ready"], "_stackSave", {
  configurable: true,
  get: function() {
   abort("You are getting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_stackSave", {
  configurable: true,
  set: function() {
   abort("You are setting _stackSave on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_stackRestore")) {
 Object.defineProperty(Module["ready"], "_stackRestore", {
  configurable: true,
  get: function() {
   abort("You are getting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_stackRestore", {
  configurable: true,
  set: function() {
   abort("You are setting _stackRestore on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_stackAlloc")) {
 Object.defineProperty(Module["ready"], "_stackAlloc", {
  configurable: true,
  get: function() {
   abort("You are getting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_stackAlloc", {
  configurable: true,
  set: function() {
   abort("You are setting _stackAlloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "___wasm_call_ctors")) {
 Object.defineProperty(Module["ready"], "___wasm_call_ctors", {
  configurable: true,
  get: function() {
   abort("You are getting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "___wasm_call_ctors", {
  configurable: true,
  set: function() {
   abort("You are setting ___wasm_call_ctors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_fflush")) {
 Object.defineProperty(Module["ready"], "_fflush", {
  configurable: true,
  get: function() {
   abort("You are getting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_fflush", {
  configurable: true,
  set: function() {
   abort("You are setting _fflush on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "___errno_location")) {
 Object.defineProperty(Module["ready"], "___errno_location", {
  configurable: true,
  get: function() {
   abort("You are getting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "___errno_location", {
  configurable: true,
  set: function() {
   abort("You are setting ___errno_location on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "___emscripten_pthread_data_constructor")) {
 Object.defineProperty(Module["ready"], "___emscripten_pthread_data_constructor", {
  configurable: true,
  get: function() {
   abort("You are getting ___emscripten_pthread_data_constructor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "___emscripten_pthread_data_constructor", {
  configurable: true,
  set: function() {
   abort("You are setting ___emscripten_pthread_data_constructor on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "__emscripten_call_on_thread")) {
 Object.defineProperty(Module["ready"], "__emscripten_call_on_thread", {
  configurable: true,
  get: function() {
   abort("You are getting __emscripten_call_on_thread on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "__emscripten_call_on_thread", {
  configurable: true,
  set: function() {
   abort("You are setting __emscripten_call_on_thread on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "__emscripten_main_thread_futex")) {
 Object.defineProperty(Module["ready"], "__emscripten_main_thread_futex", {
  configurable: true,
  get: function() {
   abort("You are getting __emscripten_main_thread_futex on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "__emscripten_main_thread_futex", {
  configurable: true,
  set: function() {
   abort("You are setting __emscripten_main_thread_futex on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "__emscripten_thread_init")) {
 Object.defineProperty(Module["ready"], "__emscripten_thread_init", {
  configurable: true,
  get: function() {
   abort("You are getting __emscripten_thread_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "__emscripten_thread_init", {
  configurable: true,
  set: function() {
   abort("You are setting __emscripten_thread_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "__emscripten_thread_exit")) {
 Object.defineProperty(Module["ready"], "__emscripten_thread_exit", {
  configurable: true,
  get: function() {
   abort("You are getting __emscripten_thread_exit on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "__emscripten_thread_exit", {
  configurable: true,
  set: function() {
   abort("You are setting __emscripten_thread_exit on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_current_thread_process_queued_calls")) {
 Object.defineProperty(Module["ready"], "_emscripten_current_thread_process_queued_calls", {
  configurable: true,
  get: function() {
   abort("You are getting _emscripten_current_thread_process_queued_calls on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_emscripten_current_thread_process_queued_calls", {
  configurable: true,
  set: function() {
   abort("You are setting _emscripten_current_thread_process_queued_calls on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "__emscripten_allow_main_runtime_queued_calls")) {
 Object.defineProperty(Module["ready"], "__emscripten_allow_main_runtime_queued_calls", {
  configurable: true,
  get: function() {
   abort("You are getting __emscripten_allow_main_runtime_queued_calls on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "__emscripten_allow_main_runtime_queued_calls", {
  configurable: true,
  set: function() {
   abort("You are setting __emscripten_allow_main_runtime_queued_calls on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_futex_wake")) {
 Object.defineProperty(Module["ready"], "_emscripten_futex_wake", {
  configurable: true,
  get: function() {
   abort("You are getting _emscripten_futex_wake on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_emscripten_futex_wake", {
  configurable: true,
  set: function() {
   abort("You are setting _emscripten_futex_wake on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_get_global_libc")) {
 Object.defineProperty(Module["ready"], "_emscripten_get_global_libc", {
  configurable: true,
  get: function() {
   abort("You are getting _emscripten_get_global_libc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_emscripten_get_global_libc", {
  configurable: true,
  set: function() {
   abort("You are setting _emscripten_get_global_libc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_main_browser_thread_id")) {
 Object.defineProperty(Module["ready"], "_emscripten_main_browser_thread_id", {
  configurable: true,
  get: function() {
   abort("You are getting _emscripten_main_browser_thread_id on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_emscripten_main_browser_thread_id", {
  configurable: true,
  set: function() {
   abort("You are setting _emscripten_main_browser_thread_id on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_main_thread_process_queued_calls")) {
 Object.defineProperty(Module["ready"], "_emscripten_main_thread_process_queued_calls", {
  configurable: true,
  get: function() {
   abort("You are getting _emscripten_main_thread_process_queued_calls on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_emscripten_main_thread_process_queued_calls", {
  configurable: true,
  set: function() {
   abort("You are setting _emscripten_main_thread_process_queued_calls on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_run_in_main_runtime_thread_js")) {
 Object.defineProperty(Module["ready"], "_emscripten_run_in_main_runtime_thread_js", {
  configurable: true,
  get: function() {
   abort("You are getting _emscripten_run_in_main_runtime_thread_js on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_emscripten_run_in_main_runtime_thread_js", {
  configurable: true,
  set: function() {
   abort("You are setting _emscripten_run_in_main_runtime_thread_js on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_stack_set_limits")) {
 Object.defineProperty(Module["ready"], "_emscripten_stack_set_limits", {
  configurable: true,
  get: function() {
   abort("You are getting _emscripten_stack_set_limits on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_emscripten_stack_set_limits", {
  configurable: true,
  set: function() {
   abort("You are setting _emscripten_stack_set_limits on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_sync_run_in_main_thread_2")) {
 Object.defineProperty(Module["ready"], "_emscripten_sync_run_in_main_thread_2", {
  configurable: true,
  get: function() {
   abort("You are getting _emscripten_sync_run_in_main_thread_2 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_emscripten_sync_run_in_main_thread_2", {
  configurable: true,
  set: function() {
   abort("You are setting _emscripten_sync_run_in_main_thread_2 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_sync_run_in_main_thread_4")) {
 Object.defineProperty(Module["ready"], "_emscripten_sync_run_in_main_thread_4", {
  configurable: true,
  get: function() {
   abort("You are getting _emscripten_sync_run_in_main_thread_4 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_emscripten_sync_run_in_main_thread_4", {
  configurable: true,
  set: function() {
   abort("You are setting _emscripten_sync_run_in_main_thread_4 on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_tls_init")) {
 Object.defineProperty(Module["ready"], "_emscripten_tls_init", {
  configurable: true,
  get: function() {
   abort("You are getting _emscripten_tls_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_emscripten_tls_init", {
  configurable: true,
  set: function() {
   abort("You are setting _emscripten_tls_init on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_pthread_self")) {
 Object.defineProperty(Module["ready"], "_pthread_self", {
  configurable: true,
  get: function() {
   abort("You are getting _pthread_self on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_pthread_self", {
  configurable: true,
  set: function() {
   abort("You are setting _pthread_self on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_pthread_testcancel")) {
 Object.defineProperty(Module["ready"], "_pthread_testcancel", {
  configurable: true,
  get: function() {
   abort("You are getting _pthread_testcancel on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_pthread_testcancel", {
  configurable: true,
  set: function() {
   abort("You are setting _pthread_testcancel on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_memalign")) {
 Object.defineProperty(Module["ready"], "_memalign", {
  configurable: true,
  get: function() {
   abort("You are getting _memalign on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_memalign", {
  configurable: true,
  set: function() {
   abort("You are setting _memalign on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "establishStackSpace")) {
 Object.defineProperty(Module["ready"], "establishStackSpace", {
  configurable: true,
  get: function() {
   abort("You are getting establishStackSpace on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "establishStackSpace", {
  configurable: true,
  set: function() {
   abort("You are setting establishStackSpace on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "invokeEntryPoint")) {
 Object.defineProperty(Module["ready"], "invokeEntryPoint", {
  configurable: true,
  get: function() {
   abort("You are getting invokeEntryPoint on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "invokeEntryPoint", {
  configurable: true,
  set: function() {
   abort("You are setting invokeEntryPoint on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_malloc")) {
 Object.defineProperty(Module["ready"], "_malloc", {
  configurable: true,
  get: function() {
   abort("You are getting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_malloc", {
  configurable: true,
  set: function() {
   abort("You are setting _malloc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_free")) {
 Object.defineProperty(Module["ready"], "_free", {
  configurable: true,
  get: function() {
   abort("You are getting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_free", {
  configurable: true,
  set: function() {
   abort("You are setting _free on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_webgl_make_context_current")) {
 Object.defineProperty(Module["ready"], "_emscripten_webgl_make_context_current", {
  configurable: true,
  get: function() {
   abort("You are getting _emscripten_webgl_make_context_current on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_emscripten_webgl_make_context_current", {
  configurable: true,
  set: function() {
   abort("You are setting _emscripten_webgl_make_context_current on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_webgl_get_current_context")) {
 Object.defineProperty(Module["ready"], "_emscripten_webgl_get_current_context", {
  configurable: true,
  get: function() {
   abort("You are getting _emscripten_webgl_get_current_context on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_emscripten_webgl_get_current_context", {
  configurable: true,
  set: function() {
   abort("You are setting _emscripten_webgl_get_current_context on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_saveSetjmp")) {
 Object.defineProperty(Module["ready"], "_saveSetjmp", {
  configurable: true,
  get: function() {
   abort("You are getting _saveSetjmp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_saveSetjmp", {
  configurable: true,
  set: function() {
   abort("You are setting _saveSetjmp on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_setThrew")) {
 Object.defineProperty(Module["ready"], "_setThrew", {
  configurable: true,
  get: function() {
   abort("You are getting _setThrew on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_setThrew", {
  configurable: true,
  set: function() {
   abort("You are setting _setThrew on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_raise")) {
 Object.defineProperty(Module["ready"], "_raise", {
  configurable: true,
  get: function() {
   abort("You are getting _raise on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_raise", {
  configurable: true,
  set: function() {
   abort("You are setting _raise on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_ntohs")) {
 Object.defineProperty(Module["ready"], "_ntohs", {
  configurable: true,
  get: function() {
   abort("You are getting _ntohs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_ntohs", {
  configurable: true,
  set: function() {
   abort("You are setting _ntohs on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_htonl")) {
 Object.defineProperty(Module["ready"], "_htonl", {
  configurable: true,
  get: function() {
   abort("You are getting _htonl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_htonl", {
  configurable: true,
  set: function() {
   abort("You are setting _htonl on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_htons")) {
 Object.defineProperty(Module["ready"], "_htons", {
  configurable: true,
  get: function() {
   abort("You are getting _htons on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_htons", {
  configurable: true,
  set: function() {
   abort("You are setting _htons on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "__get_tzname")) {
 Object.defineProperty(Module["ready"], "__get_tzname", {
  configurable: true,
  get: function() {
   abort("You are getting __get_tzname on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "__get_tzname", {
  configurable: true,
  set: function() {
   abort("You are setting __get_tzname on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "__get_daylight")) {
 Object.defineProperty(Module["ready"], "__get_daylight", {
  configurable: true,
  get: function() {
   abort("You are getting __get_daylight on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "__get_daylight", {
  configurable: true,
  set: function() {
   abort("You are setting __get_daylight on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "__get_timezone")) {
 Object.defineProperty(Module["ready"], "__get_timezone", {
  configurable: true,
  get: function() {
   abort("You are getting __get_timezone on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "__get_timezone", {
  configurable: true,
  set: function() {
   abort("You are setting __get_timezone on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "_emscripten_webgl_commit_frame")) {
 Object.defineProperty(Module["ready"], "_emscripten_webgl_commit_frame", {
  configurable: true,
  get: function() {
   abort("You are getting _emscripten_webgl_commit_frame on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "_emscripten_webgl_commit_frame", {
  configurable: true,
  set: function() {
   abort("You are setting _emscripten_webgl_commit_frame on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "__Z14godot_web_mainiPPc")) {
 Object.defineProperty(Module["ready"], "__Z14godot_web_mainiPPc", {
  configurable: true,
  get: function() {
   abort("You are getting __Z14godot_web_mainiPPc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "__Z14godot_web_mainiPPc", {
  configurable: true,
  set: function() {
   abort("You are setting __Z14godot_web_mainiPPc on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "__emwebxr_on_input_event")) {
 Object.defineProperty(Module["ready"], "__emwebxr_on_input_event", {
  configurable: true,
  get: function() {
   abort("You are getting __emwebxr_on_input_event on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "__emwebxr_on_input_event", {
  configurable: true,
  set: function() {
   abort("You are setting __emwebxr_on_input_event on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "__emwebxr_on_simple_event")) {
 Object.defineProperty(Module["ready"], "__emwebxr_on_simple_event", {
  configurable: true,
  get: function() {
   abort("You are getting __emwebxr_on_simple_event on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "__emwebxr_on_simple_event", {
  configurable: true,
  set: function() {
   abort("You are setting __emwebxr_on_simple_event on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "___pthread_tsd_run_dtors")) {
 Object.defineProperty(Module["ready"], "___pthread_tsd_run_dtors", {
  configurable: true,
  get: function() {
   abort("You are getting ___pthread_tsd_run_dtors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "___pthread_tsd_run_dtors", {
  configurable: true,
  set: function() {
   abort("You are setting ___pthread_tsd_run_dtors on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module["ready"], "onRuntimeInitialized")) {
 Object.defineProperty(Module["ready"], "onRuntimeInitialized", {
  configurable: true,
  get: function() {
   abort("You are getting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
 Object.defineProperty(Module["ready"], "onRuntimeInitialized", {
  configurable: true,
  set: function() {
   abort("You are setting onRuntimeInitialized on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js");
  }
 });
}

var moduleOverrides = {};

var key;

for (key in Module) {
 if (Module.hasOwnProperty(key)) {
  moduleOverrides[key] = Module[key];
 }
}

var arguments_ = [];

var thisProgram = "./this.program";

var quit_ = function(status, toThrow) {
 throw toThrow;
};

var ENVIRONMENT_IS_WEB = typeof window === "object";

var ENVIRONMENT_IS_WORKER = typeof importScripts === "function";

var ENVIRONMENT_IS_NODE = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";

var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

if (Module["ENVIRONMENT"]) {
 throw new Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");
}

var ENVIRONMENT_IS_PTHREAD = Module["ENVIRONMENT_IS_PTHREAD"] || false;

var scriptDirectory = "";

function locateFile(path) {
 if (Module["locateFile"]) {
  return Module["locateFile"](path, scriptDirectory);
 }
 return scriptDirectory + path;
}

var read_, readAsync, readBinary, setWindowTitle;

if (ENVIRONMENT_IS_SHELL) {
 if (typeof process === "object" && typeof require === "function" || typeof window === "object" || typeof importScripts === "function") throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
 if (typeof read != "undefined") {
  read_ = function shell_read(f) {
   return read(f);
  };
 }
 readBinary = function readBinary(f) {
  var data;
  if (typeof readbuffer === "function") {
   return new Uint8Array(readbuffer(f));
  }
  data = read(f, "binary");
  assert(typeof data === "object");
  return data;
 };
 readAsync = function readAsync(f, onload, onerror) {
  setTimeout(function() {
   onload(readBinary(f));
  }, 0);
 };
 if (typeof scriptArgs != "undefined") {
  arguments_ = scriptArgs;
 } else if (typeof arguments != "undefined") {
  arguments_ = arguments;
 }
 if (typeof quit === "function") {
  quit_ = function(status) {
   quit(status);
  };
 }
 if (typeof print !== "undefined") {
  if (typeof console === "undefined") console = {};
  console.log = print;
  console.warn = console.error = typeof printErr !== "undefined" ? printErr : print;
 }
} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
 if (ENVIRONMENT_IS_WORKER) {
  scriptDirectory = self.location.href;
 } else if (typeof document !== "undefined" && document.currentScript) {
  scriptDirectory = document.currentScript.src;
 }
 if (_scriptDir) {
  scriptDirectory = _scriptDir;
 }
 if (scriptDirectory.indexOf("blob:") !== 0) {
  scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1);
 } else {
  scriptDirectory = "";
 }
 if (!(typeof window === "object" || typeof importScripts === "function")) throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
 {
  read_ = function(url) {
   var xhr = new XMLHttpRequest();
   xhr.open("GET", url, false);
   xhr.send(null);
   return xhr.responseText;
  };
  if (ENVIRONMENT_IS_WORKER) {
   readBinary = function(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.responseType = "arraybuffer";
    xhr.send(null);
    return new Uint8Array(xhr.response);
   };
  }
  readAsync = function(url, onload, onerror) {
   var xhr = new XMLHttpRequest();
   xhr.open("GET", url, true);
   xhr.responseType = "arraybuffer";
   xhr.onload = function() {
    if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
     onload(xhr.response);
     return;
    }
    onerror();
   };
   xhr.onerror = onerror;
   xhr.send(null);
  };
 }
 setWindowTitle = function(title) {
  document.title = title;
 };
} else {
 throw new Error("environment detection error");
}

var out = Module["print"] || console.log.bind(console);

var err = Module["printErr"] || console.warn.bind(console);

for (key in moduleOverrides) {
 if (moduleOverrides.hasOwnProperty(key)) {
  Module[key] = moduleOverrides[key];
 }
}

moduleOverrides = null;

if (Module["arguments"]) arguments_ = Module["arguments"];

if (!Object.getOwnPropertyDescriptor(Module, "arguments")) {
 Object.defineProperty(Module, "arguments", {
  configurable: true,
  get: function() {
   abort("Module.arguments has been replaced with plain arguments_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

if (Module["thisProgram"]) thisProgram = Module["thisProgram"];

if (!Object.getOwnPropertyDescriptor(Module, "thisProgram")) {
 Object.defineProperty(Module, "thisProgram", {
  configurable: true,
  get: function() {
   abort("Module.thisProgram has been replaced with plain thisProgram (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

if (Module["quit"]) quit_ = Module["quit"];

if (!Object.getOwnPropertyDescriptor(Module, "quit")) {
 Object.defineProperty(Module, "quit", {
  configurable: true,
  get: function() {
   abort("Module.quit has been replaced with plain quit_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

assert(typeof Module["memoryInitializerPrefixURL"] === "undefined", "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");

assert(typeof Module["pthreadMainPrefixURL"] === "undefined", "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");

assert(typeof Module["cdInitializerPrefixURL"] === "undefined", "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");

assert(typeof Module["filePackagePrefixURL"] === "undefined", "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");

assert(typeof Module["read"] === "undefined", "Module.read option was removed (modify read_ in JS)");

assert(typeof Module["readAsync"] === "undefined", "Module.readAsync option was removed (modify readAsync in JS)");

assert(typeof Module["readBinary"] === "undefined", "Module.readBinary option was removed (modify readBinary in JS)");

assert(typeof Module["setWindowTitle"] === "undefined", "Module.setWindowTitle option was removed (modify setWindowTitle in JS)");

assert(typeof Module["TOTAL_MEMORY"] === "undefined", "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");

if (!Object.getOwnPropertyDescriptor(Module, "read")) {
 Object.defineProperty(Module, "read", {
  configurable: true,
  get: function() {
   abort("Module.read has been replaced with plain read_ (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module, "readAsync")) {
 Object.defineProperty(Module, "readAsync", {
  configurable: true,
  get: function() {
   abort("Module.readAsync has been replaced with plain readAsync (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module, "readBinary")) {
 Object.defineProperty(Module, "readBinary", {
  configurable: true,
  get: function() {
   abort("Module.readBinary has been replaced with plain readBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

if (!Object.getOwnPropertyDescriptor(Module, "setWindowTitle")) {
 Object.defineProperty(Module, "setWindowTitle", {
  configurable: true,
  get: function() {
   abort("Module.setWindowTitle has been replaced with plain setWindowTitle (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

var PROXYFS = "PROXYFS is no longer included by default; build with -lproxyfs.js";

var WORKERFS = "WORKERFS is no longer included by default; build with -lworkerfs.js";

var NODEFS = "NODEFS is no longer included by default; build with -lnodefs.js";

assert(ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER || ENVIRONMENT_IS_NODE, "Pthreads do not work in this environment yet (need Web Workers, or an alternative to them)");

assert(!ENVIRONMENT_IS_NODE, "node environment detected but not enabled at build time.  Add 'node' to `-s ENVIRONMENT` to enable.");

assert(!ENVIRONMENT_IS_SHELL, "shell environment detected but not enabled at build time.  Add 'shell' to `-s ENVIRONMENT` to enable.");

var STACK_ALIGN = 16;

function getNativeTypeSize(type) {
 switch (type) {
 case "i1":
 case "i8":
  return 1;

 case "i16":
  return 2;

 case "i32":
  return 4;

 case "i64":
  return 8;

 case "float":
  return 4;

 case "double":
  return 8;

 default:
  {
   if (type[type.length - 1] === "*") {
    return 4;
   } else if (type[0] === "i") {
    var bits = Number(type.substr(1));
    assert(bits % 8 === 0, "getNativeTypeSize invalid bits " + bits + ", type " + type);
    return bits / 8;
   } else {
    return 0;
   }
  }
 }
}

function warnOnce(text) {
 if (!warnOnce.shown) warnOnce.shown = {};
 if (!warnOnce.shown[text]) {
  warnOnce.shown[text] = 1;
  err(text);
 }
}

function convertJsFunctionToWasm(func, sig) {
 if (typeof WebAssembly.Function === "function") {
  var typeNames = {
   "i": "i32",
   "j": "i64",
   "f": "f32",
   "d": "f64"
  };
  var type = {
   parameters: [],
   results: sig[0] == "v" ? [] : [ typeNames[sig[0]] ]
  };
  for (var i = 1; i < sig.length; ++i) {
   type.parameters.push(typeNames[sig[i]]);
  }
  return new WebAssembly.Function(type, func);
 }
 var typeSection = [ 1, 0, 1, 96 ];
 var sigRet = sig.slice(0, 1);
 var sigParam = sig.slice(1);
 var typeCodes = {
  "i": 127,
  "j": 126,
  "f": 125,
  "d": 124
 };
 typeSection.push(sigParam.length);
 for (var i = 0; i < sigParam.length; ++i) {
  typeSection.push(typeCodes[sigParam[i]]);
 }
 if (sigRet == "v") {
  typeSection.push(0);
 } else {
  typeSection = typeSection.concat([ 1, typeCodes[sigRet] ]);
 }
 typeSection[1] = typeSection.length - 2;
 var bytes = new Uint8Array([ 0, 97, 115, 109, 1, 0, 0, 0 ].concat(typeSection, [ 2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0 ]));
 var module = new WebAssembly.Module(bytes);
 var instance = new WebAssembly.Instance(module, {
  "e": {
   "f": func
  }
 });
 var wrappedFunc = instance.exports["f"];
 return wrappedFunc;
}

var freeTableIndexes = [];

var functionsInTableMap;

function getEmptyTableSlot() {
 if (freeTableIndexes.length) {
  return freeTableIndexes.pop();
 }
 try {
  wasmTable.grow(1);
 } catch (err) {
  if (!(err instanceof RangeError)) {
   throw err;
  }
  throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
 }
 return wasmTable.length - 1;
}

function addFunctionWasm(func, sig) {
 if (!functionsInTableMap) {
  functionsInTableMap = new WeakMap();
  for (var i = 0; i < wasmTable.length; i++) {
   var item = wasmTable.get(i);
   if (item) {
    functionsInTableMap.set(item, i);
   }
  }
 }
 if (functionsInTableMap.has(func)) {
  return functionsInTableMap.get(func);
 }
 var ret = getEmptyTableSlot();
 try {
  wasmTable.set(ret, func);
 } catch (err) {
  if (!(err instanceof TypeError)) {
   throw err;
  }
  assert(typeof sig !== "undefined", "Missing signature argument to addFunction: " + func);
  var wrapped = convertJsFunctionToWasm(func, sig);
  wasmTable.set(ret, wrapped);
 }
 functionsInTableMap.set(func, ret);
 return ret;
}

function removeFunction(index) {
 functionsInTableMap.delete(wasmTable.get(index));
 freeTableIndexes.push(index);
}

function addFunction(func, sig) {
 assert(typeof func !== "undefined");
 return addFunctionWasm(func, sig);
}

var tempRet0 = 0;

var setTempRet0 = function(value) {
 tempRet0 = value;
};

var getTempRet0 = function() {
 return tempRet0;
};

var Atomics_load = Atomics.load;

var Atomics_store = Atomics.store;

var Atomics_compareExchange = Atomics.compareExchange;

var wasmBinary;

if (Module["wasmBinary"]) wasmBinary = Module["wasmBinary"];

if (!Object.getOwnPropertyDescriptor(Module, "wasmBinary")) {
 Object.defineProperty(Module, "wasmBinary", {
  configurable: true,
  get: function() {
   abort("Module.wasmBinary has been replaced with plain wasmBinary (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

var noExitRuntime = Module["noExitRuntime"] || false;

if (!Object.getOwnPropertyDescriptor(Module, "noExitRuntime")) {
 Object.defineProperty(Module, "noExitRuntime", {
  configurable: true,
  get: function() {
   abort("Module.noExitRuntime has been replaced with plain noExitRuntime (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

if (typeof WebAssembly !== "object") {
 abort("no native wasm support detected");
}

function setValue(ptr, value, type, noSafe) {
 type = type || "i8";
 if (type.charAt(type.length - 1) === "*") type = "i32";
 switch (type) {
 case "i1":
  GROWABLE_HEAP_I8()[ptr >> 0] = value;
  break;

 case "i8":
  GROWABLE_HEAP_I8()[ptr >> 0] = value;
  break;

 case "i16":
  GROWABLE_HEAP_I16()[ptr >> 1] = value;
  break;

 case "i32":
  GROWABLE_HEAP_I32()[ptr >> 2] = value;
  break;

 case "i64":
  tempI64 = [ value >>> 0, (tempDouble = value, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
  GROWABLE_HEAP_I32()[ptr >> 2] = tempI64[0], GROWABLE_HEAP_I32()[ptr + 4 >> 2] = tempI64[1];
  break;

 case "float":
  GROWABLE_HEAP_F32()[ptr >> 2] = value;
  break;

 case "double":
  GROWABLE_HEAP_F64()[ptr >> 3] = value;
  break;

 default:
  abort("invalid type for setValue: " + type);
 }
}

function getValue(ptr, type, noSafe) {
 type = type || "i8";
 if (type.charAt(type.length - 1) === "*") type = "i32";
 switch (type) {
 case "i1":
  return GROWABLE_HEAP_I8()[ptr >> 0];

 case "i8":
  return GROWABLE_HEAP_I8()[ptr >> 0];

 case "i16":
  return GROWABLE_HEAP_I16()[ptr >> 1];

 case "i32":
  return GROWABLE_HEAP_I32()[ptr >> 2];

 case "i64":
  return GROWABLE_HEAP_I32()[ptr >> 2];

 case "float":
  return GROWABLE_HEAP_F32()[ptr >> 2];

 case "double":
  return GROWABLE_HEAP_F64()[ptr >> 3];

 default:
  abort("invalid type for getValue: " + type);
 }
 return null;
}

var wasmMemory;

var wasmModule;

var ABORT = false;

var EXITSTATUS;

function assert(condition, text) {
 if (!condition) {
  abort("Assertion failed: " + text);
 }
}

function getCFunc(ident) {
 var func = Module["_" + ident];
 assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
 return func;
}

function ccall(ident, returnType, argTypes, args, opts) {
 var toC = {
  "string": function(str) {
   var ret = 0;
   if (str !== null && str !== undefined && str !== 0) {
    var len = (str.length << 2) + 1;
    ret = stackAlloc(len);
    stringToUTF8(str, ret, len);
   }
   return ret;
  },
  "array": function(arr) {
   var ret = stackAlloc(arr.length);
   writeArrayToMemory(arr, ret);
   return ret;
  }
 };
 function convertReturnValue(ret) {
  if (returnType === "string") return UTF8ToString(ret);
  if (returnType === "boolean") return Boolean(ret);
  return ret;
 }
 var func = getCFunc(ident);
 var cArgs = [];
 var stack = 0;
 assert(returnType !== "array", 'Return type should not be "array".');
 if (args) {
  for (var i = 0; i < args.length; i++) {
   var converter = toC[argTypes[i]];
   if (converter) {
    if (stack === 0) stack = stackSave();
    cArgs[i] = converter(args[i]);
   } else {
    cArgs[i] = args[i];
   }
  }
 }
 var ret = func.apply(null, cArgs);
 function onDone(ret) {
  if (stack !== 0) stackRestore(stack);
  return convertReturnValue(ret);
 }
 ret = onDone(ret);
 return ret;
}

function cwrap(ident, returnType, argTypes, opts) {
 return function() {
  return ccall(ident, returnType, argTypes, arguments, opts);
 };
}

var ALLOC_NORMAL = 0;

var ALLOC_STACK = 1;

function allocate(slab, allocator) {
 var ret;
 assert(typeof allocator === "number", "allocate no longer takes a type argument");
 assert(typeof slab !== "number", "allocate no longer takes a number as arg0");
 if (allocator == ALLOC_STACK) {
  ret = stackAlloc(slab.length);
 } else {
  ret = _malloc(slab.length);
 }
 if (slab.subarray || slab.slice) {
  GROWABLE_HEAP_U8().set(slab, ret);
 } else {
  GROWABLE_HEAP_U8().set(new Uint8Array(slab), ret);
 }
 return ret;
}

function TextDecoderWrapper(encoding) {
 var textDecoder = new TextDecoder(encoding);
 this.decode = function(data) {
  assert(data instanceof Uint8Array);
  if (data.buffer instanceof SharedArrayBuffer) {
   data = new Uint8Array(data);
  }
  return textDecoder.decode.call(textDecoder, data);
 };
}

var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoderWrapper("utf8") : undefined;

function UTF8ArrayToString(heap, idx, maxBytesToRead) {
 var endIdx = idx + maxBytesToRead;
 var endPtr = idx;
 while (heap[endPtr] && !(endPtr >= endIdx)) ++endPtr;
 if (endPtr - idx > 16 && heap.subarray && UTF8Decoder) {
  return UTF8Decoder.decode(heap.subarray(idx, endPtr));
 } else {
  var str = "";
  while (idx < endPtr) {
   var u0 = heap[idx++];
   if (!(u0 & 128)) {
    str += String.fromCharCode(u0);
    continue;
   }
   var u1 = heap[idx++] & 63;
   if ((u0 & 224) == 192) {
    str += String.fromCharCode((u0 & 31) << 6 | u1);
    continue;
   }
   var u2 = heap[idx++] & 63;
   if ((u0 & 240) == 224) {
    u0 = (u0 & 15) << 12 | u1 << 6 | u2;
   } else {
    if ((u0 & 248) != 240) warnOnce("Invalid UTF-8 leading byte 0x" + u0.toString(16) + " encountered when deserializing a UTF-8 string in wasm memory to a JS string!");
    u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heap[idx++] & 63;
   }
   if (u0 < 65536) {
    str += String.fromCharCode(u0);
   } else {
    var ch = u0 - 65536;
    str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
   }
  }
 }
 return str;
}

function UTF8ToString(ptr, maxBytesToRead) {
 return ptr ? UTF8ArrayToString(GROWABLE_HEAP_U8(), ptr, maxBytesToRead) : "";
}

function stringToUTF8Array(str, heap, outIdx, maxBytesToWrite) {
 if (!(maxBytesToWrite > 0)) return 0;
 var startIdx = outIdx;
 var endIdx = outIdx + maxBytesToWrite - 1;
 for (var i = 0; i < str.length; ++i) {
  var u = str.charCodeAt(i);
  if (u >= 55296 && u <= 57343) {
   var u1 = str.charCodeAt(++i);
   u = 65536 + ((u & 1023) << 10) | u1 & 1023;
  }
  if (u <= 127) {
   if (outIdx >= endIdx) break;
   heap[outIdx++] = u;
  } else if (u <= 2047) {
   if (outIdx + 1 >= endIdx) break;
   heap[outIdx++] = 192 | u >> 6;
   heap[outIdx++] = 128 | u & 63;
  } else if (u <= 65535) {
   if (outIdx + 2 >= endIdx) break;
   heap[outIdx++] = 224 | u >> 12;
   heap[outIdx++] = 128 | u >> 6 & 63;
   heap[outIdx++] = 128 | u & 63;
  } else {
   if (outIdx + 3 >= endIdx) break;
   if (u >= 2097152) warnOnce("Invalid Unicode code point 0x" + u.toString(16) + " encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x1FFFFF).");
   heap[outIdx++] = 240 | u >> 18;
   heap[outIdx++] = 128 | u >> 12 & 63;
   heap[outIdx++] = 128 | u >> 6 & 63;
   heap[outIdx++] = 128 | u & 63;
  }
 }
 heap[outIdx] = 0;
 return outIdx - startIdx;
}

function stringToUTF8(str, outPtr, maxBytesToWrite) {
 assert(typeof maxBytesToWrite == "number", "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
 return stringToUTF8Array(str, GROWABLE_HEAP_U8(), outPtr, maxBytesToWrite);
}

function lengthBytesUTF8(str) {
 var len = 0;
 for (var i = 0; i < str.length; ++i) {
  var u = str.charCodeAt(i);
  if (u >= 55296 && u <= 57343) u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
  if (u <= 127) ++len; else if (u <= 2047) len += 2; else if (u <= 65535) len += 3; else len += 4;
 }
 return len;
}

function AsciiToString(ptr) {
 var str = "";
 while (1) {
  var ch = GROWABLE_HEAP_U8()[ptr++ >> 0];
  if (!ch) return str;
  str += String.fromCharCode(ch);
 }
}

function stringToAscii(str, outPtr) {
 return writeAsciiToMemory(str, outPtr, false);
}

var UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoderWrapper("utf-16le") : undefined;

function UTF16ToString(ptr, maxBytesToRead) {
 assert(ptr % 2 == 0, "Pointer passed to UTF16ToString must be aligned to two bytes!");
 var endPtr = ptr;
 var idx = endPtr >> 1;
 var maxIdx = idx + maxBytesToRead / 2;
 while (!(idx >= maxIdx) && GROWABLE_HEAP_U16()[idx]) ++idx;
 endPtr = idx << 1;
 if (endPtr - ptr > 32 && UTF16Decoder) {
  return UTF16Decoder.decode(GROWABLE_HEAP_U8().subarray(ptr, endPtr));
 } else {
  var str = "";
  for (var i = 0; !(i >= maxBytesToRead / 2); ++i) {
   var codeUnit = GROWABLE_HEAP_I16()[ptr + i * 2 >> 1];
   if (codeUnit == 0) break;
   str += String.fromCharCode(codeUnit);
  }
  return str;
 }
}

function stringToUTF16(str, outPtr, maxBytesToWrite) {
 assert(outPtr % 2 == 0, "Pointer passed to stringToUTF16 must be aligned to two bytes!");
 assert(typeof maxBytesToWrite == "number", "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
 if (maxBytesToWrite === undefined) {
  maxBytesToWrite = 2147483647;
 }
 if (maxBytesToWrite < 2) return 0;
 maxBytesToWrite -= 2;
 var startPtr = outPtr;
 var numCharsToWrite = maxBytesToWrite < str.length * 2 ? maxBytesToWrite / 2 : str.length;
 for (var i = 0; i < numCharsToWrite; ++i) {
  var codeUnit = str.charCodeAt(i);
  GROWABLE_HEAP_I16()[outPtr >> 1] = codeUnit;
  outPtr += 2;
 }
 GROWABLE_HEAP_I16()[outPtr >> 1] = 0;
 return outPtr - startPtr;
}

function lengthBytesUTF16(str) {
 return str.length * 2;
}

function UTF32ToString(ptr, maxBytesToRead) {
 assert(ptr % 4 == 0, "Pointer passed to UTF32ToString must be aligned to four bytes!");
 var i = 0;
 var str = "";
 while (!(i >= maxBytesToRead / 4)) {
  var utf32 = GROWABLE_HEAP_I32()[ptr + i * 4 >> 2];
  if (utf32 == 0) break;
  ++i;
  if (utf32 >= 65536) {
   var ch = utf32 - 65536;
   str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
  } else {
   str += String.fromCharCode(utf32);
  }
 }
 return str;
}

function stringToUTF32(str, outPtr, maxBytesToWrite) {
 assert(outPtr % 4 == 0, "Pointer passed to stringToUTF32 must be aligned to four bytes!");
 assert(typeof maxBytesToWrite == "number", "stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
 if (maxBytesToWrite === undefined) {
  maxBytesToWrite = 2147483647;
 }
 if (maxBytesToWrite < 4) return 0;
 var startPtr = outPtr;
 var endPtr = startPtr + maxBytesToWrite - 4;
 for (var i = 0; i < str.length; ++i) {
  var codeUnit = str.charCodeAt(i);
  if (codeUnit >= 55296 && codeUnit <= 57343) {
   var trailSurrogate = str.charCodeAt(++i);
   codeUnit = 65536 + ((codeUnit & 1023) << 10) | trailSurrogate & 1023;
  }
  GROWABLE_HEAP_I32()[outPtr >> 2] = codeUnit;
  outPtr += 4;
  if (outPtr + 4 > endPtr) break;
 }
 GROWABLE_HEAP_I32()[outPtr >> 2] = 0;
 return outPtr - startPtr;
}

function lengthBytesUTF32(str) {
 var len = 0;
 for (var i = 0; i < str.length; ++i) {
  var codeUnit = str.charCodeAt(i);
  if (codeUnit >= 55296 && codeUnit <= 57343) ++i;
  len += 4;
 }
 return len;
}

function allocateUTF8(str) {
 var size = lengthBytesUTF8(str) + 1;
 var ret = _malloc(size);
 if (ret) stringToUTF8Array(str, GROWABLE_HEAP_I8(), ret, size);
 return ret;
}

function allocateUTF8OnStack(str) {
 var size = lengthBytesUTF8(str) + 1;
 var ret = stackAlloc(size);
 stringToUTF8Array(str, GROWABLE_HEAP_I8(), ret, size);
 return ret;
}

function writeStringToMemory(string, buffer, dontAddNull) {
 warnOnce("writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!");
 var lastChar, end;
 if (dontAddNull) {
  end = buffer + lengthBytesUTF8(string);
  lastChar = GROWABLE_HEAP_I8()[end];
 }
 stringToUTF8(string, buffer, Infinity);
 if (dontAddNull) GROWABLE_HEAP_I8()[end] = lastChar;
}

function writeArrayToMemory(array, buffer) {
 assert(array.length >= 0, "writeArrayToMemory array must have a length (should be an array or typed array)");
 GROWABLE_HEAP_I8().set(array, buffer);
}

function writeAsciiToMemory(str, buffer, dontAddNull) {
 for (var i = 0; i < str.length; ++i) {
  assert(str.charCodeAt(i) === str.charCodeAt(i) & 255);
  GROWABLE_HEAP_I8()[buffer++ >> 0] = str.charCodeAt(i);
 }
 if (!dontAddNull) GROWABLE_HEAP_I8()[buffer >> 0] = 0;
}

function alignUp(x, multiple) {
 if (x % multiple > 0) {
  x += multiple - x % multiple;
 }
 return x;
}

var HEAP, buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

if (ENVIRONMENT_IS_PTHREAD) {
 buffer = Module["buffer"];
}

function updateGlobalBufferAndViews(buf) {
 buffer = buf;
 Module["HEAP8"] = HEAP8 = new Int8Array(buf);
 Module["HEAP16"] = HEAP16 = new Int16Array(buf);
 Module["HEAP32"] = HEAP32 = new Int32Array(buf);
 Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
 Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
 Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
 Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
 Module["HEAPF64"] = HEAPF64 = new Float64Array(buf);
}

var TOTAL_STACK = 5242880;

if (Module["TOTAL_STACK"]) assert(TOTAL_STACK === Module["TOTAL_STACK"], "the stack size can no longer be determined at runtime");

var INITIAL_MEMORY = Module["INITIAL_MEMORY"] || 33554432;

if (!Object.getOwnPropertyDescriptor(Module, "INITIAL_MEMORY")) {
 Object.defineProperty(Module, "INITIAL_MEMORY", {
  configurable: true,
  get: function() {
   abort("Module.INITIAL_MEMORY has been replaced with plain INITIAL_MEMORY (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)");
  }
 });
}

assert(INITIAL_MEMORY >= TOTAL_STACK, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + INITIAL_MEMORY + "! (TOTAL_STACK=" + TOTAL_STACK + ")");

assert(typeof Int32Array !== "undefined" && typeof Float64Array !== "undefined" && Int32Array.prototype.subarray !== undefined && Int32Array.prototype.set !== undefined, "JS engine does not provide full typed array support");

if (ENVIRONMENT_IS_PTHREAD) {
 wasmMemory = Module["wasmMemory"];
 buffer = Module["buffer"];
} else {
 if (Module["wasmMemory"]) {
  wasmMemory = Module["wasmMemory"];
 } else {
  wasmMemory = new WebAssembly.Memory({
   "initial": INITIAL_MEMORY / 65536,
   "maximum": 2147483648 / 65536,
   "shared": true
  });
  if (!(wasmMemory.buffer instanceof SharedArrayBuffer)) {
   err("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag");
   if (ENVIRONMENT_IS_NODE) {
    console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)");
   }
   throw Error("bad memory");
  }
 }
}

if (wasmMemory) {
 buffer = wasmMemory.buffer;
}

INITIAL_MEMORY = buffer.byteLength;

assert(INITIAL_MEMORY % 65536 === 0);

updateGlobalBufferAndViews(buffer);

var wasmTable;

function writeStackCookie() {
 var max = _emscripten_stack_get_end();
 assert((max & 3) == 0);
 GROWABLE_HEAP_U32()[(max >> 2) + 1] = 34821223;
 GROWABLE_HEAP_U32()[(max >> 2) + 2] = 2310721022;
 GROWABLE_HEAP_I32()[0] = 1668509029;
}

function checkStackCookie() {
 if (ABORT) return;
 var max = _emscripten_stack_get_end();
 var cookie1 = GROWABLE_HEAP_U32()[(max >> 2) + 1];
 var cookie2 = GROWABLE_HEAP_U32()[(max >> 2) + 2];
 if (cookie1 != 34821223 || cookie2 != 2310721022) {
  abort("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + cookie2.toString(16) + " " + cookie1.toString(16));
 }
 if (GROWABLE_HEAP_I32()[0] !== 1668509029) abort("Runtime error: The application has corrupted its heap memory area (address zero)!");
}

(function() {
 var h16 = new Int16Array(1);
 var h8 = new Int8Array(h16.buffer);
 h16[0] = 25459;
 if (h8[0] !== 115 || h8[1] !== 99) throw "Runtime error: expected the system to be little-endian! (Run with -s SUPPORT_BIG_ENDIAN=1 to bypass)";
})();

var __ATPRERUN__ = [];

var __ATINIT__ = [];

var __ATMAIN__ = [];

var __ATEXIT__ = [];

var __ATPOSTRUN__ = [];

var runtimeInitialized = false;

var runtimeExited = false;

var runtimeKeepaliveCounter = 0;

function keepRuntimeAlive() {
 return noExitRuntime || runtimeKeepaliveCounter > 0;
}

function preRun() {
 if (ENVIRONMENT_IS_PTHREAD) return;
 if (Module["preRun"]) {
  if (typeof Module["preRun"] == "function") Module["preRun"] = [ Module["preRun"] ];
  while (Module["preRun"].length) {
   addOnPreRun(Module["preRun"].shift());
  }
 }
 callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
 checkStackCookie();
 assert(!runtimeInitialized);
 runtimeInitialized = true;
 if (ENVIRONMENT_IS_PTHREAD) return;
 if (!Module["noFSInit"] && !FS.init.initialized) FS.init();
 FS.ignorePermissions = false;
 TTY.init();
 SOCKFS.root = FS.mount(SOCKFS, {}, null);
 callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
 checkStackCookie();
 if (ENVIRONMENT_IS_PTHREAD) return;
 callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
 checkStackCookie();
 if (ENVIRONMENT_IS_PTHREAD) return;
 callRuntimeCallbacks(__ATEXIT__);
 FS.quit();
 TTY.shutdown();
 runtimeExited = true;
}

function postRun() {
 checkStackCookie();
 if (ENVIRONMENT_IS_PTHREAD) return;
 if (Module["postRun"]) {
  if (typeof Module["postRun"] == "function") Module["postRun"] = [ Module["postRun"] ];
  while (Module["postRun"].length) {
   addOnPostRun(Module["postRun"].shift());
  }
 }
 callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
 __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
 __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
 __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
 __ATEXIT__.unshift(cb);
}

function addOnPostRun(cb) {
 __ATPOSTRUN__.unshift(cb);
}

assert(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");

assert(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");

assert(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");

assert(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");

var runDependencies = 0;

var runDependencyWatcher = null;

var dependenciesFulfilled = null;

var runDependencyTracking = {};

function getUniqueRunDependency(id) {
 var orig = id;
 while (1) {
  if (!runDependencyTracking[id]) return id;
  id = orig + Math.random();
 }
}

function addRunDependency(id) {
 runDependencies++;
 if (Module["monitorRunDependencies"]) {
  Module["monitorRunDependencies"](runDependencies);
 }
 if (id) {
  assert(!runDependencyTracking[id]);
  runDependencyTracking[id] = 1;
  if (runDependencyWatcher === null && typeof setInterval !== "undefined") {
   runDependencyWatcher = setInterval(function() {
    if (ABORT) {
     clearInterval(runDependencyWatcher);
     runDependencyWatcher = null;
     return;
    }
    var shown = false;
    for (var dep in runDependencyTracking) {
     if (!shown) {
      shown = true;
      err("still waiting on run dependencies:");
     }
     err("dependency: " + dep);
    }
    if (shown) {
     err("(end of list)");
    }
   }, 1e4);
  }
 } else {
  err("warning: run dependency added without ID");
 }
}

function removeRunDependency(id) {
 runDependencies--;
 if (Module["monitorRunDependencies"]) {
  Module["monitorRunDependencies"](runDependencies);
 }
 if (id) {
  assert(runDependencyTracking[id]);
  delete runDependencyTracking[id];
 } else {
  err("warning: run dependency removed without ID");
 }
 if (runDependencies == 0) {
  if (runDependencyWatcher !== null) {
   clearInterval(runDependencyWatcher);
   runDependencyWatcher = null;
  }
  if (dependenciesFulfilled) {
   var callback = dependenciesFulfilled;
   dependenciesFulfilled = null;
   callback();
  }
 }
}

Module["preloadedImages"] = {};

Module["preloadedAudios"] = {};

function abort(what) {
 if (ENVIRONMENT_IS_PTHREAD) {
  postMessage({
   "cmd": "onAbort",
   "arg": what
  });
 } else {
  if (Module["onAbort"]) {
   Module["onAbort"](what);
  }
 }
 what += "";
 err(what);
 ABORT = true;
 EXITSTATUS = 1;
 var output = "abort(" + what + ") at " + stackTrace();
 what = output;
 var e = new WebAssembly.RuntimeError(what);
 readyPromiseReject(e);
 throw e;
}

var dataURIPrefix = "data:application/octet-stream;base64,";

function isDataURI(filename) {
 return filename.startsWith(dataURIPrefix);
}

function isFileURI(filename) {
 return filename.startsWith("file://");
}

function createExportWrapper(name, fixedasm) {
 return function() {
  var displayName = name;
  var asm = fixedasm;
  if (!fixedasm) {
   asm = Module["asm"];
  }
  assert(runtimeInitialized, "native function `" + displayName + "` called before runtime initialization");
  assert(!runtimeExited, "native function `" + displayName + "` called after runtime exit (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  if (!asm[name]) {
   assert(asm[name], "exported native function `" + displayName + "` not found");
  }
  return asm[name].apply(null, arguments);
 };
}

var wasmBinaryFile;

wasmBinaryFile = "godot.web.template_release.wasm32.wasm";

if (!isDataURI(wasmBinaryFile)) {
 wasmBinaryFile = locateFile(wasmBinaryFile);
}

function getBinary(file) {
 try {
  if (file == wasmBinaryFile && wasmBinary) {
   return new Uint8Array(wasmBinary);
  }
  if (readBinary) {
   return readBinary(file);
  } else {
   throw "both async and sync fetching of the wasm failed";
  }
 } catch (err) {
  abort(err);
 }
}

function getBinaryPromise() {
 if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
  if (typeof fetch === "function") {
   return fetch(wasmBinaryFile, {
    credentials: "same-origin"
   }).then(function(response) {
    if (!response["ok"]) {
     throw "failed to load wasm binary file at '" + wasmBinaryFile + "'";
    }
    return response["arrayBuffer"]();
   }).catch(function() {
    return getBinary(wasmBinaryFile);
   });
  }
 }
 return Promise.resolve().then(function() {
  return getBinary(wasmBinaryFile);
 });
}

function createWasm() {
 var info = {
  "env": asmLibraryArg,
  "wasi_snapshot_preview1": asmLibraryArg
 };
 function receiveInstance(instance, module) {
  var exports = instance.exports;
  Module["asm"] = exports;
  wasmTable = Module["asm"]["__indirect_function_table"];
  assert(wasmTable, "table not found in wasm exports");
  addOnInit(Module["asm"]["__wasm_call_ctors"]);
  PThread.tlsInitFunctions.push(Module["asm"]["emscripten_tls_init"]);
  wasmModule = module;
  if (!ENVIRONMENT_IS_PTHREAD) {
   var numWorkersToLoad = PThread.unusedWorkers.length;
   PThread.unusedWorkers.forEach(function(w) {
    PThread.loadWasmModuleToWorker(w, function() {
     if (!--numWorkersToLoad) removeRunDependency("wasm-instantiate");
    });
   });
  }
 }
 if (!ENVIRONMENT_IS_PTHREAD) {
  addRunDependency("wasm-instantiate");
 }
 var trueModule = Module;
 function receiveInstantiationResult(result) {
  assert(Module === trueModule, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
  trueModule = null;
  receiveInstance(result["instance"], result["module"]);
 }
 function instantiateArrayBuffer(receiver) {
  return getBinaryPromise().then(function(binary) {
   return WebAssembly.instantiate(binary, info);
  }).then(function(instance) {
   return instance;
  }).then(receiver, function(reason) {
   err("failed to asynchronously prepare wasm: " + reason);
   if (isFileURI(wasmBinaryFile)) {
    err("warning: Loading from a file URI (" + wasmBinaryFile + ") is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing");
   }
   abort(reason);
  });
 }
 function instantiateAsync() {
  if (!wasmBinary && typeof WebAssembly.instantiateStreaming === "function" && !isDataURI(wasmBinaryFile) && typeof fetch === "function") {
   return fetch(wasmBinaryFile, {
    credentials: "same-origin"
   }).then(function(response) {
    var result = WebAssembly.instantiateStreaming(response, info);
    return result.then(receiveInstantiationResult, function(reason) {
     err("wasm streaming compile failed: " + reason);
     err("falling back to ArrayBuffer instantiation");
     return instantiateArrayBuffer(receiveInstantiationResult);
    });
   });
  } else {
   return instantiateArrayBuffer(receiveInstantiationResult);
  }
 }
 if (Module["instantiateWasm"]) {
  try {
   var exports = Module["instantiateWasm"](info, receiveInstance);
   return exports;
  } catch (e) {
   err("Module.instantiateWasm callback failed with error: " + e);
   return false;
  }
 }
 instantiateAsync().catch(readyPromiseReject);
 return {};
}

var tempDouble;

var tempI64;

var ASM_CONSTS = {
 4166912: function() {
  console.error("emscripten_webgl_create_context: attributes pointer is null!");
 }
};

function initPthreadsJS(tb) {
 PThread.initRuntime(tb);
}

function callRuntimeCallbacks(callbacks) {
 while (callbacks.length > 0) {
  var callback = callbacks.shift();
  if (typeof callback == "function") {
   callback(Module);
   continue;
  }
  var func = callback.func;
  if (typeof func === "number") {
   if (callback.arg === undefined) {
    wasmTable.get(func)();
   } else {
    wasmTable.get(func)(callback.arg);
   }
  } else {
   func(callback.arg === undefined ? null : callback.arg);
  }
 }
}

function demangle(func) {
 warnOnce("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");
 return func;
}

function demangleAll(text) {
 var regex = /\b_Z[\w\d_]+/g;
 return text.replace(regex, function(x) {
  var y = demangle(x);
  return x === y ? x : y + " [" + x + "]";
 });
}

function _emscripten_futex_wake(addr, count) {
 if (addr <= 0 || addr > GROWABLE_HEAP_I8().length || addr & 3 != 0 || count < 0) return -28;
 if (count == 0) return 0;
 if (count >= 2147483647) count = Infinity;
 assert(__emscripten_main_thread_futex > 0);
 var mainThreadWaitAddress = Atomics.load(GROWABLE_HEAP_I32(), __emscripten_main_thread_futex >> 2);
 var mainThreadWoken = 0;
 if (mainThreadWaitAddress == addr) {
  assert(!ENVIRONMENT_IS_WEB);
  var loadedAddr = Atomics.compareExchange(GROWABLE_HEAP_I32(), __emscripten_main_thread_futex >> 2, mainThreadWaitAddress, 0);
  if (loadedAddr == mainThreadWaitAddress) {
   --count;
   mainThreadWoken = 1;
   if (count <= 0) return 1;
  }
 }
 var ret = Atomics.notify(GROWABLE_HEAP_I32(), addr >> 2, count);
 if (ret >= 0) return ret + mainThreadWoken;
 throw "Atomics.notify returned an unexpected value " + ret;
}

Module["_emscripten_futex_wake"] = _emscripten_futex_wake;

function killThread(pthread_ptr) {
 if (ENVIRONMENT_IS_PTHREAD) throw "Internal Error! killThread() can only ever be called from main application thread!";
 if (!pthread_ptr) throw "Internal Error! Null pthread_ptr in killThread!";
 GROWABLE_HEAP_I32()[pthread_ptr + 8 >> 2] = 0;
 var pthread = PThread.pthreads[pthread_ptr];
 delete PThread.pthreads[pthread_ptr];
 pthread.worker.terminate();
 PThread.freeThreadData(pthread);
 PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(pthread.worker), 1);
 pthread.worker.pthread = undefined;
}

function cancelThread(pthread_ptr) {
 if (ENVIRONMENT_IS_PTHREAD) throw "Internal Error! cancelThread() can only ever be called from main application thread!";
 if (!pthread_ptr) throw "Internal Error! Null pthread_ptr in cancelThread!";
 var pthread = PThread.pthreads[pthread_ptr];
 pthread.worker.postMessage({
  "cmd": "cancel"
 });
}

function cleanupThread(pthread_ptr) {
 if (ENVIRONMENT_IS_PTHREAD) throw "Internal Error! cleanupThread() can only ever be called from main application thread!";
 if (!pthread_ptr) throw "Internal Error! Null pthread_ptr in cleanupThread!";
 var pthread = PThread.pthreads[pthread_ptr];
 if (pthread) {
  GROWABLE_HEAP_I32()[pthread_ptr + 8 >> 2] = 0;
  var worker = pthread.worker;
  PThread.returnWorkerToPool(worker);
 }
}

function handleException(e) {
 if (e instanceof ExitStatus || e == "unwind") {
  return EXITSTATUS;
 }
 var toLog = e;
 if (e && typeof e === "object" && e.stack) {
  toLog = [ e, e.stack ];
 }
 err("exception thrown: " + toLog);
 quit_(1, e);
}

var PThread = {
 unusedWorkers: [],
 runningWorkers: [],
 tlsInitFunctions: [],
 initMainThreadBlock: function() {
  assert(!ENVIRONMENT_IS_PTHREAD);
  var pthreadPoolSize = 8;
  for (var i = 0; i < pthreadPoolSize; ++i) {
   PThread.allocateUnusedWorker();
  }
 },
 initRuntime: function(tb) {
  __emscripten_thread_init(tb, !ENVIRONMENT_IS_WORKER, 1);
  PThread.mainRuntimeThread = true;
 },
 initWorker: function() {},
 pthreads: {},
 threadExitHandlers: [],
 setExitStatus: function(status) {
  EXITSTATUS = status;
 },
 terminateAllThreads: function() {
  for (var t in PThread.pthreads) {
   var pthread = PThread.pthreads[t];
   if (pthread && pthread.worker) {
    PThread.returnWorkerToPool(pthread.worker);
   }
  }
  PThread.pthreads = {};
  for (var i = 0; i < PThread.unusedWorkers.length; ++i) {
   var worker = PThread.unusedWorkers[i];
   assert(!worker.pthread);
   worker.terminate();
  }
  PThread.unusedWorkers = [];
  for (var i = 0; i < PThread.runningWorkers.length; ++i) {
   var worker = PThread.runningWorkers[i];
   var pthread = worker.pthread;
   assert(pthread, "This Worker should have a pthread it is executing");
   worker.terminate();
   PThread.freeThreadData(pthread);
  }
  PThread.runningWorkers = [];
 },
 freeThreadData: function(pthread) {
  if (!pthread) return;
  if (pthread.threadInfoStruct) {
   _free(pthread.threadInfoStruct);
  }
  pthread.threadInfoStruct = 0;
  if (pthread.allocatedOwnStack && pthread.stackBase) _free(pthread.stackBase);
  pthread.stackBase = 0;
  if (pthread.worker) pthread.worker.pthread = null;
 },
 returnWorkerToPool: function(worker) {
  PThread.runWithoutMainThreadQueuedCalls(function() {
   delete PThread.pthreads[worker.pthread.threadInfoStruct];
   PThread.unusedWorkers.push(worker);
   PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker), 1);
   PThread.freeThreadData(worker.pthread);
   worker.pthread = undefined;
  });
 },
 runWithoutMainThreadQueuedCalls: function(func) {
  assert(PThread.mainRuntimeThread, "runWithoutMainThreadQueuedCalls must be done on the main runtime thread");
  assert(__emscripten_allow_main_runtime_queued_calls);
  GROWABLE_HEAP_I32()[__emscripten_allow_main_runtime_queued_calls >> 2] = 0;
  try {
   func();
  } finally {
   GROWABLE_HEAP_I32()[__emscripten_allow_main_runtime_queued_calls >> 2] = 1;
  }
 },
 receiveObjectTransfer: function(data) {},
 threadInit: function() {
  for (var i in PThread.tlsInitFunctions) {
   PThread.tlsInitFunctions[i]();
  }
 },
 loadWasmModuleToWorker: function(worker, onFinishedLoading) {
  worker.onmessage = function(e) {
   var d = e["data"];
   var cmd = d["cmd"];
   if (worker.pthread) PThread.currentProxiedOperationCallerThread = worker.pthread.threadInfoStruct;
   if (d["targetThread"] && d["targetThread"] != _pthread_self()) {
    var thread = PThread.pthreads[d.targetThread];
    if (thread) {
     thread.worker.postMessage(e.data, d["transferList"]);
    } else {
     err('Internal error! Worker sent a message "' + cmd + '" to target pthread ' + d["targetThread"] + ", but that thread no longer exists!");
    }
    PThread.currentProxiedOperationCallerThread = undefined;
    return;
   }
   if (cmd === "processQueuedMainThreadWork") {
    _emscripten_main_thread_process_queued_calls();
   } else if (cmd === "spawnThread") {
    spawnThread(e.data);
   } else if (cmd === "cleanupThread") {
    cleanupThread(d["thread"]);
   } else if (cmd === "killThread") {
    killThread(d["thread"]);
   } else if (cmd === "cancelThread") {
    cancelThread(d["thread"]);
   } else if (cmd === "loaded") {
    worker.loaded = true;
    if (onFinishedLoading) onFinishedLoading(worker);
    if (worker.runPthread) {
     worker.runPthread();
     delete worker.runPthread;
    }
   } else if (cmd === "print") {
    out("Thread " + d["threadId"] + ": " + d["text"]);
   } else if (cmd === "printErr") {
    err("Thread " + d["threadId"] + ": " + d["text"]);
   } else if (cmd === "alert") {
    alert("Thread " + d["threadId"] + ": " + d["text"]);
   } else if (cmd === "exit") {
    var detached = worker.pthread && Atomics.load(GROWABLE_HEAP_U32(), worker.pthread.threadInfoStruct + 60 >> 2);
    if (detached) {
     PThread.returnWorkerToPool(worker);
    }
   } else if (cmd === "exitProcess") {
    err("exitProcess requested by worker");
    try {
     exit(d["returnCode"]);
    } catch (e) {
     handleException(e);
    }
   } else if (cmd === "cancelDone") {
    PThread.returnWorkerToPool(worker);
   } else if (e.data.target === "setimmediate") {
    worker.postMessage(e.data);
   } else if (cmd === "onAbort") {
    if (Module["onAbort"]) {
     Module["onAbort"](d["arg"]);
    }
   } else {
    err("worker sent an unknown command " + cmd);
   }
   PThread.currentProxiedOperationCallerThread = undefined;
  };
  worker.onerror = function(e) {
   err("pthread sent an error! " + e.filename + ":" + e.lineno + ": " + e.message);
   throw e;
  };
  assert(wasmMemory instanceof WebAssembly.Memory, "WebAssembly memory should have been loaded by now!");
  assert(wasmModule instanceof WebAssembly.Module, "WebAssembly Module should have been loaded by now!");
  worker.postMessage({
   "cmd": "load",
   "urlOrBlob": Module["mainScriptUrlOrBlob"] || _scriptDir,
   "wasmMemory": wasmMemory,
   "wasmModule": wasmModule
  });
 },
 allocateUnusedWorker: function() {
  var pthreadMainJs = locateFile("godot.web.template_release.wasm32.worker.js");
  PThread.unusedWorkers.push(new Worker(pthreadMainJs));
 },
 getNewWorker: function() {
  if (PThread.unusedWorkers.length == 0) {
   err("Tried to spawn a new thread, but the thread pool is exhausted.\n" + "This might result in a deadlock unless some threads eventually exit or the code explicitly breaks out to the event loop.\n" + "If you want to increase the pool size, use setting `-s PTHREAD_POOL_SIZE=...`." + "\nIf you want to throw an explicit error instead of the risk of deadlocking in those cases, use setting `-s PTHREAD_POOL_SIZE_STRICT=2`.");
   PThread.allocateUnusedWorker();
   PThread.loadWasmModuleToWorker(PThread.unusedWorkers[0]);
  }
  return PThread.unusedWorkers.pop();
 }
};

function establishStackSpace(stackTop, stackMax) {
 _emscripten_stack_set_limits(stackTop, stackMax);
 stackRestore(stackTop);
 writeStackCookie();
}

Module["establishStackSpace"] = establishStackSpace;

function invokeEntryPoint(ptr, arg) {
 return wasmTable.get(ptr)(arg);
}

Module["invokeEntryPoint"] = invokeEntryPoint;

function jsStackTrace() {
 var error = new Error();
 if (!error.stack) {
  try {
   throw new Error();
  } catch (e) {
   error = e;
  }
  if (!error.stack) {
   return "(no stack trace available)";
  }
 }
 return error.stack.toString();
}

function stackTrace() {
 var js = jsStackTrace();
 if (Module["extraStackTrace"]) js += "\n" + Module["extraStackTrace"]();
 return demangleAll(js);
}

function ___assert_fail(condition, filename, line, func) {
 abort("Assertion failed: " + UTF8ToString(condition) + ", at: " + [ filename ? UTF8ToString(filename) : "unknown filename", line, func ? UTF8ToString(func) : "unknown function" ]);
}

function ___call_sighandler(fp, sig) {
 wasmTable.get(fp)(sig);
}

var _emscripten_get_now;

if (ENVIRONMENT_IS_PTHREAD) {
 _emscripten_get_now = function() {
  return performance.now() - Module["__performance_now_clock_drift"];
 };
} else _emscripten_get_now = function() {
 return performance.now();
};

var _emscripten_get_now_is_monotonic = true;

function setErrNo(value) {
 GROWABLE_HEAP_I32()[___errno_location() >> 2] = value;
 return value;
}

function _clock_gettime(clk_id, tp) {
 var now;
 if (clk_id === 0) {
  now = Date.now();
 } else if ((clk_id === 1 || clk_id === 4) && _emscripten_get_now_is_monotonic) {
  now = _emscripten_get_now();
 } else {
  setErrNo(28);
  return -1;
 }
 GROWABLE_HEAP_I32()[tp >> 2] = now / 1e3 | 0;
 GROWABLE_HEAP_I32()[tp + 4 >> 2] = now % 1e3 * 1e3 * 1e3 | 0;
 return 0;
}

function ___clock_gettime(a0, a1) {
 return _clock_gettime(a0, a1);
}

function _atexit(func, arg) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(1, 1, func, arg);
 __ATEXIT__.unshift({
  func: func,
  arg: arg
 });
}

function ___cxa_atexit(a0, a1) {
 return _atexit(a0, a1);
}

function ___cxa_thread_atexit(routine, arg) {
 PThread.threadExitHandlers.push(function() {
  wasmTable.get(routine)(arg);
 });
}

function spawnThread(threadParams) {
 if (ENVIRONMENT_IS_PTHREAD) throw "Internal Error! spawnThread() can only ever be called from main application thread!";
 var worker = PThread.getNewWorker();
 if (!worker) {
  return 6;
 }
 if (worker.pthread !== undefined) throw "Internal error!";
 if (!threadParams.pthread_ptr) throw "Internal error, no pthread ptr!";
 PThread.runningWorkers.push(worker);
 var stackHigh = threadParams.stackBase + threadParams.stackSize;
 var pthread = PThread.pthreads[threadParams.pthread_ptr] = {
  worker: worker,
  stackBase: threadParams.stackBase,
  stackSize: threadParams.stackSize,
  allocatedOwnStack: threadParams.allocatedOwnStack,
  threadInfoStruct: threadParams.pthread_ptr
 };
 var tis = pthread.threadInfoStruct >> 2;
 Atomics.store(GROWABLE_HEAP_U32(), tis + (60 >> 2), threadParams.detached);
 Atomics.store(GROWABLE_HEAP_U32(), tis + (76 >> 2), threadParams.stackSize);
 Atomics.store(GROWABLE_HEAP_U32(), tis + (72 >> 2), stackHigh);
 Atomics.store(GROWABLE_HEAP_U32(), tis + (100 >> 2), threadParams.stackSize);
 Atomics.store(GROWABLE_HEAP_U32(), tis + (100 + 8 >> 2), stackHigh);
 Atomics.store(GROWABLE_HEAP_U32(), tis + (100 + 12 >> 2), threadParams.detached);
 worker.pthread = pthread;
 var msg = {
  "cmd": "run",
  "start_routine": threadParams.startRoutine,
  "arg": threadParams.arg,
  "threadInfoStruct": threadParams.pthread_ptr,
  "stackBase": threadParams.stackBase,
  "stackSize": threadParams.stackSize
 };
 worker.runPthread = function() {
  msg.time = performance.now();
  worker.postMessage(msg, threadParams.transferList);
 };
 if (worker.loaded) {
  worker.runPthread();
  delete worker.runPthread;
 }
 return 0;
}

function ___pthread_create_js(pthread_ptr, attr, start_routine, arg) {
 if (typeof SharedArrayBuffer === "undefined") {
  err("Current environment does not support SharedArrayBuffer, pthreads are not available!");
  return 6;
 }
 var transferList = [];
 var error = 0;
 if (ENVIRONMENT_IS_PTHREAD && (transferList.length === 0 || error)) {
  return _emscripten_sync_run_in_main_thread_4(687865856, pthread_ptr, attr, start_routine, arg);
 }
 if (error) return error;
 var stackSize = 0;
 var stackBase = 0;
 var detached = 0;
 if (attr && attr != -1) {
  stackSize = GROWABLE_HEAP_I32()[attr >> 2];
  stackSize += 81920;
  stackBase = GROWABLE_HEAP_I32()[attr + 8 >> 2];
  detached = GROWABLE_HEAP_I32()[attr + 12 >> 2] !== 0;
 } else {
  stackSize = 2097152;
 }
 var allocatedOwnStack = stackBase == 0;
 if (allocatedOwnStack) {
  stackBase = _memalign(16, stackSize);
 } else {
  stackBase -= stackSize;
  assert(stackBase > 0);
 }
 var threadParams = {
  stackBase: stackBase,
  stackSize: stackSize,
  allocatedOwnStack: allocatedOwnStack,
  detached: detached,
  startRoutine: start_routine,
  pthread_ptr: pthread_ptr,
  arg: arg,
  transferList: transferList
 };
 if (ENVIRONMENT_IS_PTHREAD) {
  threadParams.cmd = "spawnThread";
  postMessage(threadParams, transferList);
  return 0;
 }
 return spawnThread(threadParams);
}

function ___pthread_detach_js(thread) {
 if (!thread) {
  err("pthread_detach attempted on a null thread pointer!");
  return 71;
 }
 var self = GROWABLE_HEAP_I32()[thread + 8 >> 2];
 if (self !== thread) {
  err("pthread_detach attempted on thread " + thread + ", which does not point to a valid thread, or does not exist anymore!");
  return 71;
 }
 var wasDetached = Atomics.compareExchange(GROWABLE_HEAP_U32(), thread + 60 >> 2, 0, 2);
 return wasDetached ? 28 : 0;
}

function ___pthread_exit_done() {
 postMessage({
  "cmd": "exit"
 });
}

function _exit(status) {
 exit(status);
}

function ___pthread_exit_run_handlers(status) {
 while (PThread.threadExitHandlers.length > 0) {
  PThread.threadExitHandlers.pop()();
 }
}

function _emscripten_futex_wait(addr, val, timeout) {
 if (addr <= 0 || addr > GROWABLE_HEAP_I8().length || addr & 3 != 0) return -28;
 if (!ENVIRONMENT_IS_WEB) {
  var ret = Atomics.wait(GROWABLE_HEAP_I32(), addr >> 2, val, timeout);
  if (ret === "timed-out") return -73;
  if (ret === "not-equal") return -6;
  if (ret === "ok") return 0;
  throw "Atomics.wait returned an unexpected value " + ret;
 } else {
  if (Atomics.load(GROWABLE_HEAP_I32(), addr >> 2) != val) {
   return -6;
  }
  var tNow = performance.now();
  var tEnd = tNow + timeout;
  assert(__emscripten_main_thread_futex > 0);
  var lastAddr = Atomics.exchange(GROWABLE_HEAP_I32(), __emscripten_main_thread_futex >> 2, addr);
  assert(lastAddr == 0);
  while (1) {
   tNow = performance.now();
   if (tNow > tEnd) {
    lastAddr = Atomics.exchange(GROWABLE_HEAP_I32(), __emscripten_main_thread_futex >> 2, 0);
    assert(lastAddr == addr || lastAddr == 0);
    return -73;
   }
   lastAddr = Atomics.exchange(GROWABLE_HEAP_I32(), __emscripten_main_thread_futex >> 2, 0);
   assert(lastAddr == addr || lastAddr == 0);
   if (lastAddr == 0) {
    break;
   }
   _emscripten_main_thread_process_queued_calls();
   if (Atomics.load(GROWABLE_HEAP_I32(), addr >> 2) != val) {
    return -6;
   }
   lastAddr = Atomics.exchange(GROWABLE_HEAP_I32(), __emscripten_main_thread_futex >> 2, addr);
   assert(lastAddr == 0);
  }
  return 0;
 }
}

function _emscripten_check_blocking_allowed() {
 if (ENVIRONMENT_IS_WORKER) return;
 warnOnce("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread");
}

function __emscripten_do_pthread_join(thread, status, block) {
 if (!thread) {
  err("pthread_join attempted on a null thread pointer!");
  return 71;
 }
 if (ENVIRONMENT_IS_PTHREAD && _pthread_self() == thread) {
  err("PThread " + thread + " is attempting to join to itself!");
  return 16;
 } else if (!ENVIRONMENT_IS_PTHREAD && _emscripten_main_browser_thread_id() == thread) {
  err("Main thread " + thread + " is attempting to join to itself!");
  return 16;
 }
 var self = GROWABLE_HEAP_I32()[thread + 8 >> 2];
 if (self !== thread) {
  err("pthread_join attempted on thread " + thread + ", which does not point to a valid thread, or does not exist anymore!");
  return 71;
 }
 var detached = Atomics.load(GROWABLE_HEAP_U32(), thread + 60 >> 2);
 if (detached) {
  err("Attempted to join thread " + thread + ", which was already detached!");
  return 28;
 }
 if (block) {
  _emscripten_check_blocking_allowed();
 }
 for (;;) {
  var threadStatus = Atomics.load(GROWABLE_HEAP_U32(), thread + 0 >> 2);
  if (threadStatus == 1) {
   if (status) {
    var result = Atomics.load(GROWABLE_HEAP_U32(), thread + 88 >> 2);
    GROWABLE_HEAP_I32()[status >> 2] = result;
   }
   Atomics.store(GROWABLE_HEAP_U32(), thread + 60 >> 2, 1);
   if (!ENVIRONMENT_IS_PTHREAD) cleanupThread(thread); else postMessage({
    "cmd": "cleanupThread",
    "thread": thread
   });
   return 0;
  }
  if (!block) {
   return 10;
  }
  _pthread_testcancel();
  if (!ENVIRONMENT_IS_PTHREAD) _emscripten_main_thread_process_queued_calls();
  _emscripten_futex_wait(thread + 0, threadStatus, ENVIRONMENT_IS_PTHREAD ? 100 : 1);
 }
}

function ___pthread_join_js(thread, status) {
 return __emscripten_do_pthread_join(thread, status, true);
}

var PATH = {
 splitPath: function(filename) {
  var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
  return splitPathRe.exec(filename).slice(1);
 },
 normalizeArray: function(parts, allowAboveRoot) {
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
   var last = parts[i];
   if (last === ".") {
    parts.splice(i, 1);
   } else if (last === "..") {
    parts.splice(i, 1);
    up++;
   } else if (up) {
    parts.splice(i, 1);
    up--;
   }
  }
  if (allowAboveRoot) {
   for (;up; up--) {
    parts.unshift("..");
   }
  }
  return parts;
 },
 normalize: function(path) {
  var isAbsolute = path.charAt(0) === "/", trailingSlash = path.substr(-1) === "/";
  path = PATH.normalizeArray(path.split("/").filter(function(p) {
   return !!p;
  }), !isAbsolute).join("/");
  if (!path && !isAbsolute) {
   path = ".";
  }
  if (path && trailingSlash) {
   path += "/";
  }
  return (isAbsolute ? "/" : "") + path;
 },
 dirname: function(path) {
  var result = PATH.splitPath(path), root = result[0], dir = result[1];
  if (!root && !dir) {
   return ".";
  }
  if (dir) {
   dir = dir.substr(0, dir.length - 1);
  }
  return root + dir;
 },
 basename: function(path) {
  if (path === "/") return "/";
  path = PATH.normalize(path);
  path = path.replace(/\/$/, "");
  var lastSlash = path.lastIndexOf("/");
  if (lastSlash === -1) return path;
  return path.substr(lastSlash + 1);
 },
 extname: function(path) {
  return PATH.splitPath(path)[3];
 },
 join: function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return PATH.normalize(paths.join("/"));
 },
 join2: function(l, r) {
  return PATH.normalize(l + "/" + r);
 }
};

function getRandomDevice() {
 if (typeof crypto === "object" && typeof crypto["getRandomValues"] === "function") {
  var randomBuffer = new Uint8Array(1);
  return function() {
   crypto.getRandomValues(randomBuffer);
   return randomBuffer[0];
  };
 } else return function() {
  abort("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
 };
}

var PATH_FS = {
 resolve: function() {
  var resolvedPath = "", resolvedAbsolute = false;
  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
   var path = i >= 0 ? arguments[i] : FS.cwd();
   if (typeof path !== "string") {
    throw new TypeError("Arguments to path.resolve must be strings");
   } else if (!path) {
    return "";
   }
   resolvedPath = path + "/" + resolvedPath;
   resolvedAbsolute = path.charAt(0) === "/";
  }
  resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter(function(p) {
   return !!p;
  }), !resolvedAbsolute).join("/");
  return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
 },
 relative: function(from, to) {
  from = PATH_FS.resolve(from).substr(1);
  to = PATH_FS.resolve(to).substr(1);
  function trim(arr) {
   var start = 0;
   for (;start < arr.length; start++) {
    if (arr[start] !== "") break;
   }
   var end = arr.length - 1;
   for (;end >= 0; end--) {
    if (arr[end] !== "") break;
   }
   if (start > end) return [];
   return arr.slice(start, end - start + 1);
  }
  var fromParts = trim(from.split("/"));
  var toParts = trim(to.split("/"));
  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
   if (fromParts[i] !== toParts[i]) {
    samePartsLength = i;
    break;
   }
  }
  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
   outputParts.push("..");
  }
  outputParts = outputParts.concat(toParts.slice(samePartsLength));
  return outputParts.join("/");
 }
};

var TTY = {
 ttys: [],
 init: function() {},
 shutdown: function() {},
 register: function(dev, ops) {
  TTY.ttys[dev] = {
   input: [],
   output: [],
   ops: ops
  };
  FS.registerDevice(dev, TTY.stream_ops);
 },
 stream_ops: {
  open: function(stream) {
   var tty = TTY.ttys[stream.node.rdev];
   if (!tty) {
    throw new FS.ErrnoError(43);
   }
   stream.tty = tty;
   stream.seekable = false;
  },
  close: function(stream) {
   stream.tty.ops.flush(stream.tty);
  },
  flush: function(stream) {
   stream.tty.ops.flush(stream.tty);
  },
  read: function(stream, buffer, offset, length, pos) {
   if (!stream.tty || !stream.tty.ops.get_char) {
    throw new FS.ErrnoError(60);
   }
   var bytesRead = 0;
   for (var i = 0; i < length; i++) {
    var result;
    try {
     result = stream.tty.ops.get_char(stream.tty);
    } catch (e) {
     throw new FS.ErrnoError(29);
    }
    if (result === undefined && bytesRead === 0) {
     throw new FS.ErrnoError(6);
    }
    if (result === null || result === undefined) break;
    bytesRead++;
    buffer[offset + i] = result;
   }
   if (bytesRead) {
    stream.node.timestamp = Date.now();
   }
   return bytesRead;
  },
  write: function(stream, buffer, offset, length, pos) {
   if (!stream.tty || !stream.tty.ops.put_char) {
    throw new FS.ErrnoError(60);
   }
   try {
    for (var i = 0; i < length; i++) {
     stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
    }
   } catch (e) {
    throw new FS.ErrnoError(29);
   }
   if (length) {
    stream.node.timestamp = Date.now();
   }
   return i;
  }
 },
 default_tty_ops: {
  get_char: function(tty) {
   if (!tty.input.length) {
    var result = null;
    if (typeof window != "undefined" && typeof window.prompt == "function") {
     result = window.prompt("Input: ");
     if (result !== null) {
      result += "\n";
     }
    } else if (typeof readline == "function") {
     result = readline();
     if (result !== null) {
      result += "\n";
     }
    }
    if (!result) {
     return null;
    }
    tty.input = intArrayFromString(result, true);
   }
   return tty.input.shift();
  },
  put_char: function(tty, val) {
   if (val === null || val === 10) {
    out(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   } else {
    if (val != 0) tty.output.push(val);
   }
  },
  flush: function(tty) {
   if (tty.output && tty.output.length > 0) {
    out(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   }
  }
 },
 default_tty1_ops: {
  put_char: function(tty, val) {
   if (val === null || val === 10) {
    err(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   } else {
    if (val != 0) tty.output.push(val);
   }
  },
  flush: function(tty) {
   if (tty.output && tty.output.length > 0) {
    err(UTF8ArrayToString(tty.output, 0));
    tty.output = [];
   }
  }
 }
};

function zeroMemory(address, size) {
 GROWABLE_HEAP_U8().fill(0, address, address + size);
}

function alignMemory(size, alignment) {
 assert(alignment, "alignment argument is required");
 return Math.ceil(size / alignment) * alignment;
}

function mmapAlloc(size) {
 size = alignMemory(size, 65536);
 var ptr = _memalign(65536, size);
 if (!ptr) return 0;
 zeroMemory(ptr, size);
 return ptr;
}

var MEMFS = {
 ops_table: null,
 mount: function(mount) {
  return MEMFS.createNode(null, "/", 16384 | 511, 0);
 },
 createNode: function(parent, name, mode, dev) {
  if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
   throw new FS.ErrnoError(63);
  }
  if (!MEMFS.ops_table) {
   MEMFS.ops_table = {
    dir: {
     node: {
      getattr: MEMFS.node_ops.getattr,
      setattr: MEMFS.node_ops.setattr,
      lookup: MEMFS.node_ops.lookup,
      mknod: MEMFS.node_ops.mknod,
      rename: MEMFS.node_ops.rename,
      unlink: MEMFS.node_ops.unlink,
      rmdir: MEMFS.node_ops.rmdir,
      readdir: MEMFS.node_ops.readdir,
      symlink: MEMFS.node_ops.symlink
     },
     stream: {
      llseek: MEMFS.stream_ops.llseek
     }
    },
    file: {
     node: {
      getattr: MEMFS.node_ops.getattr,
      setattr: MEMFS.node_ops.setattr
     },
     stream: {
      llseek: MEMFS.stream_ops.llseek,
      read: MEMFS.stream_ops.read,
      write: MEMFS.stream_ops.write,
      allocate: MEMFS.stream_ops.allocate,
      mmap: MEMFS.stream_ops.mmap,
      msync: MEMFS.stream_ops.msync
     }
    },
    link: {
     node: {
      getattr: MEMFS.node_ops.getattr,
      setattr: MEMFS.node_ops.setattr,
      readlink: MEMFS.node_ops.readlink
     },
     stream: {}
    },
    chrdev: {
     node: {
      getattr: MEMFS.node_ops.getattr,
      setattr: MEMFS.node_ops.setattr
     },
     stream: FS.chrdev_stream_ops
    }
   };
  }
  var node = FS.createNode(parent, name, mode, dev);
  if (FS.isDir(node.mode)) {
   node.node_ops = MEMFS.ops_table.dir.node;
   node.stream_ops = MEMFS.ops_table.dir.stream;
   node.contents = {};
  } else if (FS.isFile(node.mode)) {
   node.node_ops = MEMFS.ops_table.file.node;
   node.stream_ops = MEMFS.ops_table.file.stream;
   node.usedBytes = 0;
   node.contents = null;
  } else if (FS.isLink(node.mode)) {
   node.node_ops = MEMFS.ops_table.link.node;
   node.stream_ops = MEMFS.ops_table.link.stream;
  } else if (FS.isChrdev(node.mode)) {
   node.node_ops = MEMFS.ops_table.chrdev.node;
   node.stream_ops = MEMFS.ops_table.chrdev.stream;
  }
  node.timestamp = Date.now();
  if (parent) {
   parent.contents[name] = node;
   parent.timestamp = node.timestamp;
  }
  return node;
 },
 getFileDataAsTypedArray: function(node) {
  if (!node.contents) return new Uint8Array(0);
  if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
  return new Uint8Array(node.contents);
 },
 expandFileStorage: function(node, newCapacity) {
  var prevCapacity = node.contents ? node.contents.length : 0;
  if (prevCapacity >= newCapacity) return;
  var CAPACITY_DOUBLING_MAX = 1024 * 1024;
  newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) >>> 0);
  if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
  var oldContents = node.contents;
  node.contents = new Uint8Array(newCapacity);
  if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
 },
 resizeFileStorage: function(node, newSize) {
  if (node.usedBytes == newSize) return;
  if (newSize == 0) {
   node.contents = null;
   node.usedBytes = 0;
  } else {
   var oldContents = node.contents;
   node.contents = new Uint8Array(newSize);
   if (oldContents) {
    node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
   }
   node.usedBytes = newSize;
  }
 },
 node_ops: {
  getattr: function(node) {
   var attr = {};
   attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
   attr.ino = node.id;
   attr.mode = node.mode;
   attr.nlink = 1;
   attr.uid = 0;
   attr.gid = 0;
   attr.rdev = node.rdev;
   if (FS.isDir(node.mode)) {
    attr.size = 4096;
   } else if (FS.isFile(node.mode)) {
    attr.size = node.usedBytes;
   } else if (FS.isLink(node.mode)) {
    attr.size = node.link.length;
   } else {
    attr.size = 0;
   }
   attr.atime = new Date(node.timestamp);
   attr.mtime = new Date(node.timestamp);
   attr.ctime = new Date(node.timestamp);
   attr.blksize = 4096;
   attr.blocks = Math.ceil(attr.size / attr.blksize);
   return attr;
  },
  setattr: function(node, attr) {
   if (attr.mode !== undefined) {
    node.mode = attr.mode;
   }
   if (attr.timestamp !== undefined) {
    node.timestamp = attr.timestamp;
   }
   if (attr.size !== undefined) {
    MEMFS.resizeFileStorage(node, attr.size);
   }
  },
  lookup: function(parent, name) {
   throw FS.genericErrors[44];
  },
  mknod: function(parent, name, mode, dev) {
   return MEMFS.createNode(parent, name, mode, dev);
  },
  rename: function(old_node, new_dir, new_name) {
   if (FS.isDir(old_node.mode)) {
    var new_node;
    try {
     new_node = FS.lookupNode(new_dir, new_name);
    } catch (e) {}
    if (new_node) {
     for (var i in new_node.contents) {
      throw new FS.ErrnoError(55);
     }
    }
   }
   delete old_node.parent.contents[old_node.name];
   old_node.parent.timestamp = Date.now();
   old_node.name = new_name;
   new_dir.contents[new_name] = old_node;
   new_dir.timestamp = old_node.parent.timestamp;
   old_node.parent = new_dir;
  },
  unlink: function(parent, name) {
   delete parent.contents[name];
   parent.timestamp = Date.now();
  },
  rmdir: function(parent, name) {
   var node = FS.lookupNode(parent, name);
   for (var i in node.contents) {
    throw new FS.ErrnoError(55);
   }
   delete parent.contents[name];
   parent.timestamp = Date.now();
  },
  readdir: function(node) {
   var entries = [ ".", ".." ];
   for (var key in node.contents) {
    if (!node.contents.hasOwnProperty(key)) {
     continue;
    }
    entries.push(key);
   }
   return entries;
  },
  symlink: function(parent, newname, oldpath) {
   var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
   node.link = oldpath;
   return node;
  },
  readlink: function(node) {
   if (!FS.isLink(node.mode)) {
    throw new FS.ErrnoError(28);
   }
   return node.link;
  }
 },
 stream_ops: {
  read: function(stream, buffer, offset, length, position) {
   var contents = stream.node.contents;
   if (position >= stream.node.usedBytes) return 0;
   var size = Math.min(stream.node.usedBytes - position, length);
   assert(size >= 0);
   if (size > 8 && contents.subarray) {
    buffer.set(contents.subarray(position, position + size), offset);
   } else {
    for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
   }
   return size;
  },
  write: function(stream, buffer, offset, length, position, canOwn) {
   assert(!(buffer instanceof ArrayBuffer));
   if (buffer.buffer === GROWABLE_HEAP_I8().buffer) {
    canOwn = false;
   }
   if (!length) return 0;
   var node = stream.node;
   node.timestamp = Date.now();
   if (buffer.subarray && (!node.contents || node.contents.subarray)) {
    if (canOwn) {
     assert(position === 0, "canOwn must imply no weird position inside the file");
     node.contents = buffer.subarray(offset, offset + length);
     node.usedBytes = length;
     return length;
    } else if (node.usedBytes === 0 && position === 0) {
     node.contents = buffer.slice(offset, offset + length);
     node.usedBytes = length;
     return length;
    } else if (position + length <= node.usedBytes) {
     node.contents.set(buffer.subarray(offset, offset + length), position);
     return length;
    }
   }
   MEMFS.expandFileStorage(node, position + length);
   if (node.contents.subarray && buffer.subarray) {
    node.contents.set(buffer.subarray(offset, offset + length), position);
   } else {
    for (var i = 0; i < length; i++) {
     node.contents[position + i] = buffer[offset + i];
    }
   }
   node.usedBytes = Math.max(node.usedBytes, position + length);
   return length;
  },
  llseek: function(stream, offset, whence) {
   var position = offset;
   if (whence === 1) {
    position += stream.position;
   } else if (whence === 2) {
    if (FS.isFile(stream.node.mode)) {
     position += stream.node.usedBytes;
    }
   }
   if (position < 0) {
    throw new FS.ErrnoError(28);
   }
   return position;
  },
  allocate: function(stream, offset, length) {
   MEMFS.expandFileStorage(stream.node, offset + length);
   stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
  },
  mmap: function(stream, address, length, position, prot, flags) {
   if (address !== 0) {
    throw new FS.ErrnoError(28);
   }
   if (!FS.isFile(stream.node.mode)) {
    throw new FS.ErrnoError(43);
   }
   var ptr;
   var allocated;
   var contents = stream.node.contents;
   if (!(flags & 2) && contents.buffer === buffer) {
    allocated = false;
    ptr = contents.byteOffset;
   } else {
    if (position > 0 || position + length < contents.length) {
     if (contents.subarray) {
      contents = contents.subarray(position, position + length);
     } else {
      contents = Array.prototype.slice.call(contents, position, position + length);
     }
    }
    allocated = true;
    ptr = mmapAlloc(length);
    if (!ptr) {
     throw new FS.ErrnoError(48);
    }
    GROWABLE_HEAP_I8().set(contents, ptr);
   }
   return {
    ptr: ptr,
    allocated: allocated
   };
  },
  msync: function(stream, buffer, offset, length, mmapFlags) {
   if (!FS.isFile(stream.node.mode)) {
    throw new FS.ErrnoError(43);
   }
   if (mmapFlags & 2) {
    return 0;
   }
   var bytesWritten = MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
   return 0;
  }
 }
};

function asyncLoad(url, onload, onerror, noRunDep) {
 var dep = !noRunDep ? getUniqueRunDependency("al " + url) : "";
 readAsync(url, function(arrayBuffer) {
  assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
  onload(new Uint8Array(arrayBuffer));
  if (dep) removeRunDependency(dep);
 }, function(event) {
  if (onerror) {
   onerror();
  } else {
   throw 'Loading data file "' + url + '" failed.';
  }
 });
 if (dep) addRunDependency(dep);
}

var IDBFS = {
 dbs: {},
 indexedDB: function() {
  if (typeof indexedDB !== "undefined") return indexedDB;
  var ret = null;
  if (typeof window === "object") ret = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  assert(ret, "IDBFS used, but indexedDB not supported");
  return ret;
 },
 DB_VERSION: 21,
 DB_STORE_NAME: "FILE_DATA",
 mount: function(mount) {
  return MEMFS.mount.apply(null, arguments);
 },
 syncfs: function(mount, populate, callback) {
  IDBFS.getLocalSet(mount, function(err, local) {
   if (err) return callback(err);
   IDBFS.getRemoteSet(mount, function(err, remote) {
    if (err) return callback(err);
    var src = populate ? remote : local;
    var dst = populate ? local : remote;
    IDBFS.reconcile(src, dst, callback);
   });
  });
 },
 getDB: function(name, callback) {
  var db = IDBFS.dbs[name];
  if (db) {
   return callback(null, db);
  }
  var req;
  try {
   req = IDBFS.indexedDB().open(name, IDBFS.DB_VERSION);
  } catch (e) {
   return callback(e);
  }
  if (!req) {
   return callback("Unable to connect to IndexedDB");
  }
  req.onupgradeneeded = function(e) {
   var db = e.target.result;
   var transaction = e.target.transaction;
   var fileStore;
   if (db.objectStoreNames.contains(IDBFS.DB_STORE_NAME)) {
    fileStore = transaction.objectStore(IDBFS.DB_STORE_NAME);
   } else {
    fileStore = db.createObjectStore(IDBFS.DB_STORE_NAME);
   }
   if (!fileStore.indexNames.contains("timestamp")) {
    fileStore.createIndex("timestamp", "timestamp", {
     unique: false
    });
   }
  };
  req.onsuccess = function() {
   db = req.result;
   IDBFS.dbs[name] = db;
   callback(null, db);
  };
  req.onerror = function(e) {
   callback(this.error);
   e.preventDefault();
  };
 },
 getLocalSet: function(mount, callback) {
  var entries = {};
  function isRealDir(p) {
   return p !== "." && p !== "..";
  }
  function toAbsolute(root) {
   return function(p) {
    return PATH.join2(root, p);
   };
  }
  var check = FS.readdir(mount.mountpoint).filter(isRealDir).map(toAbsolute(mount.mountpoint));
  while (check.length) {
   var path = check.pop();
   var stat;
   try {
    stat = FS.stat(path);
   } catch (e) {
    return callback(e);
   }
   if (FS.isDir(stat.mode)) {
    check.push.apply(check, FS.readdir(path).filter(isRealDir).map(toAbsolute(path)));
   }
   entries[path] = {
    "timestamp": stat.mtime
   };
  }
  return callback(null, {
   type: "local",
   entries: entries
  });
 },
 getRemoteSet: function(mount, callback) {
  var entries = {};
  IDBFS.getDB(mount.mountpoint, function(err, db) {
   if (err) return callback(err);
   try {
    var transaction = db.transaction([ IDBFS.DB_STORE_NAME ], "readonly");
    transaction.onerror = function(e) {
     callback(this.error);
     e.preventDefault();
    };
    var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
    var index = store.index("timestamp");
    index.openKeyCursor().onsuccess = function(event) {
     var cursor = event.target.result;
     if (!cursor) {
      return callback(null, {
       type: "remote",
       db: db,
       entries: entries
      });
     }
     entries[cursor.primaryKey] = {
      "timestamp": cursor.key
     };
     cursor.continue();
    };
   } catch (e) {
    return callback(e);
   }
  });
 },
 loadLocalEntry: function(path, callback) {
  var stat, node;
  try {
   var lookup = FS.lookupPath(path);
   node = lookup.node;
   stat = FS.stat(path);
  } catch (e) {
   return callback(e);
  }
  if (FS.isDir(stat.mode)) {
   return callback(null, {
    "timestamp": stat.mtime,
    "mode": stat.mode
   });
  } else if (FS.isFile(stat.mode)) {
   node.contents = MEMFS.getFileDataAsTypedArray(node);
   return callback(null, {
    "timestamp": stat.mtime,
    "mode": stat.mode,
    "contents": node.contents
   });
  } else {
   return callback(new Error("node type not supported"));
  }
 },
 storeLocalEntry: function(path, entry, callback) {
  try {
   if (FS.isDir(entry["mode"])) {
    FS.mkdirTree(path, entry["mode"]);
   } else if (FS.isFile(entry["mode"])) {
    FS.writeFile(path, entry["contents"], {
     canOwn: true
    });
   } else {
    return callback(new Error("node type not supported"));
   }
   FS.chmod(path, entry["mode"]);
   FS.utime(path, entry["timestamp"], entry["timestamp"]);
  } catch (e) {
   return callback(e);
  }
  callback(null);
 },
 removeLocalEntry: function(path, callback) {
  try {
   var lookup = FS.lookupPath(path);
   var stat = FS.stat(path);
   if (FS.isDir(stat.mode)) {
    FS.rmdir(path);
   } else if (FS.isFile(stat.mode)) {
    FS.unlink(path);
   }
  } catch (e) {
   return callback(e);
  }
  callback(null);
 },
 loadRemoteEntry: function(store, path, callback) {
  var req = store.get(path);
  req.onsuccess = function(event) {
   callback(null, event.target.result);
  };
  req.onerror = function(e) {
   callback(this.error);
   e.preventDefault();
  };
 },
 storeRemoteEntry: function(store, path, entry, callback) {
  try {
   var req = store.put(entry, path);
  } catch (e) {
   callback(e);
   return;
  }
  req.onsuccess = function() {
   callback(null);
  };
  req.onerror = function(e) {
   callback(this.error);
   e.preventDefault();
  };
 },
 removeRemoteEntry: function(store, path, callback) {
  var req = store.delete(path);
  req.onsuccess = function() {
   callback(null);
  };
  req.onerror = function(e) {
   callback(this.error);
   e.preventDefault();
  };
 },
 reconcile: function(src, dst, callback) {
  var total = 0;
  var create = [];
  Object.keys(src.entries).forEach(function(key) {
   var e = src.entries[key];
   var e2 = dst.entries[key];
   if (!e2 || e["timestamp"].getTime() != e2["timestamp"].getTime()) {
    create.push(key);
    total++;
   }
  });
  var remove = [];
  Object.keys(dst.entries).forEach(function(key) {
   if (!src.entries[key]) {
    remove.push(key);
    total++;
   }
  });
  if (!total) {
   return callback(null);
  }
  var errored = false;
  var db = src.type === "remote" ? src.db : dst.db;
  var transaction = db.transaction([ IDBFS.DB_STORE_NAME ], "readwrite");
  var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
  function done(err) {
   if (err && !errored) {
    errored = true;
    return callback(err);
   }
  }
  transaction.onerror = function(e) {
   done(this.error);
   e.preventDefault();
  };
  transaction.oncomplete = function(e) {
   if (!errored) {
    callback(null);
   }
  };
  create.sort().forEach(function(path) {
   if (dst.type === "local") {
    IDBFS.loadRemoteEntry(store, path, function(err, entry) {
     if (err) return done(err);
     IDBFS.storeLocalEntry(path, entry, done);
    });
   } else {
    IDBFS.loadLocalEntry(path, function(err, entry) {
     if (err) return done(err);
     IDBFS.storeRemoteEntry(store, path, entry, done);
    });
   }
  });
  remove.sort().reverse().forEach(function(path) {
   if (dst.type === "local") {
    IDBFS.removeLocalEntry(path, done);
   } else {
    IDBFS.removeRemoteEntry(store, path, done);
   }
  });
 }
};

var ERRNO_MESSAGES = {
 0: "Success",
 1: "Arg list too long",
 2: "Permission denied",
 3: "Address already in use",
 4: "Address not available",
 5: "Address family not supported by protocol family",
 6: "No more processes",
 7: "Socket already connected",
 8: "Bad file number",
 9: "Trying to read unreadable message",
 10: "Mount device busy",
 11: "Operation canceled",
 12: "No children",
 13: "Connection aborted",
 14: "Connection refused",
 15: "Connection reset by peer",
 16: "File locking deadlock error",
 17: "Destination address required",
 18: "Math arg out of domain of func",
 19: "Quota exceeded",
 20: "File exists",
 21: "Bad address",
 22: "File too large",
 23: "Host is unreachable",
 24: "Identifier removed",
 25: "Illegal byte sequence",
 26: "Connection already in progress",
 27: "Interrupted system call",
 28: "Invalid argument",
 29: "I/O error",
 30: "Socket is already connected",
 31: "Is a directory",
 32: "Too many symbolic links",
 33: "Too many open files",
 34: "Too many links",
 35: "Message too long",
 36: "Multihop attempted",
 37: "File or path name too long",
 38: "Network interface is not configured",
 39: "Connection reset by network",
 40: "Network is unreachable",
 41: "Too many open files in system",
 42: "No buffer space available",
 43: "No such device",
 44: "No such file or directory",
 45: "Exec format error",
 46: "No record locks available",
 47: "The link has been severed",
 48: "Not enough core",
 49: "No message of desired type",
 50: "Protocol not available",
 51: "No space left on device",
 52: "Function not implemented",
 53: "Socket is not connected",
 54: "Not a directory",
 55: "Directory not empty",
 56: "State not recoverable",
 57: "Socket operation on non-socket",
 59: "Not a typewriter",
 60: "No such device or address",
 61: "Value too large for defined data type",
 62: "Previous owner died",
 63: "Not super-user",
 64: "Broken pipe",
 65: "Protocol error",
 66: "Unknown protocol",
 67: "Protocol wrong type for socket",
 68: "Math result not representable",
 69: "Read only file system",
 70: "Illegal seek",
 71: "No such process",
 72: "Stale file handle",
 73: "Connection timed out",
 74: "Text file busy",
 75: "Cross-device link",
 100: "Device not a stream",
 101: "Bad font file fmt",
 102: "Invalid slot",
 103: "Invalid request code",
 104: "No anode",
 105: "Block device required",
 106: "Channel number out of range",
 107: "Level 3 halted",
 108: "Level 3 reset",
 109: "Link number out of range",
 110: "Protocol driver not attached",
 111: "No CSI structure available",
 112: "Level 2 halted",
 113: "Invalid exchange",
 114: "Invalid request descriptor",
 115: "Exchange full",
 116: "No data (for no delay io)",
 117: "Timer expired",
 118: "Out of streams resources",
 119: "Machine is not on the network",
 120: "Package not installed",
 121: "The object is remote",
 122: "Advertise error",
 123: "Srmount error",
 124: "Communication error on send",
 125: "Cross mount point (not really error)",
 126: "Given log. name not unique",
 127: "f.d. invalid for this operation",
 128: "Remote address changed",
 129: "Can   access a needed shared lib",
 130: "Accessing a corrupted shared lib",
 131: ".lib section in a.out corrupted",
 132: "Attempting to link in too many libs",
 133: "Attempting to exec a shared library",
 135: "Streams pipe error",
 136: "Too many users",
 137: "Socket type not supported",
 138: "Not supported",
 139: "Protocol family not supported",
 140: "Can't send after socket shutdown",
 141: "Too many references",
 142: "Host is down",
 148: "No medium (in tape drive)",
 156: "Level 2 not synchronized"
};

var ERRNO_CODES = {};

var FS = {
 root: null,
 mounts: [],
 devices: {},
 streams: [],
 nextInode: 1,
 nameTable: null,
 currentPath: "/",
 initialized: false,
 ignorePermissions: true,
 trackingDelegate: {},
 tracking: {
  openFlags: {
   READ: 1,
   WRITE: 2
  }
 },
 ErrnoError: null,
 genericErrors: {},
 filesystems: null,
 syncFSRequests: 0,
 lookupPath: function(path, opts) {
  path = PATH_FS.resolve(FS.cwd(), path);
  opts = opts || {};
  if (!path) return {
   path: "",
   node: null
  };
  var defaults = {
   follow_mount: true,
   recurse_count: 0
  };
  for (var key in defaults) {
   if (opts[key] === undefined) {
    opts[key] = defaults[key];
   }
  }
  if (opts.recurse_count > 8) {
   throw new FS.ErrnoError(32);
  }
  var parts = PATH.normalizeArray(path.split("/").filter(function(p) {
   return !!p;
  }), false);
  var current = FS.root;
  var current_path = "/";
  for (var i = 0; i < parts.length; i++) {
   var islast = i === parts.length - 1;
   if (islast && opts.parent) {
    break;
   }
   current = FS.lookupNode(current, parts[i]);
   current_path = PATH.join2(current_path, parts[i]);
   if (FS.isMountpoint(current)) {
    if (!islast || islast && opts.follow_mount) {
     current = current.mounted.root;
    }
   }
   if (!islast || opts.follow) {
    var count = 0;
    while (FS.isLink(current.mode)) {
     var link = FS.readlink(current_path);
     current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
     var lookup = FS.lookupPath(current_path, {
      recurse_count: opts.recurse_count
     });
     current = lookup.node;
     if (count++ > 40) {
      throw new FS.ErrnoError(32);
     }
    }
   }
  }
  return {
   path: current_path,
   node: current
  };
 },
 getPath: function(node) {
  var path;
  while (true) {
   if (FS.isRoot(node)) {
    var mount = node.mount.mountpoint;
    if (!path) return mount;
    return mount[mount.length - 1] !== "/" ? mount + "/" + path : mount + path;
   }
   path = path ? node.name + "/" + path : node.name;
   node = node.parent;
  }
 },
 hashName: function(parentid, name) {
  var hash = 0;
  for (var i = 0; i < name.length; i++) {
   hash = (hash << 5) - hash + name.charCodeAt(i) | 0;
  }
  return (parentid + hash >>> 0) % FS.nameTable.length;
 },
 hashAddNode: function(node) {
  var hash = FS.hashName(node.parent.id, node.name);
  node.name_next = FS.nameTable[hash];
  FS.nameTable[hash] = node;
 },
 hashRemoveNode: function(node) {
  var hash = FS.hashName(node.parent.id, node.name);
  if (FS.nameTable[hash] === node) {
   FS.nameTable[hash] = node.name_next;
  } else {
   var current = FS.nameTable[hash];
   while (current) {
    if (current.name_next === node) {
     current.name_next = node.name_next;
     break;
    }
    current = current.name_next;
   }
  }
 },
 lookupNode: function(parent, name) {
  var errCode = FS.mayLookup(parent);
  if (errCode) {
   throw new FS.ErrnoError(errCode, parent);
  }
  var hash = FS.hashName(parent.id, name);
  for (var node = FS.nameTable[hash]; node; node = node.name_next) {
   var nodeName = node.name;
   if (node.parent.id === parent.id && nodeName === name) {
    return node;
   }
  }
  return FS.lookup(parent, name);
 },
 createNode: function(parent, name, mode, rdev) {
  assert(typeof parent === "object");
  var node = new FS.FSNode(parent, name, mode, rdev);
  FS.hashAddNode(node);
  return node;
 },
 destroyNode: function(node) {
  FS.hashRemoveNode(node);
 },
 isRoot: function(node) {
  return node === node.parent;
 },
 isMountpoint: function(node) {
  return !!node.mounted;
 },
 isFile: function(mode) {
  return (mode & 61440) === 32768;
 },
 isDir: function(mode) {
  return (mode & 61440) === 16384;
 },
 isLink: function(mode) {
  return (mode & 61440) === 40960;
 },
 isChrdev: function(mode) {
  return (mode & 61440) === 8192;
 },
 isBlkdev: function(mode) {
  return (mode & 61440) === 24576;
 },
 isFIFO: function(mode) {
  return (mode & 61440) === 4096;
 },
 isSocket: function(mode) {
  return (mode & 49152) === 49152;
 },
 flagModes: {
  "r": 0,
  "r+": 2,
  "w": 577,
  "w+": 578,
  "a": 1089,
  "a+": 1090
 },
 modeStringToFlags: function(str) {
  var flags = FS.flagModes[str];
  if (typeof flags === "undefined") {
   throw new Error("Unknown file open mode: " + str);
  }
  return flags;
 },
 flagsToPermissionString: function(flag) {
  var perms = [ "r", "w", "rw" ][flag & 3];
  if (flag & 512) {
   perms += "w";
  }
  return perms;
 },
 nodePermissions: function(node, perms) {
  if (FS.ignorePermissions) {
   return 0;
  }
  if (perms.includes("r") && !(node.mode & 292)) {
   return 2;
  } else if (perms.includes("w") && !(node.mode & 146)) {
   return 2;
  } else if (perms.includes("x") && !(node.mode & 73)) {
   return 2;
  }
  return 0;
 },
 mayLookup: function(dir) {
  var errCode = FS.nodePermissions(dir, "x");
  if (errCode) return errCode;
  if (!dir.node_ops.lookup) return 2;
  return 0;
 },
 mayCreate: function(dir, name) {
  try {
   var node = FS.lookupNode(dir, name);
   return 20;
  } catch (e) {}
  return FS.nodePermissions(dir, "wx");
 },
 mayDelete: function(dir, name, isdir) {
  var node;
  try {
   node = FS.lookupNode(dir, name);
  } catch (e) {
   return e.errno;
  }
  var errCode = FS.nodePermissions(dir, "wx");
  if (errCode) {
   return errCode;
  }
  if (isdir) {
   if (!FS.isDir(node.mode)) {
    return 54;
   }
   if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
    return 10;
   }
  } else {
   if (FS.isDir(node.mode)) {
    return 31;
   }
  }
  return 0;
 },
 mayOpen: function(node, flags) {
  if (!node) {
   return 44;
  }
  if (FS.isLink(node.mode)) {
   return 32;
  } else if (FS.isDir(node.mode)) {
   if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
    return 31;
   }
  }
  return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
 },
 MAX_OPEN_FDS: 4096,
 nextfd: function(fd_start, fd_end) {
  fd_start = fd_start || 0;
  fd_end = fd_end || FS.MAX_OPEN_FDS;
  for (var fd = fd_start; fd <= fd_end; fd++) {
   if (!FS.streams[fd]) {
    return fd;
   }
  }
  throw new FS.ErrnoError(33);
 },
 getStream: function(fd) {
  return FS.streams[fd];
 },
 createStream: function(stream, fd_start, fd_end) {
  if (!FS.FSStream) {
   FS.FSStream = function() {};
   FS.FSStream.prototype = {
    object: {
     get: function() {
      return this.node;
     },
     set: function(val) {
      this.node = val;
     }
    },
    isRead: {
     get: function() {
      return (this.flags & 2097155) !== 1;
     }
    },
    isWrite: {
     get: function() {
      return (this.flags & 2097155) !== 0;
     }
    },
    isAppend: {
     get: function() {
      return this.flags & 1024;
     }
    }
   };
  }
  var newStream = new FS.FSStream();
  for (var p in stream) {
   newStream[p] = stream[p];
  }
  stream = newStream;
  var fd = FS.nextfd(fd_start, fd_end);
  stream.fd = fd;
  FS.streams[fd] = stream;
  return stream;
 },
 closeStream: function(fd) {
  FS.streams[fd] = null;
 },
 chrdev_stream_ops: {
  open: function(stream) {
   var device = FS.getDevice(stream.node.rdev);
   stream.stream_ops = device.stream_ops;
   if (stream.stream_ops.open) {
    stream.stream_ops.open(stream);
   }
  },
  llseek: function() {
   throw new FS.ErrnoError(70);
  }
 },
 major: function(dev) {
  return dev >> 8;
 },
 minor: function(dev) {
  return dev & 255;
 },
 makedev: function(ma, mi) {
  return ma << 8 | mi;
 },
 registerDevice: function(dev, ops) {
  FS.devices[dev] = {
   stream_ops: ops
  };
 },
 getDevice: function(dev) {
  return FS.devices[dev];
 },
 getMounts: function(mount) {
  var mounts = [];
  var check = [ mount ];
  while (check.length) {
   var m = check.pop();
   mounts.push(m);
   check.push.apply(check, m.mounts);
  }
  return mounts;
 },
 syncfs: function(populate, callback) {
  if (typeof populate === "function") {
   callback = populate;
   populate = false;
  }
  FS.syncFSRequests++;
  if (FS.syncFSRequests > 1) {
   err("warning: " + FS.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
  }
  var mounts = FS.getMounts(FS.root.mount);
  var completed = 0;
  function doCallback(errCode) {
   assert(FS.syncFSRequests > 0);
   FS.syncFSRequests--;
   return callback(errCode);
  }
  function done(errCode) {
   if (errCode) {
    if (!done.errored) {
     done.errored = true;
     return doCallback(errCode);
    }
    return;
   }
   if (++completed >= mounts.length) {
    doCallback(null);
   }
  }
  mounts.forEach(function(mount) {
   if (!mount.type.syncfs) {
    return done(null);
   }
   mount.type.syncfs(mount, populate, done);
  });
 },
 mount: function(type, opts, mountpoint) {
  if (typeof type === "string") {
   throw type;
  }
  var root = mountpoint === "/";
  var pseudo = !mountpoint;
  var node;
  if (root && FS.root) {
   throw new FS.ErrnoError(10);
  } else if (!root && !pseudo) {
   var lookup = FS.lookupPath(mountpoint, {
    follow_mount: false
   });
   mountpoint = lookup.path;
   node = lookup.node;
   if (FS.isMountpoint(node)) {
    throw new FS.ErrnoError(10);
   }
   if (!FS.isDir(node.mode)) {
    throw new FS.ErrnoError(54);
   }
  }
  var mount = {
   type: type,
   opts: opts,
   mountpoint: mountpoint,
   mounts: []
  };
  var mountRoot = type.mount(mount);
  mountRoot.mount = mount;
  mount.root = mountRoot;
  if (root) {
   FS.root = mountRoot;
  } else if (node) {
   node.mounted = mount;
   if (node.mount) {
    node.mount.mounts.push(mount);
   }
  }
  return mountRoot;
 },
 unmount: function(mountpoint) {
  var lookup = FS.lookupPath(mountpoint, {
   follow_mount: false
  });
  if (!FS.isMountpoint(lookup.node)) {
   throw new FS.ErrnoError(28);
  }
  var node = lookup.node;
  var mount = node.mounted;
  var mounts = FS.getMounts(mount);
  Object.keys(FS.nameTable).forEach(function(hash) {
   var current = FS.nameTable[hash];
   while (current) {
    var next = current.name_next;
    if (mounts.includes(current.mount)) {
     FS.destroyNode(current);
    }
    current = next;
   }
  });
  node.mounted = null;
  var idx = node.mount.mounts.indexOf(mount);
  assert(idx !== -1);
  node.mount.mounts.splice(idx, 1);
 },
 lookup: function(parent, name) {
  return parent.node_ops.lookup(parent, name);
 },
 mknod: function(path, mode, dev) {
  var lookup = FS.lookupPath(path, {
   parent: true
  });
  var parent = lookup.node;
  var name = PATH.basename(path);
  if (!name || name === "." || name === "..") {
   throw new FS.ErrnoError(28);
  }
  var errCode = FS.mayCreate(parent, name);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.mknod) {
   throw new FS.ErrnoError(63);
  }
  return parent.node_ops.mknod(parent, name, mode, dev);
 },
 create: function(path, mode) {
  mode = mode !== undefined ? mode : 438;
  mode &= 4095;
  mode |= 32768;
  return FS.mknod(path, mode, 0);
 },
 mkdir: function(path, mode) {
  mode = mode !== undefined ? mode : 511;
  mode &= 511 | 512;
  mode |= 16384;
  return FS.mknod(path, mode, 0);
 },
 mkdirTree: function(path, mode) {
  var dirs = path.split("/");
  var d = "";
  for (var i = 0; i < dirs.length; ++i) {
   if (!dirs[i]) continue;
   d += "/" + dirs[i];
   try {
    FS.mkdir(d, mode);
   } catch (e) {
    if (e.errno != 20) throw e;
   }
  }
 },
 mkdev: function(path, mode, dev) {
  if (typeof dev === "undefined") {
   dev = mode;
   mode = 438;
  }
  mode |= 8192;
  return FS.mknod(path, mode, dev);
 },
 symlink: function(oldpath, newpath) {
  if (!PATH_FS.resolve(oldpath)) {
   throw new FS.ErrnoError(44);
  }
  var lookup = FS.lookupPath(newpath, {
   parent: true
  });
  var parent = lookup.node;
  if (!parent) {
   throw new FS.ErrnoError(44);
  }
  var newname = PATH.basename(newpath);
  var errCode = FS.mayCreate(parent, newname);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.symlink) {
   throw new FS.ErrnoError(63);
  }
  return parent.node_ops.symlink(parent, newname, oldpath);
 },
 rename: function(old_path, new_path) {
  var old_dirname = PATH.dirname(old_path);
  var new_dirname = PATH.dirname(new_path);
  var old_name = PATH.basename(old_path);
  var new_name = PATH.basename(new_path);
  var lookup, old_dir, new_dir;
  lookup = FS.lookupPath(old_path, {
   parent: true
  });
  old_dir = lookup.node;
  lookup = FS.lookupPath(new_path, {
   parent: true
  });
  new_dir = lookup.node;
  if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
  if (old_dir.mount !== new_dir.mount) {
   throw new FS.ErrnoError(75);
  }
  var old_node = FS.lookupNode(old_dir, old_name);
  var relative = PATH_FS.relative(old_path, new_dirname);
  if (relative.charAt(0) !== ".") {
   throw new FS.ErrnoError(28);
  }
  relative = PATH_FS.relative(new_path, old_dirname);
  if (relative.charAt(0) !== ".") {
   throw new FS.ErrnoError(55);
  }
  var new_node;
  try {
   new_node = FS.lookupNode(new_dir, new_name);
  } catch (e) {}
  if (old_node === new_node) {
   return;
  }
  var isdir = FS.isDir(old_node.mode);
  var errCode = FS.mayDelete(old_dir, old_name, isdir);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!old_dir.node_ops.rename) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
   throw new FS.ErrnoError(10);
  }
  if (new_dir !== old_dir) {
   errCode = FS.nodePermissions(old_dir, "w");
   if (errCode) {
    throw new FS.ErrnoError(errCode);
   }
  }
  try {
   if (FS.trackingDelegate["willMovePath"]) {
    FS.trackingDelegate["willMovePath"](old_path, new_path);
   }
  } catch (e) {
   err("FS.trackingDelegate['willMovePath']('" + old_path + "', '" + new_path + "') threw an exception: " + e.message);
  }
  FS.hashRemoveNode(old_node);
  try {
   old_dir.node_ops.rename(old_node, new_dir, new_name);
  } catch (e) {
   throw e;
  } finally {
   FS.hashAddNode(old_node);
  }
  try {
   if (FS.trackingDelegate["onMovePath"]) FS.trackingDelegate["onMovePath"](old_path, new_path);
  } catch (e) {
   err("FS.trackingDelegate['onMovePath']('" + old_path + "', '" + new_path + "') threw an exception: " + e.message);
  }
 },
 rmdir: function(path) {
  var lookup = FS.lookupPath(path, {
   parent: true
  });
  var parent = lookup.node;
  var name = PATH.basename(path);
  var node = FS.lookupNode(parent, name);
  var errCode = FS.mayDelete(parent, name, true);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.rmdir) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isMountpoint(node)) {
   throw new FS.ErrnoError(10);
  }
  try {
   if (FS.trackingDelegate["willDeletePath"]) {
    FS.trackingDelegate["willDeletePath"](path);
   }
  } catch (e) {
   err("FS.trackingDelegate['willDeletePath']('" + path + "') threw an exception: " + e.message);
  }
  parent.node_ops.rmdir(parent, name);
  FS.destroyNode(node);
  try {
   if (FS.trackingDelegate["onDeletePath"]) FS.trackingDelegate["onDeletePath"](path);
  } catch (e) {
   err("FS.trackingDelegate['onDeletePath']('" + path + "') threw an exception: " + e.message);
  }
 },
 readdir: function(path) {
  var lookup = FS.lookupPath(path, {
   follow: true
  });
  var node = lookup.node;
  if (!node.node_ops.readdir) {
   throw new FS.ErrnoError(54);
  }
  return node.node_ops.readdir(node);
 },
 unlink: function(path) {
  var lookup = FS.lookupPath(path, {
   parent: true
  });
  var parent = lookup.node;
  var name = PATH.basename(path);
  var node = FS.lookupNode(parent, name);
  var errCode = FS.mayDelete(parent, name, false);
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  if (!parent.node_ops.unlink) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isMountpoint(node)) {
   throw new FS.ErrnoError(10);
  }
  try {
   if (FS.trackingDelegate["willDeletePath"]) {
    FS.trackingDelegate["willDeletePath"](path);
   }
  } catch (e) {
   err("FS.trackingDelegate['willDeletePath']('" + path + "') threw an exception: " + e.message);
  }
  parent.node_ops.unlink(parent, name);
  FS.destroyNode(node);
  try {
   if (FS.trackingDelegate["onDeletePath"]) FS.trackingDelegate["onDeletePath"](path);
  } catch (e) {
   err("FS.trackingDelegate['onDeletePath']('" + path + "') threw an exception: " + e.message);
  }
 },
 readlink: function(path) {
  var lookup = FS.lookupPath(path);
  var link = lookup.node;
  if (!link) {
   throw new FS.ErrnoError(44);
  }
  if (!link.node_ops.readlink) {
   throw new FS.ErrnoError(28);
  }
  return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
 },
 stat: function(path, dontFollow) {
  var lookup = FS.lookupPath(path, {
   follow: !dontFollow
  });
  var node = lookup.node;
  if (!node) {
   throw new FS.ErrnoError(44);
  }
  if (!node.node_ops.getattr) {
   throw new FS.ErrnoError(63);
  }
  return node.node_ops.getattr(node);
 },
 lstat: function(path) {
  return FS.stat(path, true);
 },
 chmod: function(path, mode, dontFollow) {
  var node;
  if (typeof path === "string") {
   var lookup = FS.lookupPath(path, {
    follow: !dontFollow
   });
   node = lookup.node;
  } else {
   node = path;
  }
  if (!node.node_ops.setattr) {
   throw new FS.ErrnoError(63);
  }
  node.node_ops.setattr(node, {
   mode: mode & 4095 | node.mode & ~4095,
   timestamp: Date.now()
  });
 },
 lchmod: function(path, mode) {
  FS.chmod(path, mode, true);
 },
 fchmod: function(fd, mode) {
  var stream = FS.getStream(fd);
  if (!stream) {
   throw new FS.ErrnoError(8);
  }
  FS.chmod(stream.node, mode);
 },
 chown: function(path, uid, gid, dontFollow) {
  var node;
  if (typeof path === "string") {
   var lookup = FS.lookupPath(path, {
    follow: !dontFollow
   });
   node = lookup.node;
  } else {
   node = path;
  }
  if (!node.node_ops.setattr) {
   throw new FS.ErrnoError(63);
  }
  node.node_ops.setattr(node, {
   timestamp: Date.now()
  });
 },
 lchown: function(path, uid, gid) {
  FS.chown(path, uid, gid, true);
 },
 fchown: function(fd, uid, gid) {
  var stream = FS.getStream(fd);
  if (!stream) {
   throw new FS.ErrnoError(8);
  }
  FS.chown(stream.node, uid, gid);
 },
 truncate: function(path, len) {
  if (len < 0) {
   throw new FS.ErrnoError(28);
  }
  var node;
  if (typeof path === "string") {
   var lookup = FS.lookupPath(path, {
    follow: true
   });
   node = lookup.node;
  } else {
   node = path;
  }
  if (!node.node_ops.setattr) {
   throw new FS.ErrnoError(63);
  }
  if (FS.isDir(node.mode)) {
   throw new FS.ErrnoError(31);
  }
  if (!FS.isFile(node.mode)) {
   throw new FS.ErrnoError(28);
  }
  var errCode = FS.nodePermissions(node, "w");
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  node.node_ops.setattr(node, {
   size: len,
   timestamp: Date.now()
  });
 },
 ftruncate: function(fd, len) {
  var stream = FS.getStream(fd);
  if (!stream) {
   throw new FS.ErrnoError(8);
  }
  if ((stream.flags & 2097155) === 0) {
   throw new FS.ErrnoError(28);
  }
  FS.truncate(stream.node, len);
 },
 utime: function(path, atime, mtime) {
  var lookup = FS.lookupPath(path, {
   follow: true
  });
  var node = lookup.node;
  node.node_ops.setattr(node, {
   timestamp: Math.max(atime, mtime)
  });
 },
 open: function(path, flags, mode, fd_start, fd_end) {
  if (path === "") {
   throw new FS.ErrnoError(44);
  }
  flags = typeof flags === "string" ? FS.modeStringToFlags(flags) : flags;
  mode = typeof mode === "undefined" ? 438 : mode;
  if (flags & 64) {
   mode = mode & 4095 | 32768;
  } else {
   mode = 0;
  }
  var node;
  if (typeof path === "object") {
   node = path;
  } else {
   path = PATH.normalize(path);
   try {
    var lookup = FS.lookupPath(path, {
     follow: !(flags & 131072)
    });
    node = lookup.node;
   } catch (e) {}
  }
  var created = false;
  if (flags & 64) {
   if (node) {
    if (flags & 128) {
     throw new FS.ErrnoError(20);
    }
   } else {
    node = FS.mknod(path, mode, 0);
    created = true;
   }
  }
  if (!node) {
   throw new FS.ErrnoError(44);
  }
  if (FS.isChrdev(node.mode)) {
   flags &= ~512;
  }
  if (flags & 65536 && !FS.isDir(node.mode)) {
   throw new FS.ErrnoError(54);
  }
  if (!created) {
   var errCode = FS.mayOpen(node, flags);
   if (errCode) {
    throw new FS.ErrnoError(errCode);
   }
  }
  if (flags & 512) {
   FS.truncate(node, 0);
  }
  flags &= ~(128 | 512 | 131072);
  var stream = FS.createStream({
   node: node,
   path: FS.getPath(node),
   flags: flags,
   seekable: true,
   position: 0,
   stream_ops: node.stream_ops,
   ungotten: [],
   error: false
  }, fd_start, fd_end);
  if (stream.stream_ops.open) {
   stream.stream_ops.open(stream);
  }
  if (Module["logReadFiles"] && !(flags & 1)) {
   if (!FS.readFiles) FS.readFiles = {};
   if (!(path in FS.readFiles)) {
    FS.readFiles[path] = 1;
    err("FS.trackingDelegate error on read file: " + path);
   }
  }
  try {
   if (FS.trackingDelegate["onOpenFile"]) {
    var trackingFlags = 0;
    if ((flags & 2097155) !== 1) {
     trackingFlags |= FS.tracking.openFlags.READ;
    }
    if ((flags & 2097155) !== 0) {
     trackingFlags |= FS.tracking.openFlags.WRITE;
    }
    FS.trackingDelegate["onOpenFile"](path, trackingFlags);
   }
  } catch (e) {
   err("FS.trackingDelegate['onOpenFile']('" + path + "', flags) threw an exception: " + e.message);
  }
  return stream;
 },
 close: function(stream) {
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if (stream.getdents) stream.getdents = null;
  try {
   if (stream.stream_ops.close) {
    stream.stream_ops.close(stream);
   }
  } catch (e) {
   throw e;
  } finally {
   FS.closeStream(stream.fd);
  }
  stream.fd = null;
 },
 isClosed: function(stream) {
  return stream.fd === null;
 },
 llseek: function(stream, offset, whence) {
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if (!stream.seekable || !stream.stream_ops.llseek) {
   throw new FS.ErrnoError(70);
  }
  if (whence != 0 && whence != 1 && whence != 2) {
   throw new FS.ErrnoError(28);
  }
  stream.position = stream.stream_ops.llseek(stream, offset, whence);
  stream.ungotten = [];
  return stream.position;
 },
 read: function(stream, buffer, offset, length, position) {
  if (length < 0 || position < 0) {
   throw new FS.ErrnoError(28);
  }
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if ((stream.flags & 2097155) === 1) {
   throw new FS.ErrnoError(8);
  }
  if (FS.isDir(stream.node.mode)) {
   throw new FS.ErrnoError(31);
  }
  if (!stream.stream_ops.read) {
   throw new FS.ErrnoError(28);
  }
  var seeking = typeof position !== "undefined";
  if (!seeking) {
   position = stream.position;
  } else if (!stream.seekable) {
   throw new FS.ErrnoError(70);
  }
  var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
  if (!seeking) stream.position += bytesRead;
  return bytesRead;
 },
 write: function(stream, buffer, offset, length, position, canOwn) {
  if (length < 0 || position < 0) {
   throw new FS.ErrnoError(28);
  }
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if ((stream.flags & 2097155) === 0) {
   throw new FS.ErrnoError(8);
  }
  if (FS.isDir(stream.node.mode)) {
   throw new FS.ErrnoError(31);
  }
  if (!stream.stream_ops.write) {
   throw new FS.ErrnoError(28);
  }
  if (stream.seekable && stream.flags & 1024) {
   FS.llseek(stream, 0, 2);
  }
  var seeking = typeof position !== "undefined";
  if (!seeking) {
   position = stream.position;
  } else if (!stream.seekable) {
   throw new FS.ErrnoError(70);
  }
  var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
  if (!seeking) stream.position += bytesWritten;
  try {
   if (stream.path && FS.trackingDelegate["onWriteToFile"]) FS.trackingDelegate["onWriteToFile"](stream.path);
  } catch (e) {
   err("FS.trackingDelegate['onWriteToFile']('" + stream.path + "') threw an exception: " + e.message);
  }
  return bytesWritten;
 },
 allocate: function(stream, offset, length) {
  if (FS.isClosed(stream)) {
   throw new FS.ErrnoError(8);
  }
  if (offset < 0 || length <= 0) {
   throw new FS.ErrnoError(28);
  }
  if ((stream.flags & 2097155) === 0) {
   throw new FS.ErrnoError(8);
  }
  if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
   throw new FS.ErrnoError(43);
  }
  if (!stream.stream_ops.allocate) {
   throw new FS.ErrnoError(138);
  }
  stream.stream_ops.allocate(stream, offset, length);
 },
 mmap: function(stream, address, length, position, prot, flags) {
  if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
   throw new FS.ErrnoError(2);
  }
  if ((stream.flags & 2097155) === 1) {
   throw new FS.ErrnoError(2);
  }
  if (!stream.stream_ops.mmap) {
   throw new FS.ErrnoError(43);
  }
  return stream.stream_ops.mmap(stream, address, length, position, prot, flags);
 },
 msync: function(stream, buffer, offset, length, mmapFlags) {
  if (!stream || !stream.stream_ops.msync) {
   return 0;
  }
  return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
 },
 munmap: function(stream) {
  return 0;
 },
 ioctl: function(stream, cmd, arg) {
  if (!stream.stream_ops.ioctl) {
   throw new FS.ErrnoError(59);
  }
  return stream.stream_ops.ioctl(stream, cmd, arg);
 },
 readFile: function(path, opts) {
  opts = opts || {};
  opts.flags = opts.flags || 0;
  opts.encoding = opts.encoding || "binary";
  if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
   throw new Error('Invalid encoding type "' + opts.encoding + '"');
  }
  var ret;
  var stream = FS.open(path, opts.flags);
  var stat = FS.stat(path);
  var length = stat.size;
  var buf = new Uint8Array(length);
  FS.read(stream, buf, 0, length, 0);
  if (opts.encoding === "utf8") {
   ret = UTF8ArrayToString(buf, 0);
  } else if (opts.encoding === "binary") {
   ret = buf;
  }
  FS.close(stream);
  return ret;
 },
 writeFile: function(path, data, opts) {
  opts = opts || {};
  opts.flags = opts.flags || 577;
  var stream = FS.open(path, opts.flags, opts.mode);
  if (typeof data === "string") {
   var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
   var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
   FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
  } else if (ArrayBuffer.isView(data)) {
   FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
  } else {
   throw new Error("Unsupported data type");
  }
  FS.close(stream);
 },
 cwd: function() {
  return FS.currentPath;
 },
 chdir: function(path) {
  var lookup = FS.lookupPath(path, {
   follow: true
  });
  if (lookup.node === null) {
   throw new FS.ErrnoError(44);
  }
  if (!FS.isDir(lookup.node.mode)) {
   throw new FS.ErrnoError(54);
  }
  var errCode = FS.nodePermissions(lookup.node, "x");
  if (errCode) {
   throw new FS.ErrnoError(errCode);
  }
  FS.currentPath = lookup.path;
 },
 createDefaultDirectories: function() {
  FS.mkdir("/tmp");
  FS.mkdir("/home");
  FS.mkdir("/home/web_user");
 },
 createDefaultDevices: function() {
  FS.mkdir("/dev");
  FS.registerDevice(FS.makedev(1, 3), {
   read: function() {
    return 0;
   },
   write: function(stream, buffer, offset, length, pos) {
    return length;
   }
  });
  FS.mkdev("/dev/null", FS.makedev(1, 3));
  TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
  TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
  FS.mkdev("/dev/tty", FS.makedev(5, 0));
  FS.mkdev("/dev/tty1", FS.makedev(6, 0));
  var random_device = getRandomDevice();
  FS.createDevice("/dev", "random", random_device);
  FS.createDevice("/dev", "urandom", random_device);
  FS.mkdir("/dev/shm");
  FS.mkdir("/dev/shm/tmp");
 },
 createSpecialDirectories: function() {
  FS.mkdir("/proc");
  var proc_self = FS.mkdir("/proc/self");
  FS.mkdir("/proc/self/fd");
  FS.mount({
   mount: function() {
    var node = FS.createNode(proc_self, "fd", 16384 | 511, 73);
    node.node_ops = {
     lookup: function(parent, name) {
      var fd = +name;
      var stream = FS.getStream(fd);
      if (!stream) throw new FS.ErrnoError(8);
      var ret = {
       parent: null,
       mount: {
        mountpoint: "fake"
       },
       node_ops: {
        readlink: function() {
         return stream.path;
        }
       }
      };
      ret.parent = ret;
      return ret;
     }
    };
    return node;
   }
  }, {}, "/proc/self/fd");
 },
 createStandardStreams: function() {
  if (Module["stdin"]) {
   FS.createDevice("/dev", "stdin", Module["stdin"]);
  } else {
   FS.symlink("/dev/tty", "/dev/stdin");
  }
  if (Module["stdout"]) {
   FS.createDevice("/dev", "stdout", null, Module["stdout"]);
  } else {
   FS.symlink("/dev/tty", "/dev/stdout");
  }
  if (Module["stderr"]) {
   FS.createDevice("/dev", "stderr", null, Module["stderr"]);
  } else {
   FS.symlink("/dev/tty1", "/dev/stderr");
  }
  var stdin = FS.open("/dev/stdin", 0);
  var stdout = FS.open("/dev/stdout", 1);
  var stderr = FS.open("/dev/stderr", 1);
  assert(stdin.fd === 0, "invalid handle for stdin (" + stdin.fd + ")");
  assert(stdout.fd === 1, "invalid handle for stdout (" + stdout.fd + ")");
  assert(stderr.fd === 2, "invalid handle for stderr (" + stderr.fd + ")");
 },
 ensureErrnoError: function() {
  if (FS.ErrnoError) return;
  FS.ErrnoError = function ErrnoError(errno, node) {
   this.node = node;
   this.setErrno = function(errno) {
    this.errno = errno;
    for (var key in ERRNO_CODES) {
     if (ERRNO_CODES[key] === errno) {
      this.code = key;
      break;
     }
    }
   };
   this.setErrno(errno);
   this.message = ERRNO_MESSAGES[errno];
   if (this.stack) {
    Object.defineProperty(this, "stack", {
     value: new Error().stack,
     writable: true
    });
    this.stack = demangleAll(this.stack);
   }
  };
  FS.ErrnoError.prototype = new Error();
  FS.ErrnoError.prototype.constructor = FS.ErrnoError;
  [ 44 ].forEach(function(code) {
   FS.genericErrors[code] = new FS.ErrnoError(code);
   FS.genericErrors[code].stack = "<generic error, no stack>";
  });
 },
 staticInit: function() {
  FS.ensureErrnoError();
  FS.nameTable = new Array(4096);
  FS.mount(MEMFS, {}, "/");
  FS.createDefaultDirectories();
  FS.createDefaultDevices();
  FS.createSpecialDirectories();
  FS.filesystems = {
   "MEMFS": MEMFS,
   "IDBFS": IDBFS
  };
 },
 init: function(input, output, error) {
  assert(!FS.init.initialized, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
  FS.init.initialized = true;
  FS.ensureErrnoError();
  Module["stdin"] = input || Module["stdin"];
  Module["stdout"] = output || Module["stdout"];
  Module["stderr"] = error || Module["stderr"];
  FS.createStandardStreams();
 },
 quit: function() {
  FS.init.initialized = false;
  var fflush = Module["_fflush"];
  if (fflush) fflush(0);
  for (var i = 0; i < FS.streams.length; i++) {
   var stream = FS.streams[i];
   if (!stream) {
    continue;
   }
   FS.close(stream);
  }
 },
 getMode: function(canRead, canWrite) {
  var mode = 0;
  if (canRead) mode |= 292 | 73;
  if (canWrite) mode |= 146;
  return mode;
 },
 findObject: function(path, dontResolveLastLink) {
  var ret = FS.analyzePath(path, dontResolveLastLink);
  if (ret.exists) {
   return ret.object;
  } else {
   return null;
  }
 },
 analyzePath: function(path, dontResolveLastLink) {
  try {
   var lookup = FS.lookupPath(path, {
    follow: !dontResolveLastLink
   });
   path = lookup.path;
  } catch (e) {}
  var ret = {
   isRoot: false,
   exists: false,
   error: 0,
   name: null,
   path: null,
   object: null,
   parentExists: false,
   parentPath: null,
   parentObject: null
  };
  try {
   var lookup = FS.lookupPath(path, {
    parent: true
   });
   ret.parentExists = true;
   ret.parentPath = lookup.path;
   ret.parentObject = lookup.node;
   ret.name = PATH.basename(path);
   lookup = FS.lookupPath(path, {
    follow: !dontResolveLastLink
   });
   ret.exists = true;
   ret.path = lookup.path;
   ret.object = lookup.node;
   ret.name = lookup.node.name;
   ret.isRoot = lookup.path === "/";
  } catch (e) {
   ret.error = e.errno;
  }
  return ret;
 },
 createPath: function(parent, path, canRead, canWrite) {
  parent = typeof parent === "string" ? parent : FS.getPath(parent);
  var parts = path.split("/").reverse();
  while (parts.length) {
   var part = parts.pop();
   if (!part) continue;
   var current = PATH.join2(parent, part);
   try {
    FS.mkdir(current);
   } catch (e) {}
   parent = current;
  }
  return current;
 },
 createFile: function(parent, name, properties, canRead, canWrite) {
  var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
  var mode = FS.getMode(canRead, canWrite);
  return FS.create(path, mode);
 },
 createDataFile: function(parent, name, data, canRead, canWrite, canOwn) {
  var path = name ? PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name) : parent;
  var mode = FS.getMode(canRead, canWrite);
  var node = FS.create(path, mode);
  if (data) {
   if (typeof data === "string") {
    var arr = new Array(data.length);
    for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
    data = arr;
   }
   FS.chmod(node, mode | 146);
   var stream = FS.open(node, 577);
   FS.write(stream, data, 0, data.length, 0, canOwn);
   FS.close(stream);
   FS.chmod(node, mode);
  }
  return node;
 },
 createDevice: function(parent, name, input, output) {
  var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
  var mode = FS.getMode(!!input, !!output);
  if (!FS.createDevice.major) FS.createDevice.major = 64;
  var dev = FS.makedev(FS.createDevice.major++, 0);
  FS.registerDevice(dev, {
   open: function(stream) {
    stream.seekable = false;
   },
   close: function(stream) {
    if (output && output.buffer && output.buffer.length) {
     output(10);
    }
   },
   read: function(stream, buffer, offset, length, pos) {
    var bytesRead = 0;
    for (var i = 0; i < length; i++) {
     var result;
     try {
      result = input();
     } catch (e) {
      throw new FS.ErrnoError(29);
     }
     if (result === undefined && bytesRead === 0) {
      throw new FS.ErrnoError(6);
     }
     if (result === null || result === undefined) break;
     bytesRead++;
     buffer[offset + i] = result;
    }
    if (bytesRead) {
     stream.node.timestamp = Date.now();
    }
    return bytesRead;
   },
   write: function(stream, buffer, offset, length, pos) {
    for (var i = 0; i < length; i++) {
     try {
      output(buffer[offset + i]);
     } catch (e) {
      throw new FS.ErrnoError(29);
     }
    }
    if (length) {
     stream.node.timestamp = Date.now();
    }
    return i;
   }
  });
  return FS.mkdev(path, mode, dev);
 },
 forceLoadFile: function(obj) {
  if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
  if (typeof XMLHttpRequest !== "undefined") {
   throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
  } else if (read_) {
   try {
    obj.contents = intArrayFromString(read_(obj.url), true);
    obj.usedBytes = obj.contents.length;
   } catch (e) {
    throw new FS.ErrnoError(29);
   }
  } else {
   throw new Error("Cannot load without read() or XMLHttpRequest.");
  }
 },
 createLazyFile: function(parent, name, url, canRead, canWrite) {
  function LazyUint8Array() {
   this.lengthKnown = false;
   this.chunks = [];
  }
  LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
   if (idx > this.length - 1 || idx < 0) {
    return undefined;
   }
   var chunkOffset = idx % this.chunkSize;
   var chunkNum = idx / this.chunkSize | 0;
   return this.getter(chunkNum)[chunkOffset];
  };
  LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
   this.getter = getter;
  };
  LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
   var xhr = new XMLHttpRequest();
   xhr.open("HEAD", url, false);
   xhr.send(null);
   if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
   var datalength = Number(xhr.getResponseHeader("Content-length"));
   var header;
   var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
   var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
   var chunkSize = 1024 * 1024;
   if (!hasByteServing) chunkSize = datalength;
   var doXHR = function(from, to) {
    if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
    if (to > datalength - 1) throw new Error("only " + datalength + " bytes available! programmer error!");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
    if (typeof Uint8Array != "undefined") xhr.responseType = "arraybuffer";
    if (xhr.overrideMimeType) {
     xhr.overrideMimeType("text/plain; charset=x-user-defined");
    }
    xhr.send(null);
    if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
    if (xhr.response !== undefined) {
     return new Uint8Array(xhr.response || []);
    } else {
     return intArrayFromString(xhr.responseText || "", true);
    }
   };
   var lazyArray = this;
   lazyArray.setDataGetter(function(chunkNum) {
    var start = chunkNum * chunkSize;
    var end = (chunkNum + 1) * chunkSize - 1;
    end = Math.min(end, datalength - 1);
    if (typeof lazyArray.chunks[chunkNum] === "undefined") {
     lazyArray.chunks[chunkNum] = doXHR(start, end);
    }
    if (typeof lazyArray.chunks[chunkNum] === "undefined") throw new Error("doXHR failed!");
    return lazyArray.chunks[chunkNum];
   });
   if (usesGzip || !datalength) {
    chunkSize = datalength = 1;
    datalength = this.getter(0).length;
    chunkSize = datalength;
    out("LazyFiles on gzip forces download of the whole file when length is accessed");
   }
   this._length = datalength;
   this._chunkSize = chunkSize;
   this.lengthKnown = true;
  };
  if (typeof XMLHttpRequest !== "undefined") {
   if (!ENVIRONMENT_IS_WORKER) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
   var lazyArray = new LazyUint8Array();
   Object.defineProperties(lazyArray, {
    length: {
     get: function() {
      if (!this.lengthKnown) {
       this.cacheLength();
      }
      return this._length;
     }
    },
    chunkSize: {
     get: function() {
      if (!this.lengthKnown) {
       this.cacheLength();
      }
      return this._chunkSize;
     }
    }
   });
   var properties = {
    isDevice: false,
    contents: lazyArray
   };
  } else {
   var properties = {
    isDevice: false,
    url: url
   };
  }
  var node = FS.createFile(parent, name, properties, canRead, canWrite);
  if (properties.contents) {
   node.contents = properties.contents;
  } else if (properties.url) {
   node.contents = null;
   node.url = properties.url;
  }
  Object.defineProperties(node, {
   usedBytes: {
    get: function() {
     return this.contents.length;
    }
   }
  });
  var stream_ops = {};
  var keys = Object.keys(node.stream_ops);
  keys.forEach(function(key) {
   var fn = node.stream_ops[key];
   stream_ops[key] = function forceLoadLazyFile() {
    FS.forceLoadFile(node);
    return fn.apply(null, arguments);
   };
  });
  stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
   FS.forceLoadFile(node);
   var contents = stream.node.contents;
   if (position >= contents.length) return 0;
   var size = Math.min(contents.length - position, length);
   assert(size >= 0);
   if (contents.slice) {
    for (var i = 0; i < size; i++) {
     buffer[offset + i] = contents[position + i];
    }
   } else {
    for (var i = 0; i < size; i++) {
     buffer[offset + i] = contents.get(position + i);
    }
   }
   return size;
  };
  node.stream_ops = stream_ops;
  return node;
 },
 createPreloadedFile: function(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
  Browser.init();
  var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
  var dep = getUniqueRunDependency("cp " + fullname);
  function processData(byteArray) {
   function finish(byteArray) {
    if (preFinish) preFinish();
    if (!dontCreateFile) {
     FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
    }
    if (onload) onload();
    removeRunDependency(dep);
   }
   var handled = false;
   Module["preloadPlugins"].forEach(function(plugin) {
    if (handled) return;
    if (plugin["canHandle"](fullname)) {
     plugin["handle"](byteArray, fullname, finish, function() {
      if (onerror) onerror();
      removeRunDependency(dep);
     });
     handled = true;
    }
   });
   if (!handled) finish(byteArray);
  }
  addRunDependency(dep);
  if (typeof url == "string") {
   asyncLoad(url, function(byteArray) {
    processData(byteArray);
   }, onerror);
  } else {
   processData(url);
  }
 },
 indexedDB: function() {
  return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
 },
 DB_NAME: function() {
  return "EM_FS_" + window.location.pathname;
 },
 DB_VERSION: 20,
 DB_STORE_NAME: "FILE_DATA",
 saveFilesToDB: function(paths, onload, onerror) {
  onload = onload || function() {};
  onerror = onerror || function() {};
  var indexedDB = FS.indexedDB();
  try {
   var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
  } catch (e) {
   return onerror(e);
  }
  openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
   out("creating db");
   var db = openRequest.result;
   db.createObjectStore(FS.DB_STORE_NAME);
  };
  openRequest.onsuccess = function openRequest_onsuccess() {
   var db = openRequest.result;
   var transaction = db.transaction([ FS.DB_STORE_NAME ], "readwrite");
   var files = transaction.objectStore(FS.DB_STORE_NAME);
   var ok = 0, fail = 0, total = paths.length;
   function finish() {
    if (fail == 0) onload(); else onerror();
   }
   paths.forEach(function(path) {
    var putRequest = files.put(FS.analyzePath(path).object.contents, path);
    putRequest.onsuccess = function putRequest_onsuccess() {
     ok++;
     if (ok + fail == total) finish();
    };
    putRequest.onerror = function putRequest_onerror() {
     fail++;
     if (ok + fail == total) finish();
    };
   });
   transaction.onerror = onerror;
  };
  openRequest.onerror = onerror;
 },
 loadFilesFromDB: function(paths, onload, onerror) {
  onload = onload || function() {};
  onerror = onerror || function() {};
  var indexedDB = FS.indexedDB();
  try {
   var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
  } catch (e) {
   return onerror(e);
  }
  openRequest.onupgradeneeded = onerror;
  openRequest.onsuccess = function openRequest_onsuccess() {
   var db = openRequest.result;
   try {
    var transaction = db.transaction([ FS.DB_STORE_NAME ], "readonly");
   } catch (e) {
    onerror(e);
    return;
   }
   var files = transaction.objectStore(FS.DB_STORE_NAME);
   var ok = 0, fail = 0, total = paths.length;
   function finish() {
    if (fail == 0) onload(); else onerror();
   }
   paths.forEach(function(path) {
    var getRequest = files.get(path);
    getRequest.onsuccess = function getRequest_onsuccess() {
     if (FS.analyzePath(path).exists) {
      FS.unlink(path);
     }
     FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
     ok++;
     if (ok + fail == total) finish();
    };
    getRequest.onerror = function getRequest_onerror() {
     fail++;
     if (ok + fail == total) finish();
    };
   });
   transaction.onerror = onerror;
  };
  openRequest.onerror = onerror;
 },
 absolutePath: function() {
  abort("FS.absolutePath has been removed; use PATH_FS.resolve instead");
 },
 createFolder: function() {
  abort("FS.createFolder has been removed; use FS.mkdir instead");
 },
 createLink: function() {
  abort("FS.createLink has been removed; use FS.symlink instead");
 },
 joinPath: function() {
  abort("FS.joinPath has been removed; use PATH.join instead");
 },
 mmapAlloc: function() {
  abort("FS.mmapAlloc has been replaced by the top level function mmapAlloc");
 },
 standardizePath: function() {
  abort("FS.standardizePath has been removed; use PATH.normalize instead");
 }
};

var SYSCALLS = {
 mappings: {},
 DEFAULT_POLLMASK: 5,
 umask: 511,
 calculateAt: function(dirfd, path, allowEmpty) {
  if (path[0] === "/") {
   return path;
  }
  var dir;
  if (dirfd === -100) {
   dir = FS.cwd();
  } else {
   var dirstream = FS.getStream(dirfd);
   if (!dirstream) throw new FS.ErrnoError(8);
   dir = dirstream.path;
  }
  if (path.length == 0) {
   if (!allowEmpty) {
    throw new FS.ErrnoError(44);
   }
   return dir;
  }
  return PATH.join2(dir, path);
 },
 doStat: function(func, path, buf) {
  try {
   var stat = func(path);
  } catch (e) {
   if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
    return -54;
   }
   throw e;
  }
  GROWABLE_HEAP_I32()[buf >> 2] = stat.dev;
  GROWABLE_HEAP_I32()[buf + 4 >> 2] = 0;
  GROWABLE_HEAP_I32()[buf + 8 >> 2] = stat.ino;
  GROWABLE_HEAP_I32()[buf + 12 >> 2] = stat.mode;
  GROWABLE_HEAP_I32()[buf + 16 >> 2] = stat.nlink;
  GROWABLE_HEAP_I32()[buf + 20 >> 2] = stat.uid;
  GROWABLE_HEAP_I32()[buf + 24 >> 2] = stat.gid;
  GROWABLE_HEAP_I32()[buf + 28 >> 2] = stat.rdev;
  GROWABLE_HEAP_I32()[buf + 32 >> 2] = 0;
  tempI64 = [ stat.size >>> 0, (tempDouble = stat.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
  GROWABLE_HEAP_I32()[buf + 40 >> 2] = tempI64[0], GROWABLE_HEAP_I32()[buf + 44 >> 2] = tempI64[1];
  GROWABLE_HEAP_I32()[buf + 48 >> 2] = 4096;
  GROWABLE_HEAP_I32()[buf + 52 >> 2] = stat.blocks;
  GROWABLE_HEAP_I32()[buf + 56 >> 2] = stat.atime.getTime() / 1e3 | 0;
  GROWABLE_HEAP_I32()[buf + 60 >> 2] = 0;
  GROWABLE_HEAP_I32()[buf + 64 >> 2] = stat.mtime.getTime() / 1e3 | 0;
  GROWABLE_HEAP_I32()[buf + 68 >> 2] = 0;
  GROWABLE_HEAP_I32()[buf + 72 >> 2] = stat.ctime.getTime() / 1e3 | 0;
  GROWABLE_HEAP_I32()[buf + 76 >> 2] = 0;
  tempI64 = [ stat.ino >>> 0, (tempDouble = stat.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
  GROWABLE_HEAP_I32()[buf + 80 >> 2] = tempI64[0], GROWABLE_HEAP_I32()[buf + 84 >> 2] = tempI64[1];
  return 0;
 },
 doMsync: function(addr, stream, len, flags, offset) {
  var buffer = GROWABLE_HEAP_U8().slice(addr, addr + len);
  FS.msync(stream, buffer, offset, len, flags);
 },
 doMkdir: function(path, mode) {
  path = PATH.normalize(path);
  if (path[path.length - 1] === "/") path = path.substr(0, path.length - 1);
  FS.mkdir(path, mode, 0);
  return 0;
 },
 doMknod: function(path, mode, dev) {
  switch (mode & 61440) {
  case 32768:
  case 8192:
  case 24576:
  case 4096:
  case 49152:
   break;

  default:
   return -28;
  }
  FS.mknod(path, mode, dev);
  return 0;
 },
 doReadlink: function(path, buf, bufsize) {
  if (bufsize <= 0) return -28;
  var ret = FS.readlink(path);
  var len = Math.min(bufsize, lengthBytesUTF8(ret));
  var endChar = GROWABLE_HEAP_I8()[buf + len];
  stringToUTF8(ret, buf, bufsize + 1);
  GROWABLE_HEAP_I8()[buf + len] = endChar;
  return len;
 },
 doAccess: function(path, amode) {
  if (amode & ~7) {
   return -28;
  }
  var node;
  var lookup = FS.lookupPath(path, {
   follow: true
  });
  node = lookup.node;
  if (!node) {
   return -44;
  }
  var perms = "";
  if (amode & 4) perms += "r";
  if (amode & 2) perms += "w";
  if (amode & 1) perms += "x";
  if (perms && FS.nodePermissions(node, perms)) {
   return -2;
  }
  return 0;
 },
 doDup: function(path, flags, suggestFD) {
  var suggest = FS.getStream(suggestFD);
  if (suggest) FS.close(suggest);
  return FS.open(path, flags, 0, suggestFD, suggestFD).fd;
 },
 doReadv: function(stream, iov, iovcnt, offset) {
  var ret = 0;
  for (var i = 0; i < iovcnt; i++) {
   var ptr = GROWABLE_HEAP_I32()[iov + i * 8 >> 2];
   var len = GROWABLE_HEAP_I32()[iov + (i * 8 + 4) >> 2];
   var curr = FS.read(stream, GROWABLE_HEAP_I8(), ptr, len, offset);
   if (curr < 0) return -1;
   ret += curr;
   if (curr < len) break;
  }
  return ret;
 },
 doWritev: function(stream, iov, iovcnt, offset) {
  var ret = 0;
  for (var i = 0; i < iovcnt; i++) {
   var ptr = GROWABLE_HEAP_I32()[iov + i * 8 >> 2];
   var len = GROWABLE_HEAP_I32()[iov + (i * 8 + 4) >> 2];
   var curr = FS.write(stream, GROWABLE_HEAP_I8(), ptr, len, offset);
   if (curr < 0) return -1;
   ret += curr;
  }
  return ret;
 },
 varargs: undefined,
 get: function() {
  assert(SYSCALLS.varargs != undefined);
  SYSCALLS.varargs += 4;
  var ret = GROWABLE_HEAP_I32()[SYSCALLS.varargs - 4 >> 2];
  return ret;
 },
 getStr: function(ptr) {
  var ret = UTF8ToString(ptr);
  return ret;
 },
 getStreamFromFD: function(fd) {
  var stream = FS.getStream(fd);
  if (!stream) throw new FS.ErrnoError(8);
  return stream;
 },
 get64: function(low, high) {
  if (low >= 0) assert(high === 0); else assert(high === -1);
  return low;
 }
};

function ___sys__newselect(nfds, readfds, writefds, exceptfds, timeout) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(2, 1, nfds, readfds, writefds, exceptfds, timeout);
 try {
  assert(nfds <= 64, "nfds must be less than or equal to 64");
  assert(!exceptfds, "exceptfds not supported");
  var total = 0;
  var srcReadLow = readfds ? GROWABLE_HEAP_I32()[readfds >> 2] : 0, srcReadHigh = readfds ? GROWABLE_HEAP_I32()[readfds + 4 >> 2] : 0;
  var srcWriteLow = writefds ? GROWABLE_HEAP_I32()[writefds >> 2] : 0, srcWriteHigh = writefds ? GROWABLE_HEAP_I32()[writefds + 4 >> 2] : 0;
  var srcExceptLow = exceptfds ? GROWABLE_HEAP_I32()[exceptfds >> 2] : 0, srcExceptHigh = exceptfds ? GROWABLE_HEAP_I32()[exceptfds + 4 >> 2] : 0;
  var dstReadLow = 0, dstReadHigh = 0;
  var dstWriteLow = 0, dstWriteHigh = 0;
  var dstExceptLow = 0, dstExceptHigh = 0;
  var allLow = (readfds ? GROWABLE_HEAP_I32()[readfds >> 2] : 0) | (writefds ? GROWABLE_HEAP_I32()[writefds >> 2] : 0) | (exceptfds ? GROWABLE_HEAP_I32()[exceptfds >> 2] : 0);
  var allHigh = (readfds ? GROWABLE_HEAP_I32()[readfds + 4 >> 2] : 0) | (writefds ? GROWABLE_HEAP_I32()[writefds + 4 >> 2] : 0) | (exceptfds ? GROWABLE_HEAP_I32()[exceptfds + 4 >> 2] : 0);
  var check = function(fd, low, high, val) {
   return fd < 32 ? low & val : high & val;
  };
  for (var fd = 0; fd < nfds; fd++) {
   var mask = 1 << fd % 32;
   if (!check(fd, allLow, allHigh, mask)) {
    continue;
   }
   var stream = FS.getStream(fd);
   if (!stream) throw new FS.ErrnoError(8);
   var flags = SYSCALLS.DEFAULT_POLLMASK;
   if (stream.stream_ops.poll) {
    flags = stream.stream_ops.poll(stream);
   }
   if (flags & 1 && check(fd, srcReadLow, srcReadHigh, mask)) {
    fd < 32 ? dstReadLow = dstReadLow | mask : dstReadHigh = dstReadHigh | mask;
    total++;
   }
   if (flags & 4 && check(fd, srcWriteLow, srcWriteHigh, mask)) {
    fd < 32 ? dstWriteLow = dstWriteLow | mask : dstWriteHigh = dstWriteHigh | mask;
    total++;
   }
   if (flags & 2 && check(fd, srcExceptLow, srcExceptHigh, mask)) {
    fd < 32 ? dstExceptLow = dstExceptLow | mask : dstExceptHigh = dstExceptHigh | mask;
    total++;
   }
  }
  if (readfds) {
   GROWABLE_HEAP_I32()[readfds >> 2] = dstReadLow;
   GROWABLE_HEAP_I32()[readfds + 4 >> 2] = dstReadHigh;
  }
  if (writefds) {
   GROWABLE_HEAP_I32()[writefds >> 2] = dstWriteLow;
   GROWABLE_HEAP_I32()[writefds + 4 >> 2] = dstWriteHigh;
  }
  if (exceptfds) {
   GROWABLE_HEAP_I32()[exceptfds >> 2] = dstExceptLow;
   GROWABLE_HEAP_I32()[exceptfds + 4 >> 2] = dstExceptHigh;
  }
  return total;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

var SOCKFS = {
 mount: function(mount) {
  Module["websocket"] = Module["websocket"] && "object" === typeof Module["websocket"] ? Module["websocket"] : {};
  Module["websocket"]._callbacks = {};
  Module["websocket"]["on"] = function(event, callback) {
   if ("function" === typeof callback) {
    this._callbacks[event] = callback;
   }
   return this;
  };
  Module["websocket"].emit = function(event, param) {
   if ("function" === typeof this._callbacks[event]) {
    this._callbacks[event].call(this, param);
   }
  };
  return FS.createNode(null, "/", 16384 | 511, 0);
 },
 createSocket: function(family, type, protocol) {
  type &= ~526336;
  var streaming = type == 1;
  if (protocol) {
   assert(streaming == (protocol == 6));
  }
  var sock = {
   family: family,
   type: type,
   protocol: protocol,
   server: null,
   error: null,
   peers: {},
   pending: [],
   recv_queue: [],
   sock_ops: SOCKFS.websocket_sock_ops
  };
  var name = SOCKFS.nextname();
  var node = FS.createNode(SOCKFS.root, name, 49152, 0);
  node.sock = sock;
  var stream = FS.createStream({
   path: name,
   node: node,
   flags: 2,
   seekable: false,
   stream_ops: SOCKFS.stream_ops
  });
  sock.stream = stream;
  return sock;
 },
 getSocket: function(fd) {
  var stream = FS.getStream(fd);
  if (!stream || !FS.isSocket(stream.node.mode)) {
   return null;
  }
  return stream.node.sock;
 },
 stream_ops: {
  poll: function(stream) {
   var sock = stream.node.sock;
   return sock.sock_ops.poll(sock);
  },
  ioctl: function(stream, request, varargs) {
   var sock = stream.node.sock;
   return sock.sock_ops.ioctl(sock, request, varargs);
  },
  read: function(stream, buffer, offset, length, position) {
   var sock = stream.node.sock;
   var msg = sock.sock_ops.recvmsg(sock, length);
   if (!msg) {
    return 0;
   }
   buffer.set(msg.buffer, offset);
   return msg.buffer.length;
  },
  write: function(stream, buffer, offset, length, position) {
   var sock = stream.node.sock;
   return sock.sock_ops.sendmsg(sock, buffer, offset, length);
  },
  close: function(stream) {
   var sock = stream.node.sock;
   sock.sock_ops.close(sock);
  }
 },
 nextname: function() {
  if (!SOCKFS.nextname.current) {
   SOCKFS.nextname.current = 0;
  }
  return "socket[" + SOCKFS.nextname.current++ + "]";
 },
 websocket_sock_ops: {
  createPeer: function(sock, addr, port) {
   var ws;
   if (typeof addr === "object") {
    ws = addr;
    addr = null;
    port = null;
   }
   if (ws) {
    if (ws._socket) {
     addr = ws._socket.remoteAddress;
     port = ws._socket.remotePort;
    } else {
     var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
     if (!result) {
      throw new Error("WebSocket URL must be in the format ws(s)://address:port");
     }
     addr = result[1];
     port = parseInt(result[2], 10);
    }
   } else {
    try {
     var runtimeConfig = Module["websocket"] && "object" === typeof Module["websocket"];
     var url = "ws:#".replace("#", "//");
     if (runtimeConfig) {
      if ("string" === typeof Module["websocket"]["url"]) {
       url = Module["websocket"]["url"];
      }
     }
     if (url === "ws://" || url === "wss://") {
      var parts = addr.split("/");
      url = url + parts[0] + ":" + port + "/" + parts.slice(1).join("/");
     }
     var subProtocols = "binary";
     if (runtimeConfig) {
      if ("string" === typeof Module["websocket"]["subprotocol"]) {
       subProtocols = Module["websocket"]["subprotocol"];
      }
     }
     var opts = undefined;
     if (subProtocols !== "null") {
      subProtocols = subProtocols.replace(/^ +| +$/g, "").split(/ *, */);
      opts = ENVIRONMENT_IS_NODE ? {
       "protocol": subProtocols.toString()
      } : subProtocols;
     }
     if (runtimeConfig && null === Module["websocket"]["subprotocol"]) {
      subProtocols = "null";
      opts = undefined;
     }
     var WebSocketConstructor;
     {
      WebSocketConstructor = WebSocket;
     }
     ws = new WebSocketConstructor(url, opts);
     ws.binaryType = "arraybuffer";
    } catch (e) {
     throw new FS.ErrnoError(23);
    }
   }
   var peer = {
    addr: addr,
    port: port,
    socket: ws,
    dgram_send_queue: []
   };
   SOCKFS.websocket_sock_ops.addPeer(sock, peer);
   SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
   if (sock.type === 2 && typeof sock.sport !== "undefined") {
    peer.dgram_send_queue.push(new Uint8Array([ 255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (sock.sport & 65280) >> 8, sock.sport & 255 ]));
   }
   return peer;
  },
  getPeer: function(sock, addr, port) {
   return sock.peers[addr + ":" + port];
  },
  addPeer: function(sock, peer) {
   sock.peers[peer.addr + ":" + peer.port] = peer;
  },
  removePeer: function(sock, peer) {
   delete sock.peers[peer.addr + ":" + peer.port];
  },
  handlePeerEvents: function(sock, peer) {
   var first = true;
   var handleOpen = function() {
    Module["websocket"].emit("open", sock.stream.fd);
    try {
     var queued = peer.dgram_send_queue.shift();
     while (queued) {
      peer.socket.send(queued);
      queued = peer.dgram_send_queue.shift();
     }
    } catch (e) {
     peer.socket.close();
    }
   };
   function handleMessage(data) {
    if (typeof data === "string") {
     var encoder = new TextEncoder();
     data = encoder.encode(data);
    } else {
     assert(data.byteLength !== undefined);
     if (data.byteLength == 0) {
      return;
     } else {
      data = new Uint8Array(data);
     }
    }
    var wasfirst = first;
    first = false;
    if (wasfirst && data.length === 10 && data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 && data[4] === "p".charCodeAt(0) && data[5] === "o".charCodeAt(0) && data[6] === "r".charCodeAt(0) && data[7] === "t".charCodeAt(0)) {
     var newport = data[8] << 8 | data[9];
     SOCKFS.websocket_sock_ops.removePeer(sock, peer);
     peer.port = newport;
     SOCKFS.websocket_sock_ops.addPeer(sock, peer);
     return;
    }
    sock.recv_queue.push({
     addr: peer.addr,
     port: peer.port,
     data: data
    });
    Module["websocket"].emit("message", sock.stream.fd);
   }
   if (ENVIRONMENT_IS_NODE) {
    peer.socket.on("open", handleOpen);
    peer.socket.on("message", function(data, flags) {
     if (!flags.binary) {
      return;
     }
     handleMessage(new Uint8Array(data).buffer);
    });
    peer.socket.on("close", function() {
     Module["websocket"].emit("close", sock.stream.fd);
    });
    peer.socket.on("error", function(error) {
     sock.error = 14;
     Module["websocket"].emit("error", [ sock.stream.fd, sock.error, "ECONNREFUSED: Connection refused" ]);
    });
   } else {
    peer.socket.onopen = handleOpen;
    peer.socket.onclose = function() {
     Module["websocket"].emit("close", sock.stream.fd);
    };
    peer.socket.onmessage = function peer_socket_onmessage(event) {
     handleMessage(event.data);
    };
    peer.socket.onerror = function(error) {
     sock.error = 14;
     Module["websocket"].emit("error", [ sock.stream.fd, sock.error, "ECONNREFUSED: Connection refused" ]);
    };
   }
  },
  poll: function(sock) {
   if (sock.type === 1 && sock.server) {
    return sock.pending.length ? 64 | 1 : 0;
   }
   var mask = 0;
   var dest = sock.type === 1 ? SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) : null;
   if (sock.recv_queue.length || !dest || dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) {
    mask |= 64 | 1;
   }
   if (!dest || dest && dest.socket.readyState === dest.socket.OPEN) {
    mask |= 4;
   }
   if (dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) {
    mask |= 16;
   }
   return mask;
  },
  ioctl: function(sock, request, arg) {
   switch (request) {
   case 21531:
    var bytes = 0;
    if (sock.recv_queue.length) {
     bytes = sock.recv_queue[0].data.length;
    }
    GROWABLE_HEAP_I32()[arg >> 2] = bytes;
    return 0;

   default:
    return 28;
   }
  },
  close: function(sock) {
   if (sock.server) {
    try {
     sock.server.close();
    } catch (e) {}
    sock.server = null;
   }
   var peers = Object.keys(sock.peers);
   for (var i = 0; i < peers.length; i++) {
    var peer = sock.peers[peers[i]];
    try {
     peer.socket.close();
    } catch (e) {}
    SOCKFS.websocket_sock_ops.removePeer(sock, peer);
   }
   return 0;
  },
  bind: function(sock, addr, port) {
   if (typeof sock.saddr !== "undefined" || typeof sock.sport !== "undefined") {
    throw new FS.ErrnoError(28);
   }
   sock.saddr = addr;
   sock.sport = port;
   if (sock.type === 2) {
    if (sock.server) {
     sock.server.close();
     sock.server = null;
    }
    try {
     sock.sock_ops.listen(sock, 0);
    } catch (e) {
     if (!(e instanceof FS.ErrnoError)) throw e;
     if (e.errno !== 138) throw e;
    }
   }
  },
  connect: function(sock, addr, port) {
   if (sock.server) {
    throw new FS.ErrnoError(138);
   }
   if (typeof sock.daddr !== "undefined" && typeof sock.dport !== "undefined") {
    var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
    if (dest) {
     if (dest.socket.readyState === dest.socket.CONNECTING) {
      throw new FS.ErrnoError(7);
     } else {
      throw new FS.ErrnoError(30);
     }
    }
   }
   var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
   sock.daddr = peer.addr;
   sock.dport = peer.port;
   throw new FS.ErrnoError(26);
  },
  listen: function(sock, backlog) {
   if (!ENVIRONMENT_IS_NODE) {
    throw new FS.ErrnoError(138);
   }
  },
  accept: function(listensock) {
   if (!listensock.server) {
    throw new FS.ErrnoError(28);
   }
   var newsock = listensock.pending.shift();
   newsock.stream.flags = listensock.stream.flags;
   return newsock;
  },
  getname: function(sock, peer) {
   var addr, port;
   if (peer) {
    if (sock.daddr === undefined || sock.dport === undefined) {
     throw new FS.ErrnoError(53);
    }
    addr = sock.daddr;
    port = sock.dport;
   } else {
    addr = sock.saddr || 0;
    port = sock.sport || 0;
   }
   return {
    addr: addr,
    port: port
   };
  },
  sendmsg: function(sock, buffer, offset, length, addr, port) {
   if (sock.type === 2) {
    if (addr === undefined || port === undefined) {
     addr = sock.daddr;
     port = sock.dport;
    }
    if (addr === undefined || port === undefined) {
     throw new FS.ErrnoError(17);
    }
   } else {
    addr = sock.daddr;
    port = sock.dport;
   }
   var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
   if (sock.type === 1) {
    if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
     throw new FS.ErrnoError(53);
    } else if (dest.socket.readyState === dest.socket.CONNECTING) {
     throw new FS.ErrnoError(6);
    }
   }
   if (ArrayBuffer.isView(buffer)) {
    offset += buffer.byteOffset;
    buffer = buffer.buffer;
   }
   var data;
   if (buffer instanceof SharedArrayBuffer) {
    data = new Uint8Array(new Uint8Array(buffer.slice(offset, offset + length))).buffer;
   } else {
    data = buffer.slice(offset, offset + length);
   }
   if (sock.type === 2) {
    if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
     if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
      dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
     }
     dest.dgram_send_queue.push(data);
     return length;
    }
   }
   try {
    dest.socket.send(data);
    return length;
   } catch (e) {
    throw new FS.ErrnoError(28);
   }
  },
  recvmsg: function(sock, length) {
   if (sock.type === 1 && sock.server) {
    throw new FS.ErrnoError(53);
   }
   var queued = sock.recv_queue.shift();
   if (!queued) {
    if (sock.type === 1) {
     var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
     if (!dest) {
      throw new FS.ErrnoError(53);
     } else if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
      return null;
     } else {
      throw new FS.ErrnoError(6);
     }
    } else {
     throw new FS.ErrnoError(6);
    }
   }
   var queuedLength = queued.data.byteLength || queued.data.length;
   var queuedOffset = queued.data.byteOffset || 0;
   var queuedBuffer = queued.data.buffer || queued.data;
   var bytesRead = Math.min(length, queuedLength);
   var res = {
    buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
    addr: queued.addr,
    port: queued.port
   };
   if (sock.type === 1 && bytesRead < queuedLength) {
    var bytesRemaining = queuedLength - bytesRead;
    queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
    sock.recv_queue.unshift(queued);
   }
   return res;
  }
 }
};

function getSocketFromFD(fd) {
 var socket = SOCKFS.getSocket(fd);
 if (!socket) throw new FS.ErrnoError(8);
 return socket;
}

var Sockets = {
 BUFFER_SIZE: 10240,
 MAX_BUFFER_SIZE: 10485760,
 nextFd: 1,
 fds: {},
 nextport: 1,
 maxport: 65535,
 peer: null,
 connections: {},
 portmap: {},
 localAddr: 4261412874,
 addrPool: [ 33554442, 50331658, 67108874, 83886090, 100663306, 117440522, 134217738, 150994954, 167772170, 184549386, 201326602, 218103818, 234881034 ]
};

function inetPton4(str) {
 var b = str.split(".");
 for (var i = 0; i < 4; i++) {
  var tmp = Number(b[i]);
  if (isNaN(tmp)) return null;
  b[i] = tmp;
 }
 return (b[0] | b[1] << 8 | b[2] << 16 | b[3] << 24) >>> 0;
}

function jstoi_q(str) {
 return parseInt(str);
}

function inetPton6(str) {
 var words;
 var w, offset, z, i;
 var valid6regx = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
 var parts = [];
 if (!valid6regx.test(str)) {
  return null;
 }
 if (str === "::") {
  return [ 0, 0, 0, 0, 0, 0, 0, 0 ];
 }
 if (str.startsWith("::")) {
  str = str.replace("::", "Z:");
 } else {
  str = str.replace("::", ":Z:");
 }
 if (str.indexOf(".") > 0) {
  str = str.replace(new RegExp("[.]", "g"), ":");
  words = str.split(":");
  words[words.length - 4] = jstoi_q(words[words.length - 4]) + jstoi_q(words[words.length - 3]) * 256;
  words[words.length - 3] = jstoi_q(words[words.length - 2]) + jstoi_q(words[words.length - 1]) * 256;
  words = words.slice(0, words.length - 2);
 } else {
  words = str.split(":");
 }
 offset = 0;
 z = 0;
 for (w = 0; w < words.length; w++) {
  if (typeof words[w] === "string") {
   if (words[w] === "Z") {
    for (z = 0; z < 8 - words.length + 1; z++) {
     parts[w + z] = 0;
    }
    offset = z - 1;
   } else {
    parts[w + offset] = _htons(parseInt(words[w], 16));
   }
  } else {
   parts[w + offset] = words[w];
  }
 }
 return [ parts[1] << 16 | parts[0], parts[3] << 16 | parts[2], parts[5] << 16 | parts[4], parts[7] << 16 | parts[6] ];
}

function writeSockaddr(sa, family, addr, port, addrlen) {
 switch (family) {
 case 2:
  addr = inetPton4(addr);
  zeroMemory(sa, 16);
  if (addrlen) {
   GROWABLE_HEAP_I32()[addrlen >> 2] = 16;
  }
  GROWABLE_HEAP_I16()[sa >> 1] = family;
  GROWABLE_HEAP_I32()[sa + 4 >> 2] = addr;
  GROWABLE_HEAP_I16()[sa + 2 >> 1] = _htons(port);
  break;

 case 10:
  addr = inetPton6(addr);
  zeroMemory(sa, 28);
  if (addrlen) {
   GROWABLE_HEAP_I32()[addrlen >> 2] = 28;
  }
  GROWABLE_HEAP_I32()[sa >> 2] = family;
  GROWABLE_HEAP_I32()[sa + 8 >> 2] = addr[0];
  GROWABLE_HEAP_I32()[sa + 12 >> 2] = addr[1];
  GROWABLE_HEAP_I32()[sa + 16 >> 2] = addr[2];
  GROWABLE_HEAP_I32()[sa + 20 >> 2] = addr[3];
  GROWABLE_HEAP_I16()[sa + 2 >> 1] = _htons(port);
  break;

 default:
  return 5;
 }
 return 0;
}

var DNS = {
 address_map: {
  id: 1,
  addrs: {},
  names: {}
 },
 lookup_name: function(name) {
  var res = inetPton4(name);
  if (res !== null) {
   return name;
  }
  res = inetPton6(name);
  if (res !== null) {
   return name;
  }
  var addr;
  if (DNS.address_map.addrs[name]) {
   addr = DNS.address_map.addrs[name];
  } else {
   var id = DNS.address_map.id++;
   assert(id < 65535, "exceeded max address mappings of 65535");
   addr = "172.29." + (id & 255) + "." + (id & 65280);
   DNS.address_map.names[addr] = name;
   DNS.address_map.addrs[name] = addr;
  }
  return addr;
 },
 lookup_addr: function(addr) {
  if (DNS.address_map.names[addr]) {
   return DNS.address_map.names[addr];
  }
  return null;
 }
};

function ___sys_accept4(fd, addr, addrlen, flags) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(3, 1, fd, addr, addrlen, flags);
 try {
  var sock = getSocketFromFD(fd);
  var newsock = sock.sock_ops.accept(sock);
  if (addr) {
   var errno = writeSockaddr(addr, newsock.family, DNS.lookup_name(newsock.daddr), newsock.dport, addrlen);
   assert(!errno);
  }
  return newsock.stream.fd;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_access(path, amode) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(4, 1, path, amode);
 try {
  path = SYSCALLS.getStr(path);
  return SYSCALLS.doAccess(path, amode);
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function inetNtop4(addr) {
 return (addr & 255) + "." + (addr >> 8 & 255) + "." + (addr >> 16 & 255) + "." + (addr >> 24 & 255);
}

function inetNtop6(ints) {
 var str = "";
 var word = 0;
 var longest = 0;
 var lastzero = 0;
 var zstart = 0;
 var len = 0;
 var i = 0;
 var parts = [ ints[0] & 65535, ints[0] >> 16, ints[1] & 65535, ints[1] >> 16, ints[2] & 65535, ints[2] >> 16, ints[3] & 65535, ints[3] >> 16 ];
 var hasipv4 = true;
 var v4part = "";
 for (i = 0; i < 5; i++) {
  if (parts[i] !== 0) {
   hasipv4 = false;
   break;
  }
 }
 if (hasipv4) {
  v4part = inetNtop4(parts[6] | parts[7] << 16);
  if (parts[5] === -1) {
   str = "::ffff:";
   str += v4part;
   return str;
  }
  if (parts[5] === 0) {
   str = "::";
   if (v4part === "0.0.0.0") v4part = "";
   if (v4part === "0.0.0.1") v4part = "1";
   str += v4part;
   return str;
  }
 }
 for (word = 0; word < 8; word++) {
  if (parts[word] === 0) {
   if (word - lastzero > 1) {
    len = 0;
   }
   lastzero = word;
   len++;
  }
  if (len > longest) {
   longest = len;
   zstart = word - longest + 1;
  }
 }
 for (word = 0; word < 8; word++) {
  if (longest > 1) {
   if (parts[word] === 0 && word >= zstart && word < zstart + longest) {
    if (word === zstart) {
     str += ":";
     if (zstart === 0) str += ":";
    }
    continue;
   }
  }
  str += Number(_ntohs(parts[word] & 65535)).toString(16);
  str += word < 7 ? ":" : "";
 }
 return str;
}

function readSockaddr(sa, salen) {
 var family = GROWABLE_HEAP_I16()[sa >> 1];
 var port = _ntohs(GROWABLE_HEAP_U16()[sa + 2 >> 1]);
 var addr;
 switch (family) {
 case 2:
  if (salen !== 16) {
   return {
    errno: 28
   };
  }
  addr = GROWABLE_HEAP_I32()[sa + 4 >> 2];
  addr = inetNtop4(addr);
  break;

 case 10:
  if (salen !== 28) {
   return {
    errno: 28
   };
  }
  addr = [ GROWABLE_HEAP_I32()[sa + 8 >> 2], GROWABLE_HEAP_I32()[sa + 12 >> 2], GROWABLE_HEAP_I32()[sa + 16 >> 2], GROWABLE_HEAP_I32()[sa + 20 >> 2] ];
  addr = inetNtop6(addr);
  break;

 default:
  return {
   errno: 5
  };
 }
 return {
  family: family,
  addr: addr,
  port: port
 };
}

function getSocketAddress(addrp, addrlen, allowNull) {
 if (allowNull && addrp === 0) return null;
 var info = readSockaddr(addrp, addrlen);
 if (info.errno) throw new FS.ErrnoError(info.errno);
 info.addr = DNS.lookup_addr(info.addr) || info.addr;
 return info;
}

function ___sys_bind(fd, addr, addrlen) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(5, 1, fd, addr, addrlen);
 try {
  var sock = getSocketFromFD(fd);
  var info = getSocketAddress(addr, addrlen);
  sock.sock_ops.bind(sock, info.addr, info.port);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_chdir(path) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(6, 1, path);
 try {
  path = SYSCALLS.getStr(path);
  FS.chdir(path);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_chmod(path, mode) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(7, 1, path, mode);
 try {
  path = SYSCALLS.getStr(path);
  FS.chmod(path, mode);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_connect(fd, addr, addrlen) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(8, 1, fd, addr, addrlen);
 try {
  var sock = getSocketFromFD(fd);
  var info = getSocketAddress(addr, addrlen);
  sock.sock_ops.connect(sock, info.addr, info.port);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_fcntl64(fd, cmd, varargs) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(9, 1, fd, cmd, varargs);
 SYSCALLS.varargs = varargs;
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  switch (cmd) {
  case 0:
   {
    var arg = SYSCALLS.get();
    if (arg < 0) {
     return -28;
    }
    var newStream;
    newStream = FS.open(stream.path, stream.flags, 0, arg);
    return newStream.fd;
   }

  case 1:
  case 2:
   return 0;

  case 3:
   return stream.flags;

  case 4:
   {
    var arg = SYSCALLS.get();
    stream.flags |= arg;
    return 0;
   }

  case 12:
   {
    var arg = SYSCALLS.get();
    var offset = 0;
    GROWABLE_HEAP_I16()[arg + offset >> 1] = 2;
    return 0;
   }

  case 13:
  case 14:
   return 0;

  case 16:
  case 8:
   return -28;

  case 9:
   setErrNo(28);
   return -1;

  default:
   {
    return -28;
   }
  }
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_getcwd(buf, size) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(10, 1, buf, size);
 try {
  if (size === 0) return -28;
  var cwd = FS.cwd();
  var cwdLengthInBytes = lengthBytesUTF8(cwd);
  if (size < cwdLengthInBytes + 1) return -68;
  stringToUTF8(cwd, buf, size);
  return buf;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_getdents64(fd, dirp, count) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(11, 1, fd, dirp, count);
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  if (!stream.getdents) {
   stream.getdents = FS.readdir(stream.path);
  }
  var struct_size = 280;
  var pos = 0;
  var off = FS.llseek(stream, 0, 1);
  var idx = Math.floor(off / struct_size);
  while (idx < stream.getdents.length && pos + struct_size <= count) {
   var id;
   var type;
   var name = stream.getdents[idx];
   if (name[0] === ".") {
    id = 1;
    type = 4;
   } else {
    var child = FS.lookupNode(stream.node, name);
    id = child.id;
    type = FS.isChrdev(child.mode) ? 2 : FS.isDir(child.mode) ? 4 : FS.isLink(child.mode) ? 10 : 8;
   }
   tempI64 = [ id >>> 0, (tempDouble = id, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
   GROWABLE_HEAP_I32()[dirp + pos >> 2] = tempI64[0], GROWABLE_HEAP_I32()[dirp + pos + 4 >> 2] = tempI64[1];
   tempI64 = [ (idx + 1) * struct_size >>> 0, (tempDouble = (idx + 1) * struct_size, 
   +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
   GROWABLE_HEAP_I32()[dirp + pos + 8 >> 2] = tempI64[0], GROWABLE_HEAP_I32()[dirp + pos + 12 >> 2] = tempI64[1];
   GROWABLE_HEAP_I16()[dirp + pos + 16 >> 1] = 280;
   GROWABLE_HEAP_I8()[dirp + pos + 18 >> 0] = type;
   stringToUTF8(name, dirp + pos + 19, 256);
   pos += struct_size;
   idx += 1;
  }
  FS.llseek(stream, idx * struct_size, 0);
  return pos;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_getpid() {
 return 42;
}

function ___sys_getsockname(fd, addr, addrlen) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(12, 1, fd, addr, addrlen);
 try {
  err("__sys_getsockname " + fd);
  var sock = getSocketFromFD(fd);
  var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(sock.saddr || "0.0.0.0"), sock.sport, addrlen);
  assert(!errno);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_getsockopt(fd, level, optname, optval, optlen) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(13, 1, fd, level, optname, optval, optlen);
 try {
  var sock = getSocketFromFD(fd);
  if (level === 1) {
   if (optname === 4) {
    GROWABLE_HEAP_I32()[optval >> 2] = sock.error;
    GROWABLE_HEAP_I32()[optlen >> 2] = 4;
    sock.error = null;
    return 0;
   }
  }
  return -50;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_ioctl(fd, op, varargs) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(14, 1, fd, op, varargs);
 SYSCALLS.varargs = varargs;
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  switch (op) {
  case 21509:
  case 21505:
   {
    if (!stream.tty) return -59;
    return 0;
   }

  case 21510:
  case 21511:
  case 21512:
  case 21506:
  case 21507:
  case 21508:
   {
    if (!stream.tty) return -59;
    return 0;
   }

  case 21519:
   {
    if (!stream.tty) return -59;
    var argp = SYSCALLS.get();
    GROWABLE_HEAP_I32()[argp >> 2] = 0;
    return 0;
   }

  case 21520:
   {
    if (!stream.tty) return -59;
    return -28;
   }

  case 21531:
   {
    var argp = SYSCALLS.get();
    return FS.ioctl(stream, op, argp);
   }

  case 21523:
   {
    if (!stream.tty) return -59;
    return 0;
   }

  case 21524:
   {
    if (!stream.tty) return -59;
    return 0;
   }

  default:
   abort("bad ioctl syscall " + op);
  }
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_listen(fd, backlog) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(15, 1, fd, backlog);
 try {
  var sock = getSocketFromFD(fd);
  sock.sock_ops.listen(sock, backlog);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_lstat64(path, buf) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(16, 1, path, buf);
 try {
  path = SYSCALLS.getStr(path);
  return SYSCALLS.doStat(FS.lstat, path, buf);
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

var ___sys_madvise1 = function(addr, length, advice) {
 err("warning: unsupported syscall: __sys_madvise1");
 try {
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
};

function ___sys_mkdir(path, mode) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(17, 1, path, mode);
 try {
  path = SYSCALLS.getStr(path);
  return SYSCALLS.doMkdir(path, mode);
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function syscallMmap2(addr, len, prot, flags, fd, off) {
 off <<= 12;
 var ptr;
 var allocated = false;
 if ((flags & 16) !== 0 && addr % 65536 !== 0) {
  return -28;
 }
 if ((flags & 32) !== 0) {
  ptr = mmapAlloc(len);
  if (!ptr) return -48;
  allocated = true;
 } else {
  var info = FS.getStream(fd);
  if (!info) return -8;
  var res = FS.mmap(info, addr, len, off, prot, flags);
  ptr = res.ptr;
  allocated = res.allocated;
 }
 SYSCALLS.mappings[ptr] = {
  malloc: ptr,
  len: len,
  allocated: allocated,
  fd: fd,
  prot: prot,
  flags: flags,
  offset: off
 };
 return ptr;
}

function ___sys_mmap2(addr, len, prot, flags, fd, off) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(18, 1, addr, len, prot, flags, fd, off);
 try {
  return syscallMmap2(addr, len, prot, flags, fd, off);
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function syscallMunmap(addr, len) {
 var info = SYSCALLS.mappings[addr];
 if (len === 0 || !info) {
  return -28;
 }
 if (len === info.len) {
  var stream = FS.getStream(info.fd);
  if (stream) {
   if (info.prot & 2) {
    SYSCALLS.doMsync(addr, stream, len, info.flags, info.offset);
   }
   FS.munmap(stream);
  }
  SYSCALLS.mappings[addr] = null;
  if (info.allocated) {
   _free(info.malloc);
  }
 }
 return 0;
}

function ___sys_munmap(addr, len) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(19, 1, addr, len);
 try {
  return syscallMunmap(addr, len);
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_open(path, flags, varargs) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(20, 1, path, flags, varargs);
 SYSCALLS.varargs = varargs;
 try {
  var pathname = SYSCALLS.getStr(path);
  var mode = varargs ? SYSCALLS.get() : 0;
  var stream = FS.open(pathname, flags, mode);
  return stream.fd;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_poll(fds, nfds, timeout) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(21, 1, fds, nfds, timeout);
 try {
  var nonzero = 0;
  for (var i = 0; i < nfds; i++) {
   var pollfd = fds + 8 * i;
   var fd = GROWABLE_HEAP_I32()[pollfd >> 2];
   var events = GROWABLE_HEAP_I16()[pollfd + 4 >> 1];
   var mask = 32;
   var stream = FS.getStream(fd);
   if (stream) {
    mask = SYSCALLS.DEFAULT_POLLMASK;
    if (stream.stream_ops.poll) {
     mask = stream.stream_ops.poll(stream);
    }
   }
   mask &= events | 8 | 16;
   if (mask) nonzero++;
   GROWABLE_HEAP_I16()[pollfd + 6 >> 1] = mask;
  }
  return nonzero;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_readlink(path, buf, bufsize) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(22, 1, path, buf, bufsize);
 try {
  path = SYSCALLS.getStr(path);
  return SYSCALLS.doReadlink(path, buf, bufsize);
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_recvfrom(fd, buf, len, flags, addr, addrlen) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(23, 1, fd, buf, len, flags, addr, addrlen);
 try {
  var sock = getSocketFromFD(fd);
  var msg = sock.sock_ops.recvmsg(sock, len);
  if (!msg) return 0;
  if (addr) {
   var errno = writeSockaddr(addr, sock.family, DNS.lookup_name(msg.addr), msg.port, addrlen);
   assert(!errno);
  }
  GROWABLE_HEAP_U8().set(msg.buffer, buf);
  return msg.buffer.byteLength;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_rename(old_path, new_path) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(24, 1, old_path, new_path);
 try {
  old_path = SYSCALLS.getStr(old_path);
  new_path = SYSCALLS.getStr(new_path);
  FS.rename(old_path, new_path);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_rmdir(path) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(25, 1, path);
 try {
  path = SYSCALLS.getStr(path);
  FS.rmdir(path);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_sendto(fd, message, length, flags, addr, addr_len) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(26, 1, fd, message, length, flags, addr, addr_len);
 try {
  var sock = getSocketFromFD(fd);
  var dest = getSocketAddress(addr, addr_len, true);
  if (!dest) {
   return FS.write(sock.stream, GROWABLE_HEAP_I8(), message, length);
  } else {
   return sock.sock_ops.sendmsg(sock, GROWABLE_HEAP_I8(), message, length, dest.addr, dest.port);
  }
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

var ___sys_setsockopt = function(fd) {
 err("warning: unsupported syscall: __sys_setsockopt");
 try {
  return -50;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
};

function ___sys_socket(domain, type, protocol) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(27, 1, domain, type, protocol);
 try {
  var sock = SOCKFS.createSocket(domain, type, protocol);
  assert(sock.stream.fd < 64);
  return sock.stream.fd;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_stat64(path, buf) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(28, 1, path, buf);
 try {
  path = SYSCALLS.getStr(path);
  return SYSCALLS.doStat(FS.stat, path, buf);
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_statfs64(path, size, buf) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(29, 1, path, size, buf);
 try {
  path = SYSCALLS.getStr(path);
  assert(size === 64);
  GROWABLE_HEAP_I32()[buf + 4 >> 2] = 4096;
  GROWABLE_HEAP_I32()[buf + 40 >> 2] = 4096;
  GROWABLE_HEAP_I32()[buf + 8 >> 2] = 1e6;
  GROWABLE_HEAP_I32()[buf + 12 >> 2] = 5e5;
  GROWABLE_HEAP_I32()[buf + 16 >> 2] = 5e5;
  GROWABLE_HEAP_I32()[buf + 20 >> 2] = FS.nextInode;
  GROWABLE_HEAP_I32()[buf + 24 >> 2] = 1e6;
  GROWABLE_HEAP_I32()[buf + 28 >> 2] = 42;
  GROWABLE_HEAP_I32()[buf + 44 >> 2] = 2;
  GROWABLE_HEAP_I32()[buf + 36 >> 2] = 255;
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_symlink(target, linkpath) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(30, 1, target, linkpath);
 try {
  target = SYSCALLS.getStr(target);
  linkpath = SYSCALLS.getStr(linkpath);
  FS.symlink(target, linkpath);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

function ___sys_unlink(path) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(31, 1, path);
 try {
  path = SYSCALLS.getStr(path);
  FS.unlink(path);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return -e.errno;
 }
}

var ___sys_wait4 = function() {
 err("warning: unsupported syscall: __sys_wait4");
 return -52;
};

function __emscripten_notify_thread_queue(targetThreadId, mainThreadId) {
 if (targetThreadId == mainThreadId) {
  postMessage({
   "cmd": "processQueuedMainThreadWork"
  });
 } else if (ENVIRONMENT_IS_PTHREAD) {
  postMessage({
   "targetThread": targetThreadId,
   "cmd": "processThreadQueue"
  });
 } else {
  var pthread = PThread.pthreads[targetThreadId];
  var worker = pthread && pthread.worker;
  if (!worker) {
   err("Cannot send message to thread with ID " + targetThreadId + ", unknown thread ID!");
   return;
  }
  worker.postMessage({
   "cmd": "processThreadQueue"
  });
 }
 return 1;
}

function __emscripten_proxied_gl_context_activated_from_main_browser_thread(contextHandle) {
 GLctx = Module.ctx = GL.currentContext = contextHandle;
 GL.currentContextIsProxied = true;
}

function __emscripten_throw_longjmp() {
 throw "longjmp";
}

function _abort() {
 abort();
}

function _dlclose(handle) {
 abort("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
}

function _dlerror() {
 abort("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
}

function _dlopen(filename, flag) {
 abort("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
}

function _dlsym(handle, symbol) {
 abort("To use dlopen, you need to use Emscripten's linking support, see https://github.com/emscripten-core/emscripten/wiki/Linking");
}

var readAsmConstArgsArray = [];

function readAsmConstArgs(sigPtr, buf) {
 assert(Array.isArray(readAsmConstArgsArray));
 assert(buf % 16 == 0);
 readAsmConstArgsArray.length = 0;
 var ch;
 buf >>= 2;
 while (ch = GROWABLE_HEAP_U8()[sigPtr++]) {
  assert(ch === 100 || ch === 102 || ch === 105);
  var double = ch < 105;
  if (double && buf & 1) buf++;
  readAsmConstArgsArray.push(double ? GROWABLE_HEAP_F64()[buf++ >> 1] : GROWABLE_HEAP_I32()[buf]);
  ++buf;
 }
 return readAsmConstArgsArray;
}

function _emscripten_asm_const_int(code, sigPtr, argbuf) {
 var args = readAsmConstArgs(sigPtr, argbuf);
 if (!ASM_CONSTS.hasOwnProperty(code)) abort("No EM_ASM constant found at address " + code);
 return ASM_CONSTS[code].apply(null, args);
}

function _emscripten_set_main_loop_timing(mode, value) {
 Browser.mainLoop.timingMode = mode;
 Browser.mainLoop.timingValue = value;
 if (!Browser.mainLoop.func) {
  err("emscripten_set_main_loop_timing: Cannot set timing mode for main loop since a main loop does not exist! Call emscripten_set_main_loop first to set one up.");
  return 1;
 }
 if (!Browser.mainLoop.running) {
  runtimeKeepalivePush();
  Browser.mainLoop.running = true;
 }
 if (mode == 0) {
  Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setTimeout() {
   var timeUntilNextTick = Math.max(0, Browser.mainLoop.tickStartTime + value - _emscripten_get_now()) | 0;
   setTimeout(Browser.mainLoop.runner, timeUntilNextTick);
  };
  Browser.mainLoop.method = "timeout";
 } else if (mode == 1) {
  Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_rAF() {
   Browser.requestAnimationFrame(Browser.mainLoop.runner);
  };
  Browser.mainLoop.method = "rAF";
 } else if (mode == 2) {
  if (typeof setImmediate === "undefined") {
   var setImmediates = [];
   var emscriptenMainLoopMessageId = "setimmediate";
   var Browser_setImmediate_messageHandler = function(event) {
    if (event.data === emscriptenMainLoopMessageId || event.data.target === emscriptenMainLoopMessageId) {
     event.stopPropagation();
     setImmediates.shift()();
    }
   };
   addEventListener("message", Browser_setImmediate_messageHandler, true);
   setImmediate = function Browser_emulated_setImmediate(func) {
    setImmediates.push(func);
    if (ENVIRONMENT_IS_WORKER) {
     if (Module["setImmediates"] === undefined) Module["setImmediates"] = [];
     Module["setImmediates"].push(func);
     postMessage({
      target: emscriptenMainLoopMessageId
     });
    } else postMessage(emscriptenMainLoopMessageId, "*");
   };
  }
  Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setImmediate() {
   setImmediate(Browser.mainLoop.runner);
  };
  Browser.mainLoop.method = "immediate";
 }
 return 0;
}

function runtimeKeepalivePush() {
 runtimeKeepaliveCounter += 1;
}

function maybeExit() {
 if (!keepRuntimeAlive()) {
  try {
   if (ENVIRONMENT_IS_PTHREAD) __emscripten_thread_exit(EXITSTATUS); else _exit(EXITSTATUS);
  } catch (e) {
   handleException(e);
  }
 }
}

function setMainLoop(browserIterationFunc, fps, simulateInfiniteLoop, arg, noSetTiming) {
 assert(!Browser.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
 Browser.mainLoop.func = browserIterationFunc;
 Browser.mainLoop.arg = arg;
 var thisMainLoopId = Browser.mainLoop.currentlyRunningMainloop;
 function checkIsRunning() {
  if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop) {
   runtimeKeepalivePop();
   maybeExit();
   return false;
  }
  return true;
 }
 Browser.mainLoop.running = false;
 Browser.mainLoop.runner = function Browser_mainLoop_runner() {
  if (ABORT) return;
  if (Browser.mainLoop.queue.length > 0) {
   var start = Date.now();
   var blocker = Browser.mainLoop.queue.shift();
   blocker.func(blocker.arg);
   if (Browser.mainLoop.remainingBlockers) {
    var remaining = Browser.mainLoop.remainingBlockers;
    var next = remaining % 1 == 0 ? remaining - 1 : Math.floor(remaining);
    if (blocker.counted) {
     Browser.mainLoop.remainingBlockers = next;
    } else {
     next = next + .5;
     Browser.mainLoop.remainingBlockers = (8 * remaining + next) / 9;
    }
   }
   out('main loop blocker "' + blocker.name + '" took ' + (Date.now() - start) + " ms");
   Browser.mainLoop.updateStatus();
   if (!checkIsRunning()) return;
   setTimeout(Browser.mainLoop.runner, 0);
   return;
  }
  if (!checkIsRunning()) return;
  Browser.mainLoop.currentFrameNumber = Browser.mainLoop.currentFrameNumber + 1 | 0;
  if (Browser.mainLoop.timingMode == 1 && Browser.mainLoop.timingValue > 1 && Browser.mainLoop.currentFrameNumber % Browser.mainLoop.timingValue != 0) {
   Browser.mainLoop.scheduler();
   return;
  } else if (Browser.mainLoop.timingMode == 0) {
   Browser.mainLoop.tickStartTime = _emscripten_get_now();
  }
  if (Browser.mainLoop.method === "timeout" && Module.ctx) {
   warnOnce("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!");
   Browser.mainLoop.method = "";
  }
  Browser.mainLoop.runIter(browserIterationFunc);
  checkStackCookie();
  if (!checkIsRunning()) return;
  if (typeof SDL === "object" && SDL.audio && SDL.audio.queueNewAudioData) SDL.audio.queueNewAudioData();
  Browser.mainLoop.scheduler();
 };
 if (!noSetTiming) {
  if (fps && fps > 0) _emscripten_set_main_loop_timing(0, 1e3 / fps); else _emscripten_set_main_loop_timing(1, 1);
  Browser.mainLoop.scheduler();
 }
 if (simulateInfiniteLoop) {
  throw "unwind";
 }
}

function callUserCallback(func, synchronous) {
 if (ABORT) {
  err("user callback triggered after application aborted.  Ignoring.");
  return;
 }
 if (synchronous) {
  func();
  return;
 }
 try {
  func();
  maybeExit();
 } catch (e) {
  handleException(e);
 }
}

function runtimeKeepalivePop() {
 assert(runtimeKeepaliveCounter > 0);
 runtimeKeepaliveCounter -= 1;
}

function safeSetTimeout(func, timeout) {
 runtimeKeepalivePush();
 return setTimeout(function() {
  runtimeKeepalivePop();
  callUserCallback(func);
 }, timeout);
}

var Browser = {
 mainLoop: {
  running: false,
  scheduler: null,
  method: "",
  currentlyRunningMainloop: 0,
  func: null,
  arg: 0,
  timingMode: 0,
  timingValue: 0,
  currentFrameNumber: 0,
  queue: [],
  pause: function() {
   Browser.mainLoop.scheduler = null;
   Browser.mainLoop.currentlyRunningMainloop++;
  },
  resume: function() {
   Browser.mainLoop.currentlyRunningMainloop++;
   var timingMode = Browser.mainLoop.timingMode;
   var timingValue = Browser.mainLoop.timingValue;
   var func = Browser.mainLoop.func;
   Browser.mainLoop.func = null;
   setMainLoop(func, 0, false, Browser.mainLoop.arg, true);
   _emscripten_set_main_loop_timing(timingMode, timingValue);
   Browser.mainLoop.scheduler();
  },
  updateStatus: function() {
   if (Module["setStatus"]) {
    var message = Module["statusMessage"] || "Please wait...";
    var remaining = Browser.mainLoop.remainingBlockers;
    var expected = Browser.mainLoop.expectedBlockers;
    if (remaining) {
     if (remaining < expected) {
      Module["setStatus"](message + " (" + (expected - remaining) + "/" + expected + ")");
     } else {
      Module["setStatus"](message);
     }
    } else {
     Module["setStatus"]("");
    }
   }
  },
  runIter: function(func) {
   if (ABORT) return;
   if (Module["preMainLoop"]) {
    var preRet = Module["preMainLoop"]();
    if (preRet === false) {
     return;
    }
   }
   callUserCallback(func);
   if (Module["postMainLoop"]) Module["postMainLoop"]();
  }
 },
 isFullscreen: false,
 pointerLock: false,
 moduleContextCreatedCallbacks: [],
 workers: [],
 init: function() {
  if (!Module["preloadPlugins"]) Module["preloadPlugins"] = [];
  if (Browser.initted) return;
  Browser.initted = true;
  try {
   new Blob();
   Browser.hasBlobConstructor = true;
  } catch (e) {
   Browser.hasBlobConstructor = false;
   out("warning: no blob constructor, cannot create blobs with mimetypes");
  }
  Browser.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !Browser.hasBlobConstructor ? out("warning: no BlobBuilder") : null;
  Browser.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
  if (!Module.noImageDecoding && typeof Browser.URLObject === "undefined") {
   out("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
   Module.noImageDecoding = true;
  }
  var imagePlugin = {};
  imagePlugin["canHandle"] = function imagePlugin_canHandle(name) {
   return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name);
  };
  imagePlugin["handle"] = function imagePlugin_handle(byteArray, name, onload, onerror) {
   var b = null;
   if (Browser.hasBlobConstructor) {
    try {
     b = new Blob([ byteArray ], {
      type: Browser.getMimetype(name)
     });
     if (b.size !== byteArray.length) {
      b = new Blob([ new Uint8Array(byteArray).buffer ], {
       type: Browser.getMimetype(name)
      });
     }
    } catch (e) {
     warnOnce("Blob constructor present but fails: " + e + "; falling back to blob builder");
    }
   }
   if (!b) {
    var bb = new Browser.BlobBuilder();
    bb.append(new Uint8Array(byteArray).buffer);
    b = bb.getBlob();
   }
   var url = Browser.URLObject.createObjectURL(b);
   assert(typeof url == "string", "createObjectURL must return a url as a string");
   var img = new Image();
   img.onload = function img_onload() {
    assert(img.complete, "Image " + name + " could not be decoded");
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    Module["preloadedImages"][name] = canvas;
    Browser.URLObject.revokeObjectURL(url);
    if (onload) onload(byteArray);
   };
   img.onerror = function img_onerror(event) {
    out("Image " + url + " could not be decoded");
    if (onerror) onerror();
   };
   img.src = url;
  };
  Module["preloadPlugins"].push(imagePlugin);
  var audioPlugin = {};
  audioPlugin["canHandle"] = function audioPlugin_canHandle(name) {
   return !Module.noAudioDecoding && name.substr(-4) in {
    ".ogg": 1,
    ".wav": 1,
    ".mp3": 1
   };
  };
  audioPlugin["handle"] = function audioPlugin_handle(byteArray, name, onload, onerror) {
   var done = false;
   function finish(audio) {
    if (done) return;
    done = true;
    Module["preloadedAudios"][name] = audio;
    if (onload) onload(byteArray);
   }
   function fail() {
    if (done) return;
    done = true;
    Module["preloadedAudios"][name] = new Audio();
    if (onerror) onerror();
   }
   if (Browser.hasBlobConstructor) {
    try {
     var b = new Blob([ byteArray ], {
      type: Browser.getMimetype(name)
     });
    } catch (e) {
     return fail();
    }
    var url = Browser.URLObject.createObjectURL(b);
    assert(typeof url == "string", "createObjectURL must return a url as a string");
    var audio = new Audio();
    audio.addEventListener("canplaythrough", function() {
     finish(audio);
    }, false);
    audio.onerror = function audio_onerror(event) {
     if (done) return;
     out("warning: browser could not fully decode audio " + name + ", trying slower base64 approach");
     function encode64(data) {
      var BASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      var PAD = "=";
      var ret = "";
      var leftchar = 0;
      var leftbits = 0;
      for (var i = 0; i < data.length; i++) {
       leftchar = leftchar << 8 | data[i];
       leftbits += 8;
       while (leftbits >= 6) {
        var curr = leftchar >> leftbits - 6 & 63;
        leftbits -= 6;
        ret += BASE[curr];
       }
      }
      if (leftbits == 2) {
       ret += BASE[(leftchar & 3) << 4];
       ret += PAD + PAD;
      } else if (leftbits == 4) {
       ret += BASE[(leftchar & 15) << 2];
       ret += PAD;
      }
      return ret;
     }
     audio.src = "data:audio/x-" + name.substr(-3) + ";base64," + encode64(byteArray);
     finish(audio);
    };
    audio.src = url;
    safeSetTimeout(function() {
     finish(audio);
    }, 1e4);
   } else {
    return fail();
   }
  };
  Module["preloadPlugins"].push(audioPlugin);
  function pointerLockChange() {
   Browser.pointerLock = document["pointerLockElement"] === Module["canvas"] || document["mozPointerLockElement"] === Module["canvas"] || document["webkitPointerLockElement"] === Module["canvas"] || document["msPointerLockElement"] === Module["canvas"];
  }
  var canvas = Module["canvas"];
  if (canvas) {
   canvas.requestPointerLock = canvas["requestPointerLock"] || canvas["mozRequestPointerLock"] || canvas["webkitRequestPointerLock"] || canvas["msRequestPointerLock"] || function() {};
   canvas.exitPointerLock = document["exitPointerLock"] || document["mozExitPointerLock"] || document["webkitExitPointerLock"] || document["msExitPointerLock"] || function() {};
   canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
   document.addEventListener("pointerlockchange", pointerLockChange, false);
   document.addEventListener("mozpointerlockchange", pointerLockChange, false);
   document.addEventListener("webkitpointerlockchange", pointerLockChange, false);
   document.addEventListener("mspointerlockchange", pointerLockChange, false);
   if (Module["elementPointerLock"]) {
    canvas.addEventListener("click", function(ev) {
     if (!Browser.pointerLock && Module["canvas"].requestPointerLock) {
      Module["canvas"].requestPointerLock();
      ev.preventDefault();
     }
    }, false);
   }
  }
 },
 createContext: function(canvas, useWebGL, setInModule, webGLContextAttributes) {
  if (useWebGL && Module.ctx && canvas == Module.canvas) return Module.ctx;
  var ctx;
  var contextHandle;
  if (useWebGL) {
   var contextAttributes = {
    antialias: false,
    alpha: false,
    majorVersion: typeof WebGL2RenderingContext !== "undefined" ? 2 : 1
   };
   if (webGLContextAttributes) {
    for (var attribute in webGLContextAttributes) {
     contextAttributes[attribute] = webGLContextAttributes[attribute];
    }
   }
   if (typeof GL !== "undefined") {
    contextHandle = GL.createContext(canvas, contextAttributes);
    if (contextHandle) {
     ctx = GL.getContext(contextHandle).GLctx;
    }
   }
  } else {
   ctx = canvas.getContext("2d");
  }
  if (!ctx) return null;
  if (setInModule) {
   if (!useWebGL) assert(typeof GLctx === "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
   Module.ctx = ctx;
   if (useWebGL) GL.makeContextCurrent(contextHandle);
   Module.useWebGL = useWebGL;
   Browser.moduleContextCreatedCallbacks.forEach(function(callback) {
    callback();
   });
   Browser.init();
  }
  return ctx;
 },
 destroyContext: function(canvas, useWebGL, setInModule) {},
 fullscreenHandlersInstalled: false,
 lockPointer: undefined,
 resizeCanvas: undefined,
 requestFullscreen: function(lockPointer, resizeCanvas) {
  Browser.lockPointer = lockPointer;
  Browser.resizeCanvas = resizeCanvas;
  if (typeof Browser.lockPointer === "undefined") Browser.lockPointer = true;
  if (typeof Browser.resizeCanvas === "undefined") Browser.resizeCanvas = false;
  var canvas = Module["canvas"];
  function fullscreenChange() {
   Browser.isFullscreen = false;
   var canvasContainer = canvas.parentNode;
   if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvasContainer) {
    canvas.exitFullscreen = Browser.exitFullscreen;
    if (Browser.lockPointer) canvas.requestPointerLock();
    Browser.isFullscreen = true;
    if (Browser.resizeCanvas) {
     Browser.setFullscreenCanvasSize();
    } else {
     Browser.updateCanvasDimensions(canvas);
    }
   } else {
    canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
    canvasContainer.parentNode.removeChild(canvasContainer);
    if (Browser.resizeCanvas) {
     Browser.setWindowedCanvasSize();
    } else {
     Browser.updateCanvasDimensions(canvas);
    }
   }
   if (Module["onFullScreen"]) Module["onFullScreen"](Browser.isFullscreen);
   if (Module["onFullscreen"]) Module["onFullscreen"](Browser.isFullscreen);
  }
  if (!Browser.fullscreenHandlersInstalled) {
   Browser.fullscreenHandlersInstalled = true;
   document.addEventListener("fullscreenchange", fullscreenChange, false);
   document.addEventListener("mozfullscreenchange", fullscreenChange, false);
   document.addEventListener("webkitfullscreenchange", fullscreenChange, false);
   document.addEventListener("MSFullscreenChange", fullscreenChange, false);
  }
  var canvasContainer = document.createElement("div");
  canvas.parentNode.insertBefore(canvasContainer, canvas);
  canvasContainer.appendChild(canvas);
  canvasContainer.requestFullscreen = canvasContainer["requestFullscreen"] || canvasContainer["mozRequestFullScreen"] || canvasContainer["msRequestFullscreen"] || (canvasContainer["webkitRequestFullscreen"] ? function() {
   canvasContainer["webkitRequestFullscreen"](Element["ALLOW_KEYBOARD_INPUT"]);
  } : null) || (canvasContainer["webkitRequestFullScreen"] ? function() {
   canvasContainer["webkitRequestFullScreen"](Element["ALLOW_KEYBOARD_INPUT"]);
  } : null);
  canvasContainer.requestFullscreen();
 },
 requestFullScreen: function() {
  abort("Module.requestFullScreen has been replaced by Module.requestFullscreen (without a capital S)");
 },
 exitFullscreen: function() {
  if (!Browser.isFullscreen) {
   return false;
  }
  var CFS = document["exitFullscreen"] || document["cancelFullScreen"] || document["mozCancelFullScreen"] || document["msExitFullscreen"] || document["webkitCancelFullScreen"] || function() {};
  CFS.apply(document, []);
  return true;
 },
 nextRAF: 0,
 fakeRequestAnimationFrame: function(func) {
  var now = Date.now();
  if (Browser.nextRAF === 0) {
   Browser.nextRAF = now + 1e3 / 60;
  } else {
   while (now + 2 >= Browser.nextRAF) {
    Browser.nextRAF += 1e3 / 60;
   }
  }
  var delay = Math.max(Browser.nextRAF - now, 0);
  setTimeout(func, delay);
 },
 requestAnimationFrame: function(func) {
  if (typeof requestAnimationFrame === "function") {
   requestAnimationFrame(func);
   return;
  }
  var RAF = Browser.fakeRequestAnimationFrame;
  RAF(func);
 },
 safeSetTimeout: function(func) {
  return safeSetTimeout(func);
 },
 safeRequestAnimationFrame: function(func) {
  runtimeKeepalivePush();
  return Browser.requestAnimationFrame(function() {
   runtimeKeepalivePop();
   callUserCallback(func);
  });
 },
 getMimetype: function(name) {
  return {
   "jpg": "image/jpeg",
   "jpeg": "image/jpeg",
   "png": "image/png",
   "bmp": "image/bmp",
   "ogg": "audio/ogg",
   "wav": "audio/wav",
   "mp3": "audio/mpeg"
  }[name.substr(name.lastIndexOf(".") + 1)];
 },
 getUserMedia: function(func) {
  if (!window.getUserMedia) {
   window.getUserMedia = navigator["getUserMedia"] || navigator["mozGetUserMedia"];
  }
  window.getUserMedia(func);
 },
 getMovementX: function(event) {
  return event["movementX"] || event["mozMovementX"] || event["webkitMovementX"] || 0;
 },
 getMovementY: function(event) {
  return event["movementY"] || event["mozMovementY"] || event["webkitMovementY"] || 0;
 },
 getMouseWheelDelta: function(event) {
  var delta = 0;
  switch (event.type) {
  case "DOMMouseScroll":
   delta = event.detail / 3;
   break;

  case "mousewheel":
   delta = event.wheelDelta / 120;
   break;

  case "wheel":
   delta = event.deltaY;
   switch (event.deltaMode) {
   case 0:
    delta /= 100;
    break;

   case 1:
    delta /= 3;
    break;

   case 2:
    delta *= 80;
    break;

   default:
    throw "unrecognized mouse wheel delta mode: " + event.deltaMode;
   }
   break;

  default:
   throw "unrecognized mouse wheel event: " + event.type;
  }
  return delta;
 },
 mouseX: 0,
 mouseY: 0,
 mouseMovementX: 0,
 mouseMovementY: 0,
 touches: {},
 lastTouches: {},
 calculateMouseEvent: function(event) {
  if (Browser.pointerLock) {
   if (event.type != "mousemove" && "mozMovementX" in event) {
    Browser.mouseMovementX = Browser.mouseMovementY = 0;
   } else {
    Browser.mouseMovementX = Browser.getMovementX(event);
    Browser.mouseMovementY = Browser.getMovementY(event);
   }
   if (typeof SDL != "undefined") {
    Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;
    Browser.mouseY = SDL.mouseY + Browser.mouseMovementY;
   } else {
    Browser.mouseX += Browser.mouseMovementX;
    Browser.mouseY += Browser.mouseMovementY;
   }
  } else {
   var rect = Module["canvas"].getBoundingClientRect();
   var cw = Module["canvas"].width;
   var ch = Module["canvas"].height;
   var scrollX = typeof window.scrollX !== "undefined" ? window.scrollX : window.pageXOffset;
   var scrollY = typeof window.scrollY !== "undefined" ? window.scrollY : window.pageYOffset;
   assert(typeof scrollX !== "undefined" && typeof scrollY !== "undefined", "Unable to retrieve scroll position, mouse positions likely broken.");
   if (event.type === "touchstart" || event.type === "touchend" || event.type === "touchmove") {
    var touch = event.touch;
    if (touch === undefined) {
     return;
    }
    var adjustedX = touch.pageX - (scrollX + rect.left);
    var adjustedY = touch.pageY - (scrollY + rect.top);
    adjustedX = adjustedX * (cw / rect.width);
    adjustedY = adjustedY * (ch / rect.height);
    var coords = {
     x: adjustedX,
     y: adjustedY
    };
    if (event.type === "touchstart") {
     Browser.lastTouches[touch.identifier] = coords;
     Browser.touches[touch.identifier] = coords;
    } else if (event.type === "touchend" || event.type === "touchmove") {
     var last = Browser.touches[touch.identifier];
     if (!last) last = coords;
     Browser.lastTouches[touch.identifier] = last;
     Browser.touches[touch.identifier] = coords;
    }
    return;
   }
   var x = event.pageX - (scrollX + rect.left);
   var y = event.pageY - (scrollY + rect.top);
   x = x * (cw / rect.width);
   y = y * (ch / rect.height);
   Browser.mouseMovementX = x - Browser.mouseX;
   Browser.mouseMovementY = y - Browser.mouseY;
   Browser.mouseX = x;
   Browser.mouseY = y;
  }
 },
 resizeListeners: [],
 updateResizeListeners: function() {
  var canvas = Module["canvas"];
  Browser.resizeListeners.forEach(function(listener) {
   listener(canvas.width, canvas.height);
  });
 },
 setCanvasSize: function(width, height, noUpdates) {
  var canvas = Module["canvas"];
  Browser.updateCanvasDimensions(canvas, width, height);
  if (!noUpdates) Browser.updateResizeListeners();
 },
 windowedWidth: 0,
 windowedHeight: 0,
 setFullscreenCanvasSize: function() {
  if (typeof SDL != "undefined") {
   var flags = GROWABLE_HEAP_U32()[SDL.screen >> 2];
   flags = flags | 8388608;
   GROWABLE_HEAP_I32()[SDL.screen >> 2] = flags;
  }
  Browser.updateCanvasDimensions(Module["canvas"]);
  Browser.updateResizeListeners();
 },
 setWindowedCanvasSize: function() {
  if (typeof SDL != "undefined") {
   var flags = GROWABLE_HEAP_U32()[SDL.screen >> 2];
   flags = flags & ~8388608;
   GROWABLE_HEAP_I32()[SDL.screen >> 2] = flags;
  }
  Browser.updateCanvasDimensions(Module["canvas"]);
  Browser.updateResizeListeners();
 },
 updateCanvasDimensions: function(canvas, wNative, hNative) {
  if (wNative && hNative) {
   canvas.widthNative = wNative;
   canvas.heightNative = hNative;
  } else {
   wNative = canvas.widthNative;
   hNative = canvas.heightNative;
  }
  var w = wNative;
  var h = hNative;
  if (Module["forcedAspectRatio"] && Module["forcedAspectRatio"] > 0) {
   if (w / h < Module["forcedAspectRatio"]) {
    w = Math.round(h * Module["forcedAspectRatio"]);
   } else {
    h = Math.round(w / Module["forcedAspectRatio"]);
   }
  }
  if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvas.parentNode && typeof screen != "undefined") {
   var factor = Math.min(screen.width / w, screen.height / h);
   w = Math.round(w * factor);
   h = Math.round(h * factor);
  }
  if (Browser.resizeCanvas) {
   if (canvas.width != w) canvas.width = w;
   if (canvas.height != h) canvas.height = h;
   if (typeof canvas.style != "undefined") {
    canvas.style.removeProperty("width");
    canvas.style.removeProperty("height");
   }
  } else {
   if (canvas.width != wNative) canvas.width = wNative;
   if (canvas.height != hNative) canvas.height = hNative;
   if (typeof canvas.style != "undefined") {
    if (w != wNative || h != hNative) {
     canvas.style.setProperty("width", w + "px", "important");
     canvas.style.setProperty("height", h + "px", "important");
    } else {
     canvas.style.removeProperty("width");
     canvas.style.removeProperty("height");
    }
   }
  }
 }
};

function _emscripten_cancel_main_loop() {
 Browser.mainLoop.pause();
 Browser.mainLoop.func = null;
}

function _emscripten_conditional_set_current_thread_status_js(expectedStatus, newStatus) {}

function _emscripten_conditional_set_current_thread_status(expectedStatus, newStatus) {}

function _emscripten_force_exit(status) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(32, 1, status);
 noExitRuntime = false;
 runtimeKeepaliveCounter = 0;
 exit(status);
}

function _emscripten_get_heap_max() {
 return 2147483648;
}

function __webgl_enable_ANGLE_instanced_arrays(ctx) {
 var ext = ctx.getExtension("ANGLE_instanced_arrays");
 if (ext) {
  ctx["vertexAttribDivisor"] = function(index, divisor) {
   ext["vertexAttribDivisorANGLE"](index, divisor);
  };
  ctx["drawArraysInstanced"] = function(mode, first, count, primcount) {
   ext["drawArraysInstancedANGLE"](mode, first, count, primcount);
  };
  ctx["drawElementsInstanced"] = function(mode, count, type, indices, primcount) {
   ext["drawElementsInstancedANGLE"](mode, count, type, indices, primcount);
  };
  return 1;
 }
}

function __webgl_enable_OES_vertex_array_object(ctx) {
 var ext = ctx.getExtension("OES_vertex_array_object");
 if (ext) {
  ctx["createVertexArray"] = function() {
   return ext["createVertexArrayOES"]();
  };
  ctx["deleteVertexArray"] = function(vao) {
   ext["deleteVertexArrayOES"](vao);
  };
  ctx["bindVertexArray"] = function(vao) {
   ext["bindVertexArrayOES"](vao);
  };
  ctx["isVertexArray"] = function(vao) {
   return ext["isVertexArrayOES"](vao);
  };
  return 1;
 }
}

function __webgl_enable_WEBGL_draw_buffers(ctx) {
 var ext = ctx.getExtension("WEBGL_draw_buffers");
 if (ext) {
  ctx["drawBuffers"] = function(n, bufs) {
   ext["drawBuffersWEBGL"](n, bufs);
  };
  return 1;
 }
}

function __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(ctx) {
 return !!(ctx.dibvbi = ctx.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"));
}

function __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(ctx) {
 return !!(ctx.mdibvbi = ctx.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance"));
}

function __webgl_enable_WEBGL_multi_draw(ctx) {
 return !!(ctx.multiDrawWebgl = ctx.getExtension("WEBGL_multi_draw"));
}

var GL = {
 counter: 1,
 buffers: [],
 programs: [],
 framebuffers: [],
 renderbuffers: [],
 textures: [],
 shaders: [],
 vaos: [],
 contexts: {},
 offscreenCanvases: {},
 queries: [],
 samplers: [],
 transformFeedbacks: [],
 syncs: [],
 stringCache: {},
 stringiCache: {},
 unpackAlignment: 4,
 recordError: function recordError(errorCode) {
  if (!GL.lastError) {
   GL.lastError = errorCode;
  }
 },
 getNewId: function(table) {
  var ret = GL.counter++;
  for (var i = table.length; i < ret; i++) {
   table[i] = null;
  }
  return ret;
 },
 getSource: function(shader, count, string, length) {
  var source = "";
  for (var i = 0; i < count; ++i) {
   var len = length ? GROWABLE_HEAP_I32()[length + i * 4 >> 2] : -1;
   source += UTF8ToString(GROWABLE_HEAP_I32()[string + i * 4 >> 2], len < 0 ? undefined : len);
  }
  return source;
 },
 createContext: function(canvas, webGLContextAttributes) {
  if (webGLContextAttributes.renderViaOffscreenBackBuffer) webGLContextAttributes["preserveDrawingBuffer"] = true;
  var ctx = webGLContextAttributes.majorVersion > 1 ? canvas.getContext("webgl2", webGLContextAttributes) : canvas.getContext("webgl", webGLContextAttributes);
  if (!ctx) return 0;
  var handle = GL.registerContext(ctx, webGLContextAttributes);
  return handle;
 },
 enableOffscreenFramebufferAttributes: function(webGLContextAttributes) {
  webGLContextAttributes.renderViaOffscreenBackBuffer = true;
  webGLContextAttributes.preserveDrawingBuffer = true;
 },
 createOffscreenFramebuffer: function(context) {
  var gl = context.GLctx;
  var fbo = gl.createFramebuffer();
  gl.bindFramebuffer(36160, fbo);
  context.defaultFbo = fbo;
  context.defaultFboForbidBlitFramebuffer = false;
  if (gl.getContextAttributes().antialias) {
   context.defaultFboForbidBlitFramebuffer = true;
  } else {
   var firefoxMatch = navigator.userAgent.toLowerCase().match(/firefox\/(\d\d)/);
   if (firefoxMatch != null) {
    var firefoxVersion = firefoxMatch[1];
    context.defaultFboForbidBlitFramebuffer = firefoxVersion < 67;
   }
  }
  context.defaultColorTarget = gl.createTexture();
  context.defaultDepthTarget = gl.createRenderbuffer();
  GL.resizeOffscreenFramebuffer(context);
  gl.bindTexture(3553, context.defaultColorTarget);
  gl.texParameteri(3553, 10241, 9728);
  gl.texParameteri(3553, 10240, 9728);
  gl.texParameteri(3553, 10242, 33071);
  gl.texParameteri(3553, 10243, 33071);
  gl.texImage2D(3553, 0, 6408, gl.canvas.width, gl.canvas.height, 0, 6408, 5121, null);
  gl.framebufferTexture2D(36160, 36064, 3553, context.defaultColorTarget, 0);
  gl.bindTexture(3553, null);
  var depthTarget = gl.createRenderbuffer();
  gl.bindRenderbuffer(36161, context.defaultDepthTarget);
  gl.renderbufferStorage(36161, 33189, gl.canvas.width, gl.canvas.height);
  gl.framebufferRenderbuffer(36160, 36096, 36161, context.defaultDepthTarget);
  gl.bindRenderbuffer(36161, null);
  var vertices = [ -1, -1, -1, 1, 1, -1, 1, 1 ];
  var vb = gl.createBuffer();
  gl.bindBuffer(34962, vb);
  gl.bufferData(34962, new Float32Array(vertices), 35044);
  gl.bindBuffer(34962, null);
  context.blitVB = vb;
  var vsCode = "attribute vec2 pos;" + "varying lowp vec2 tex;" + "void main() { tex = pos * 0.5 + vec2(0.5,0.5); gl_Position = vec4(pos, 0.0, 1.0); }";
  var vs = gl.createShader(35633);
  gl.shaderSource(vs, vsCode);
  gl.compileShader(vs);
  var fsCode = "varying lowp vec2 tex;" + "uniform sampler2D sampler;" + "void main() { gl_FragColor = texture2D(sampler, tex); }";
  var fs = gl.createShader(35632);
  gl.shaderSource(fs, fsCode);
  gl.compileShader(fs);
  var blitProgram = gl.createProgram();
  gl.attachShader(blitProgram, vs);
  gl.attachShader(blitProgram, fs);
  gl.linkProgram(blitProgram);
  context.blitProgram = blitProgram;
  context.blitPosLoc = gl.getAttribLocation(blitProgram, "pos");
  gl.useProgram(blitProgram);
  gl.uniform1i(gl.getUniformLocation(blitProgram, "sampler"), 0);
  gl.useProgram(null);
  context.defaultVao = undefined;
  if (gl.createVertexArray) {
   context.defaultVao = gl.createVertexArray();
   gl.bindVertexArray(context.defaultVao);
   gl.enableVertexAttribArray(context.blitPosLoc);
   gl.bindVertexArray(null);
  }
 },
 resizeOffscreenFramebuffer: function(context) {
  var gl = context.GLctx;
  if (context.defaultColorTarget) {
   var prevTextureBinding = gl.getParameter(32873);
   gl.bindTexture(3553, context.defaultColorTarget);
   gl.texImage2D(3553, 0, 6408, gl.drawingBufferWidth, gl.drawingBufferHeight, 0, 6408, 5121, null);
   gl.bindTexture(3553, prevTextureBinding);
  }
  if (context.defaultDepthTarget) {
   var prevRenderBufferBinding = gl.getParameter(36007);
   gl.bindRenderbuffer(36161, context.defaultDepthTarget);
   gl.renderbufferStorage(36161, 33189, gl.drawingBufferWidth, gl.drawingBufferHeight);
   gl.bindRenderbuffer(36161, prevRenderBufferBinding);
  }
 },
 blitOffscreenFramebuffer: function(context) {
  var gl = context.GLctx;
  var prevScissorTest = gl.getParameter(3089);
  if (prevScissorTest) gl.disable(3089);
  var prevFbo = gl.getParameter(36006);
  if (gl.blitFramebuffer && !context.defaultFboForbidBlitFramebuffer) {
   gl.bindFramebuffer(36008, context.defaultFbo);
   gl.bindFramebuffer(36009, null);
   gl.blitFramebuffer(0, 0, gl.canvas.width, gl.canvas.height, 0, 0, gl.canvas.width, gl.canvas.height, 16384, 9728);
  } else {
   gl.bindFramebuffer(36160, null);
   var prevProgram = gl.getParameter(35725);
   gl.useProgram(context.blitProgram);
   var prevVB = gl.getParameter(34964);
   gl.bindBuffer(34962, context.blitVB);
   var prevActiveTexture = gl.getParameter(34016);
   gl.activeTexture(33984);
   var prevTextureBinding = gl.getParameter(32873);
   gl.bindTexture(3553, context.defaultColorTarget);
   var prevBlend = gl.getParameter(3042);
   if (prevBlend) gl.disable(3042);
   var prevCullFace = gl.getParameter(2884);
   if (prevCullFace) gl.disable(2884);
   var prevDepthTest = gl.getParameter(2929);
   if (prevDepthTest) gl.disable(2929);
   var prevStencilTest = gl.getParameter(2960);
   if (prevStencilTest) gl.disable(2960);
   function draw() {
    gl.vertexAttribPointer(context.blitPosLoc, 2, 5126, false, 0, 0);
    gl.drawArrays(5, 0, 4);
   }
   if (context.defaultVao) {
    var prevVAO = gl.getParameter(34229);
    gl.bindVertexArray(context.defaultVao);
    draw();
    gl.bindVertexArray(prevVAO);
   } else {
    var prevVertexAttribPointer = {
     buffer: gl.getVertexAttrib(context.blitPosLoc, 34975),
     size: gl.getVertexAttrib(context.blitPosLoc, 34339),
     stride: gl.getVertexAttrib(context.blitPosLoc, 34340),
     type: gl.getVertexAttrib(context.blitPosLoc, 34341),
     normalized: gl.getVertexAttrib(context.blitPosLoc, 34922),
     pointer: gl.getVertexAttribOffset(context.blitPosLoc, 34373)
    };
    var maxVertexAttribs = gl.getParameter(34921);
    var prevVertexAttribEnables = [];
    for (var i = 0; i < maxVertexAttribs; ++i) {
     var prevEnabled = gl.getVertexAttrib(i, 34338);
     var wantEnabled = i == context.blitPosLoc;
     if (prevEnabled && !wantEnabled) {
      gl.disableVertexAttribArray(i);
     }
     if (!prevEnabled && wantEnabled) {
      gl.enableVertexAttribArray(i);
     }
     prevVertexAttribEnables[i] = prevEnabled;
    }
    draw();
    for (var i = 0; i < maxVertexAttribs; ++i) {
     var prevEnabled = prevVertexAttribEnables[i];
     var nowEnabled = i == context.blitPosLoc;
     if (prevEnabled && !nowEnabled) {
      gl.enableVertexAttribArray(i);
     }
     if (!prevEnabled && nowEnabled) {
      gl.disableVertexAttribArray(i);
     }
    }
    gl.bindBuffer(34962, prevVertexAttribPointer.buffer);
    gl.vertexAttribPointer(context.blitPosLoc, prevVertexAttribPointer.size, prevVertexAttribPointer.type, prevVertexAttribPointer.normalized, prevVertexAttribPointer.stride, prevVertexAttribPointer.offset);
   }
   if (prevStencilTest) gl.enable(2960);
   if (prevDepthTest) gl.enable(2929);
   if (prevCullFace) gl.enable(2884);
   if (prevBlend) gl.enable(3042);
   gl.bindTexture(3553, prevTextureBinding);
   gl.activeTexture(prevActiveTexture);
   gl.bindBuffer(34962, prevVB);
   gl.useProgram(prevProgram);
  }
  gl.bindFramebuffer(36160, prevFbo);
  if (prevScissorTest) gl.enable(3089);
 },
 registerContext: function(ctx, webGLContextAttributes) {
  var handle = _malloc(8);
  GROWABLE_HEAP_I32()[handle + 4 >> 2] = _pthread_self();
  var context = {
   handle: handle,
   attributes: webGLContextAttributes,
   version: webGLContextAttributes.majorVersion,
   GLctx: ctx
  };
  if (ctx.canvas) ctx.canvas.GLctxObject = context;
  GL.contexts[handle] = context;
  if (typeof webGLContextAttributes.enableExtensionsByDefault === "undefined" || webGLContextAttributes.enableExtensionsByDefault) {
   GL.initExtensions(context);
  }
  if (webGLContextAttributes.renderViaOffscreenBackBuffer) GL.createOffscreenFramebuffer(context);
  return handle;
 },
 makeContextCurrent: function(contextHandle) {
  GL.currentContext = GL.contexts[contextHandle];
  Module.ctx = GLctx = GL.currentContext && GL.currentContext.GLctx;
  return !(contextHandle && !GLctx);
 },
 getContext: function(contextHandle) {
  return GL.contexts[contextHandle];
 },
 deleteContext: function(contextHandle) {
  if (GL.currentContext === GL.contexts[contextHandle]) GL.currentContext = null;
  if (typeof JSEvents === "object") JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas);
  if (GL.contexts[contextHandle] && GL.contexts[contextHandle].GLctx.canvas) GL.contexts[contextHandle].GLctx.canvas.GLctxObject = undefined;
  _free(GL.contexts[contextHandle].handle);
  GL.contexts[contextHandle] = null;
 },
 initExtensions: function(context) {
  if (!context) context = GL.currentContext;
  if (context.initExtensionsDone) return;
  context.initExtensionsDone = true;
  var GLctx = context.GLctx;
  __webgl_enable_ANGLE_instanced_arrays(GLctx);
  __webgl_enable_OES_vertex_array_object(GLctx);
  __webgl_enable_WEBGL_draw_buffers(GLctx);
  __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(GLctx);
  __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(GLctx);
  if (context.version >= 2) {
   GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query_webgl2");
  }
  if (context.version < 2 || !GLctx.disjointTimerQueryExt) {
   GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query");
  }
  __webgl_enable_WEBGL_multi_draw(GLctx);
  var exts = GLctx.getSupportedExtensions() || [];
  exts.forEach(function(ext) {
   if (!ext.includes("lose_context") && !ext.includes("debug")) {
    GLctx.getExtension(ext);
   }
  });
 }
};

function _emscripten_glActiveTexture(x0) {
 GLctx["activeTexture"](x0);
}

function _emscripten_glAttachShader(program, shader) {
 GLctx.attachShader(GL.programs[program], GL.shaders[shader]);
}

function _emscripten_glBeginTransformFeedback(x0) {
 GLctx["beginTransformFeedback"](x0);
}

function _emscripten_glBindBuffer(target, buffer) {
 if (target == 35051) {
  GLctx.currentPixelPackBufferBinding = buffer;
 } else if (target == 35052) {
  GLctx.currentPixelUnpackBufferBinding = buffer;
 }
 GLctx.bindBuffer(target, GL.buffers[buffer]);
}

function _emscripten_glBindBufferBase(target, index, buffer) {
 GLctx["bindBufferBase"](target, index, GL.buffers[buffer]);
}

function _emscripten_glBindBufferRange(target, index, buffer, offset, ptrsize) {
 GLctx["bindBufferRange"](target, index, GL.buffers[buffer], offset, ptrsize);
}

function _emscripten_glBindFramebuffer(target, framebuffer) {
 GLctx.bindFramebuffer(target, framebuffer ? GL.framebuffers[framebuffer] : GL.currentContext.defaultFbo);
}

function _emscripten_glBindRenderbuffer(target, renderbuffer) {
 GLctx.bindRenderbuffer(target, GL.renderbuffers[renderbuffer]);
}

function _emscripten_glBindTexture(target, texture) {
 GLctx.bindTexture(target, GL.textures[texture]);
}

function _emscripten_glBindVertexArray(vao) {
 GLctx["bindVertexArray"](GL.vaos[vao]);
}

function _emscripten_glBlendColor(x0, x1, x2, x3) {
 GLctx["blendColor"](x0, x1, x2, x3);
}

function _emscripten_glBlendEquation(x0) {
 GLctx["blendEquation"](x0);
}

function _emscripten_glBlendFunc(x0, x1) {
 GLctx["blendFunc"](x0, x1);
}

function _emscripten_glBlendFuncSeparate(x0, x1, x2, x3) {
 GLctx["blendFuncSeparate"](x0, x1, x2, x3);
}

function _emscripten_glBlitFramebuffer(x0, x1, x2, x3, x4, x5, x6, x7, x8, x9) {
 GLctx["blitFramebuffer"](x0, x1, x2, x3, x4, x5, x6, x7, x8, x9);
}

function _emscripten_glBufferData(target, size, data, usage) {
 if (GL.currentContext.version >= 2) {
  if (data) {
   GLctx.bufferData(target, GROWABLE_HEAP_U8(), usage, data, size);
  } else {
   GLctx.bufferData(target, size, usage);
  }
 } else {
  GLctx.bufferData(target, data ? GROWABLE_HEAP_U8().subarray(data, data + size) : size, usage);
 }
}

function _emscripten_glBufferSubData(target, offset, size, data) {
 if (GL.currentContext.version >= 2) {
  GLctx.bufferSubData(target, offset, GROWABLE_HEAP_U8(), data, size);
  return;
 }
 GLctx.bufferSubData(target, offset, GROWABLE_HEAP_U8().subarray(data, data + size));
}

function _emscripten_glCheckFramebufferStatus(x0) {
 return GLctx["checkFramebufferStatus"](x0);
}

function _emscripten_glClear(x0) {
 GLctx["clear"](x0);
}

function _emscripten_glClearBufferfv(buffer, drawbuffer, value) {
 GLctx["clearBufferfv"](buffer, drawbuffer, GROWABLE_HEAP_F32(), value >> 2);
}

function _emscripten_glClearColor(x0, x1, x2, x3) {
 GLctx["clearColor"](x0, x1, x2, x3);
}

function _emscripten_glClearDepthf(x0) {
 GLctx["clearDepth"](x0);
}

function _emscripten_glColorMask(red, green, blue, alpha) {
 GLctx.colorMask(!!red, !!green, !!blue, !!alpha);
}

function _emscripten_glCompileShader(shader) {
 GLctx.compileShader(GL.shaders[shader]);
}

function _emscripten_glCompressedTexImage2D(target, level, internalFormat, width, height, border, imageSize, data) {
 if (GL.currentContext.version >= 2) {
  if (GLctx.currentPixelUnpackBufferBinding) {
   GLctx["compressedTexImage2D"](target, level, internalFormat, width, height, border, imageSize, data);
  } else {
   GLctx["compressedTexImage2D"](target, level, internalFormat, width, height, border, GROWABLE_HEAP_U8(), data, imageSize);
  }
  return;
 }
 GLctx["compressedTexImage2D"](target, level, internalFormat, width, height, border, data ? GROWABLE_HEAP_U8().subarray(data, data + imageSize) : null);
}

function _emscripten_glCopyBufferSubData(x0, x1, x2, x3, x4) {
 GLctx["copyBufferSubData"](x0, x1, x2, x3, x4);
}

function _emscripten_glCreateProgram() {
 var id = GL.getNewId(GL.programs);
 var program = GLctx.createProgram();
 program.name = id;
 program.maxUniformLength = program.maxAttributeLength = program.maxUniformBlockNameLength = 0;
 program.uniformIdCounter = 1;
 GL.programs[id] = program;
 return id;
}

function _emscripten_glCreateShader(shaderType) {
 var id = GL.getNewId(GL.shaders);
 GL.shaders[id] = GLctx.createShader(shaderType);
 return id;
}

function _emscripten_glCullFace(x0) {
 GLctx["cullFace"](x0);
}

function _emscripten_glDeleteBuffers(n, buffers) {
 for (var i = 0; i < n; i++) {
  var id = GROWABLE_HEAP_I32()[buffers + i * 4 >> 2];
  var buffer = GL.buffers[id];
  if (!buffer) continue;
  GLctx.deleteBuffer(buffer);
  buffer.name = 0;
  GL.buffers[id] = null;
  if (id == GLctx.currentPixelPackBufferBinding) GLctx.currentPixelPackBufferBinding = 0;
  if (id == GLctx.currentPixelUnpackBufferBinding) GLctx.currentPixelUnpackBufferBinding = 0;
 }
}

function _emscripten_glDeleteFramebuffers(n, framebuffers) {
 for (var i = 0; i < n; ++i) {
  var id = GROWABLE_HEAP_I32()[framebuffers + i * 4 >> 2];
  var framebuffer = GL.framebuffers[id];
  if (!framebuffer) continue;
  GLctx.deleteFramebuffer(framebuffer);
  framebuffer.name = 0;
  GL.framebuffers[id] = null;
 }
}

function _emscripten_glDeleteProgram(id) {
 if (!id) return;
 var program = GL.programs[id];
 if (!program) {
  GL.recordError(1281);
  return;
 }
 GLctx.deleteProgram(program);
 program.name = 0;
 GL.programs[id] = null;
}

function _emscripten_glDeleteQueries(n, ids) {
 for (var i = 0; i < n; i++) {
  var id = GROWABLE_HEAP_I32()[ids + i * 4 >> 2];
  var query = GL.queries[id];
  if (!query) continue;
  GLctx["deleteQuery"](query);
  GL.queries[id] = null;
 }
}

function _emscripten_glDeleteRenderbuffers(n, renderbuffers) {
 for (var i = 0; i < n; i++) {
  var id = GROWABLE_HEAP_I32()[renderbuffers + i * 4 >> 2];
  var renderbuffer = GL.renderbuffers[id];
  if (!renderbuffer) continue;
  GLctx.deleteRenderbuffer(renderbuffer);
  renderbuffer.name = 0;
  GL.renderbuffers[id] = null;
 }
}

function _emscripten_glDeleteShader(id) {
 if (!id) return;
 var shader = GL.shaders[id];
 if (!shader) {
  GL.recordError(1281);
  return;
 }
 GLctx.deleteShader(shader);
 GL.shaders[id] = null;
}

function _emscripten_glDeleteSync(id) {
 if (!id) return;
 var sync = GL.syncs[id];
 if (!sync) {
  GL.recordError(1281);
  return;
 }
 GLctx.deleteSync(sync);
 sync.name = 0;
 GL.syncs[id] = null;
}

function _emscripten_glDeleteTextures(n, textures) {
 for (var i = 0; i < n; i++) {
  var id = GROWABLE_HEAP_I32()[textures + i * 4 >> 2];
  var texture = GL.textures[id];
  if (!texture) continue;
  GLctx.deleteTexture(texture);
  texture.name = 0;
  GL.textures[id] = null;
 }
}

function _emscripten_glDeleteVertexArrays(n, vaos) {
 for (var i = 0; i < n; i++) {
  var id = GROWABLE_HEAP_I32()[vaos + i * 4 >> 2];
  GLctx["deleteVertexArray"](GL.vaos[id]);
  GL.vaos[id] = null;
 }
}

function _emscripten_glDepthFunc(x0) {
 GLctx["depthFunc"](x0);
}

function _emscripten_glDepthMask(flag) {
 GLctx.depthMask(!!flag);
}

function _emscripten_glDisable(x0) {
 GLctx["disable"](x0);
}

function _emscripten_glDisableVertexAttribArray(index) {
 GLctx.disableVertexAttribArray(index);
}

function _emscripten_glDrawArrays(mode, first, count) {
 GLctx.drawArrays(mode, first, count);
}

function _emscripten_glDrawArraysInstanced(mode, first, count, primcount) {
 GLctx["drawArraysInstanced"](mode, first, count, primcount);
}

function _emscripten_glDrawElements(mode, count, type, indices) {
 GLctx.drawElements(mode, count, type, indices);
}

function _emscripten_glDrawElementsInstanced(mode, count, type, indices, primcount) {
 GLctx["drawElementsInstanced"](mode, count, type, indices, primcount);
}

function _emscripten_glEnable(x0) {
 GLctx["enable"](x0);
}

function _emscripten_glEnableVertexAttribArray(index) {
 GLctx.enableVertexAttribArray(index);
}

function _emscripten_glEndTransformFeedback() {
 GLctx["endTransformFeedback"]();
}

function _emscripten_glFenceSync(condition, flags) {
 var sync = GLctx.fenceSync(condition, flags);
 if (sync) {
  var id = GL.getNewId(GL.syncs);
  sync.name = id;
  GL.syncs[id] = sync;
  return id;
 } else {
  return 0;
 }
}

function _emscripten_glFinish() {
 GLctx["finish"]();
}

function _emscripten_glFramebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer) {
 GLctx.framebufferRenderbuffer(target, attachment, renderbuffertarget, GL.renderbuffers[renderbuffer]);
}

function _emscripten_glFramebufferTexture2D(target, attachment, textarget, texture, level) {
 GLctx.framebufferTexture2D(target, attachment, textarget, GL.textures[texture], level);
}

function _emscripten_glFramebufferTextureLayer(target, attachment, texture, level, layer) {
 GLctx.framebufferTextureLayer(target, attachment, GL.textures[texture], level, layer);
}

function _emscripten_glFrontFace(x0) {
 GLctx["frontFace"](x0);
}

function __glGenObject(n, buffers, createFunction, objectTable) {
 for (var i = 0; i < n; i++) {
  var buffer = GLctx[createFunction]();
  var id = buffer && GL.getNewId(objectTable);
  if (buffer) {
   buffer.name = id;
   objectTable[id] = buffer;
  } else {
   GL.recordError(1282);
  }
  GROWABLE_HEAP_I32()[buffers + i * 4 >> 2] = id;
 }
}

function _emscripten_glGenBuffers(n, buffers) {
 __glGenObject(n, buffers, "createBuffer", GL.buffers);
}

function _emscripten_glGenFramebuffers(n, ids) {
 __glGenObject(n, ids, "createFramebuffer", GL.framebuffers);
}

function _emscripten_glGenQueries(n, ids) {
 __glGenObject(n, ids, "createQuery", GL.queries);
}

function _emscripten_glGenRenderbuffers(n, renderbuffers) {
 __glGenObject(n, renderbuffers, "createRenderbuffer", GL.renderbuffers);
}

function _emscripten_glGenTextures(n, textures) {
 __glGenObject(n, textures, "createTexture", GL.textures);
}

function _emscripten_glGenVertexArrays(n, arrays) {
 __glGenObject(n, arrays, "createVertexArray", GL.vaos);
}

function _emscripten_glGenerateMipmap(x0) {
 GLctx["generateMipmap"](x0);
}

function readI53FromI64(ptr) {
 return GROWABLE_HEAP_U32()[ptr >> 2] + GROWABLE_HEAP_I32()[ptr + 4 >> 2] * 4294967296;
}

function readI53FromU64(ptr) {
 return GROWABLE_HEAP_U32()[ptr >> 2] + GROWABLE_HEAP_U32()[ptr + 4 >> 2] * 4294967296;
}

function writeI53ToI64(ptr, num) {
 GROWABLE_HEAP_U32()[ptr >> 2] = num;
 GROWABLE_HEAP_U32()[ptr + 4 >> 2] = (num - GROWABLE_HEAP_U32()[ptr >> 2]) / 4294967296;
 var deserialized = num >= 0 ? readI53FromU64(ptr) : readI53FromI64(ptr);
 if (deserialized != num) warnOnce("writeI53ToI64() out of range: serialized JS Number " + num + " to Wasm heap as bytes lo=0x" + GROWABLE_HEAP_U32()[ptr >> 2].toString(16) + ", hi=0x" + GROWABLE_HEAP_U32()[ptr + 4 >> 2].toString(16) + ", which deserializes back to " + deserialized + " instead!");
}

function emscriptenWebGLGet(name_, p, type) {
 if (!p) {
  GL.recordError(1281);
  return;
 }
 var ret = undefined;
 switch (name_) {
 case 36346:
  ret = 1;
  break;

 case 36344:
  if (type != 0 && type != 1) {
   GL.recordError(1280);
  }
  return;

 case 34814:
 case 36345:
  ret = 0;
  break;

 case 34466:
  var formats = GLctx.getParameter(34467);
  ret = formats ? formats.length : 0;
  break;

 case 33309:
  if (GL.currentContext.version < 2) {
   GL.recordError(1282);
   return;
  }
  var exts = GLctx.getSupportedExtensions() || [];
  ret = 2 * exts.length;
  break;

 case 33307:
 case 33308:
  if (GL.currentContext.version < 2) {
   GL.recordError(1280);
   return;
  }
  ret = name_ == 33307 ? 3 : 0;
  break;
 }
 if (ret === undefined) {
  var result = GLctx.getParameter(name_);
  switch (typeof result) {
  case "number":
   ret = result;
   break;

  case "boolean":
   ret = result ? 1 : 0;
   break;

  case "string":
   GL.recordError(1280);
   return;

  case "object":
   if (result === null) {
    switch (name_) {
    case 34964:
    case 35725:
    case 34965:
    case 36006:
    case 36007:
    case 32873:
    case 34229:
    case 36662:
    case 36663:
    case 35053:
    case 35055:
    case 36010:
    case 35097:
    case 35869:
    case 32874:
    case 36389:
    case 35983:
    case 35368:
    case 34068:
     {
      ret = 0;
      break;
     }

    default:
     {
      GL.recordError(1280);
      return;
     }
    }
   } else if (result instanceof Float32Array || result instanceof Uint32Array || result instanceof Int32Array || result instanceof Array) {
    for (var i = 0; i < result.length; ++i) {
     switch (type) {
     case 0:
      GROWABLE_HEAP_I32()[p + i * 4 >> 2] = result[i];
      break;

     case 2:
      GROWABLE_HEAP_F32()[p + i * 4 >> 2] = result[i];
      break;

     case 4:
      GROWABLE_HEAP_I8()[p + i >> 0] = result[i] ? 1 : 0;
      break;
     }
    }
    return;
   } else {
    try {
     ret = result.name | 0;
    } catch (e) {
     GL.recordError(1280);
     err("GL_INVALID_ENUM in glGet" + type + "v: Unknown object returned from WebGL getParameter(" + name_ + ")! (error: " + e + ")");
     return;
    }
   }
   break;

  default:
   GL.recordError(1280);
   err("GL_INVALID_ENUM in glGet" + type + "v: Native code calling glGet" + type + "v(" + name_ + ") and it returns " + result + " of type " + typeof result + "!");
   return;
  }
 }
 switch (type) {
 case 1:
  writeI53ToI64(p, ret);
  break;

 case 0:
  GROWABLE_HEAP_I32()[p >> 2] = ret;
  break;

 case 2:
  GROWABLE_HEAP_F32()[p >> 2] = ret;
  break;

 case 4:
  GROWABLE_HEAP_I8()[p >> 0] = ret ? 1 : 0;
  break;
 }
}

function _emscripten_glGetFloatv(name_, p) {
 emscriptenWebGLGet(name_, p, 2);
}

function _emscripten_glGetIntegerv(name_, p) {
 emscriptenWebGLGet(name_, p, 0);
}

function _emscripten_glGetProgramInfoLog(program, maxLength, length, infoLog) {
 var log = GLctx.getProgramInfoLog(GL.programs[program]);
 if (log === null) log = "(unknown error)";
 var numBytesWrittenExclNull = maxLength > 0 && infoLog ? stringToUTF8(log, infoLog, maxLength) : 0;
 if (length) GROWABLE_HEAP_I32()[length >> 2] = numBytesWrittenExclNull;
}

function _emscripten_glGetProgramiv(program, pname, p) {
 if (!p) {
  GL.recordError(1281);
  return;
 }
 if (program >= GL.counter) {
  GL.recordError(1281);
  return;
 }
 program = GL.programs[program];
 if (pname == 35716) {
  var log = GLctx.getProgramInfoLog(program);
  if (log === null) log = "(unknown error)";
  GROWABLE_HEAP_I32()[p >> 2] = log.length + 1;
 } else if (pname == 35719) {
  if (!program.maxUniformLength) {
   for (var i = 0; i < GLctx.getProgramParameter(program, 35718); ++i) {
    program.maxUniformLength = Math.max(program.maxUniformLength, GLctx.getActiveUniform(program, i).name.length + 1);
   }
  }
  GROWABLE_HEAP_I32()[p >> 2] = program.maxUniformLength;
 } else if (pname == 35722) {
  if (!program.maxAttributeLength) {
   for (var i = 0; i < GLctx.getProgramParameter(program, 35721); ++i) {
    program.maxAttributeLength = Math.max(program.maxAttributeLength, GLctx.getActiveAttrib(program, i).name.length + 1);
   }
  }
  GROWABLE_HEAP_I32()[p >> 2] = program.maxAttributeLength;
 } else if (pname == 35381) {
  if (!program.maxUniformBlockNameLength) {
   for (var i = 0; i < GLctx.getProgramParameter(program, 35382); ++i) {
    program.maxUniformBlockNameLength = Math.max(program.maxUniformBlockNameLength, GLctx.getActiveUniformBlockName(program, i).length + 1);
   }
  }
  GROWABLE_HEAP_I32()[p >> 2] = program.maxUniformBlockNameLength;
 } else {
  GROWABLE_HEAP_I32()[p >> 2] = GLctx.getProgramParameter(program, pname);
 }
}

function _emscripten_glGetShaderInfoLog(shader, maxLength, length, infoLog) {
 var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
 if (log === null) log = "(unknown error)";
 var numBytesWrittenExclNull = maxLength > 0 && infoLog ? stringToUTF8(log, infoLog, maxLength) : 0;
 if (length) GROWABLE_HEAP_I32()[length >> 2] = numBytesWrittenExclNull;
}

function _emscripten_glGetShaderiv(shader, pname, p) {
 if (!p) {
  GL.recordError(1281);
  return;
 }
 if (pname == 35716) {
  var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
  if (log === null) log = "(unknown error)";
  var logLength = log ? log.length + 1 : 0;
  GROWABLE_HEAP_I32()[p >> 2] = logLength;
 } else if (pname == 35720) {
  var source = GLctx.getShaderSource(GL.shaders[shader]);
  var sourceLength = source ? source.length + 1 : 0;
  GROWABLE_HEAP_I32()[p >> 2] = sourceLength;
 } else {
  GROWABLE_HEAP_I32()[p >> 2] = GLctx.getShaderParameter(GL.shaders[shader], pname);
 }
}

function stringToNewUTF8(jsString) {
 var length = lengthBytesUTF8(jsString) + 1;
 var cString = _malloc(length);
 stringToUTF8(jsString, cString, length);
 return cString;
}

function _emscripten_glGetString(name_) {
 var ret = GL.stringCache[name_];
 if (!ret) {
  switch (name_) {
  case 7939:
   var exts = GLctx.getSupportedExtensions() || [];
   exts = exts.concat(exts.map(function(e) {
    return "GL_" + e;
   }));
   ret = stringToNewUTF8(exts.join(" "));
   break;

  case 7936:
  case 7937:
  case 37445:
  case 37446:
   var s = GLctx.getParameter(name_);
   if (!s) {
    GL.recordError(1280);
   }
   ret = s && stringToNewUTF8(s);
   break;

  case 7938:
   var glVersion = GLctx.getParameter(7938);
   if (GL.currentContext.version >= 2) glVersion = "OpenGL ES 3.0 (" + glVersion + ")"; else {
    glVersion = "OpenGL ES 2.0 (" + glVersion + ")";
   }
   ret = stringToNewUTF8(glVersion);
   break;

  case 35724:
   var glslVersion = GLctx.getParameter(35724);
   var ver_re = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
   var ver_num = glslVersion.match(ver_re);
   if (ver_num !== null) {
    if (ver_num[1].length == 3) ver_num[1] = ver_num[1] + "0";
    glslVersion = "OpenGL ES GLSL ES " + ver_num[1] + " (" + glslVersion + ")";
   }
   ret = stringToNewUTF8(glslVersion);
   break;

  default:
   GL.recordError(1280);
  }
  GL.stringCache[name_] = ret;
 }
 return ret;
}

function _emscripten_glGetStringi(name, index) {
 if (GL.currentContext.version < 2) {
  GL.recordError(1282);
  return 0;
 }
 var stringiCache = GL.stringiCache[name];
 if (stringiCache) {
  if (index < 0 || index >= stringiCache.length) {
   GL.recordError(1281);
   return 0;
  }
  return stringiCache[index];
 }
 switch (name) {
 case 7939:
  var exts = GLctx.getSupportedExtensions() || [];
  exts = exts.concat(exts.map(function(e) {
   return "GL_" + e;
  }));
  exts = exts.map(function(e) {
   return stringToNewUTF8(e);
  });
  stringiCache = GL.stringiCache[name] = exts;
  if (index < 0 || index >= stringiCache.length) {
   GL.recordError(1281);
   return 0;
  }
  return stringiCache[index];

 default:
  GL.recordError(1280);
  return 0;
 }
}

function _emscripten_glGetSynciv(sync, pname, bufSize, length, values) {
 if (bufSize < 0) {
  GL.recordError(1281);
  return;
 }
 if (!values) {
  GL.recordError(1281);
  return;
 }
 var ret = GLctx.getSyncParameter(GL.syncs[sync], pname);
 if (ret !== null) {
  GROWABLE_HEAP_I32()[values >> 2] = ret;
  if (length) GROWABLE_HEAP_I32()[length >> 2] = 1;
 }
}

function _emscripten_glGetUniformBlockIndex(program, uniformBlockName) {
 return GLctx["getUniformBlockIndex"](GL.programs[program], UTF8ToString(uniformBlockName));
}

function webglGetLeftBracePos(name) {
 return name.slice(-1) == "]" && name.lastIndexOf("[");
}

function webglPrepareUniformLocationsBeforeFirstUse(program) {
 var uniformLocsById = program.uniformLocsById, uniformSizeAndIdsByName = program.uniformSizeAndIdsByName, i, j;
 if (!uniformLocsById) {
  program.uniformLocsById = uniformLocsById = {};
  program.uniformArrayNamesById = {};
  for (i = 0; i < GLctx.getProgramParameter(program, 35718); ++i) {
   var u = GLctx.getActiveUniform(program, i);
   var nm = u.name;
   var sz = u.size;
   var lb = webglGetLeftBracePos(nm);
   var arrayName = lb > 0 ? nm.slice(0, lb) : nm;
   var id = program.uniformIdCounter;
   program.uniformIdCounter += sz;
   uniformSizeAndIdsByName[arrayName] = [ sz, id ];
   for (j = 0; j < sz; ++j) {
    uniformLocsById[id] = j;
    program.uniformArrayNamesById[id++] = arrayName;
   }
  }
 }
}

function _emscripten_glGetUniformLocation(program, name) {
 name = UTF8ToString(name);
 if (program = GL.programs[program]) {
  webglPrepareUniformLocationsBeforeFirstUse(program);
  var uniformLocsById = program.uniformLocsById;
  var arrayIndex = 0;
  var uniformBaseName = name;
  var leftBrace = webglGetLeftBracePos(name);
  if (leftBrace > 0) {
   arrayIndex = jstoi_q(name.slice(leftBrace + 1)) >>> 0;
   uniformBaseName = name.slice(0, leftBrace);
  }
  var sizeAndId = program.uniformSizeAndIdsByName[uniformBaseName];
  if (sizeAndId && arrayIndex < sizeAndId[0]) {
   arrayIndex += sizeAndId[1];
   if (uniformLocsById[arrayIndex] = uniformLocsById[arrayIndex] || GLctx.getUniformLocation(program, name)) {
    return arrayIndex;
   }
  }
 } else {
  GL.recordError(1281);
 }
 return -1;
}

function _emscripten_glLinkProgram(program) {
 program = GL.programs[program];
 GLctx.linkProgram(program);
 program.uniformLocsById = 0;
 program.uniformSizeAndIdsByName = {};
}

function _emscripten_glPixelStorei(pname, param) {
 if (pname == 3317) {
  GL.unpackAlignment = param;
 }
 GLctx.pixelStorei(pname, param);
}

function _emscripten_glReadBuffer(x0) {
 GLctx["readBuffer"](x0);
}

function computeUnpackAlignedImageSize(width, height, sizePerPixel, alignment) {
 function roundedToNextMultipleOf(x, y) {
  return x + y - 1 & -y;
 }
 var plainRowSize = width * sizePerPixel;
 var alignedRowSize = roundedToNextMultipleOf(plainRowSize, alignment);
 return height * alignedRowSize;
}

function __colorChannelsInGlTextureFormat(format) {
 var colorChannels = {
  5: 3,
  6: 4,
  8: 2,
  29502: 3,
  29504: 4,
  26917: 2,
  26918: 2,
  29846: 3,
  29847: 4
 };
 return colorChannels[format - 6402] || 1;
}

function heapObjectForWebGLType(type) {
 type -= 5120;
 if (type == 0) return GROWABLE_HEAP_I8();
 if (type == 1) return GROWABLE_HEAP_U8();
 if (type == 2) return GROWABLE_HEAP_I16();
 if (type == 4) return GROWABLE_HEAP_I32();
 if (type == 6) return GROWABLE_HEAP_F32();
 if (type == 5 || type == 28922 || type == 28520 || type == 30779 || type == 30782) return GROWABLE_HEAP_U32();
 return GROWABLE_HEAP_U16();
}

function heapAccessShiftForWebGLHeap(heap) {
 return 31 - Math.clz32(heap.BYTES_PER_ELEMENT);
}

function emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) {
 var heap = heapObjectForWebGLType(type);
 var shift = heapAccessShiftForWebGLHeap(heap);
 var byteSize = 1 << shift;
 var sizePerPixel = __colorChannelsInGlTextureFormat(format) * byteSize;
 var bytes = computeUnpackAlignedImageSize(width, height, sizePerPixel, GL.unpackAlignment);
 return heap.subarray(pixels >> shift, pixels + bytes >> shift);
}

function _emscripten_glReadPixels(x, y, width, height, format, type, pixels) {
 if (GL.currentContext.version >= 2) {
  if (GLctx.currentPixelPackBufferBinding) {
   GLctx.readPixels(x, y, width, height, format, type, pixels);
  } else {
   var heap = heapObjectForWebGLType(type);
   GLctx.readPixels(x, y, width, height, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
  }
  return;
 }
 var pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, format);
 if (!pixelData) {
  GL.recordError(1280);
  return;
 }
 GLctx.readPixels(x, y, width, height, format, type, pixelData);
}

function _emscripten_glRenderbufferStorage(x0, x1, x2, x3) {
 GLctx["renderbufferStorage"](x0, x1, x2, x3);
}

function _emscripten_glScissor(x0, x1, x2, x3) {
 GLctx["scissor"](x0, x1, x2, x3);
}

function _emscripten_glShaderSource(shader, count, string, length) {
 var source = GL.getSource(shader, count, string, length);
 GLctx.shaderSource(GL.shaders[shader], source);
}

function _emscripten_glTexImage2D(target, level, internalFormat, width, height, border, format, type, pixels) {
 if (GL.currentContext.version >= 2) {
  if (GLctx.currentPixelUnpackBufferBinding) {
   GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels);
  } else if (pixels) {
   var heap = heapObjectForWebGLType(type);
   GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
  } else {
   GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, null);
  }
  return;
 }
 GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels ? emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) : null);
}

function _emscripten_glTexImage3D(target, level, internalFormat, width, height, depth, border, format, type, pixels) {
 if (GLctx.currentPixelUnpackBufferBinding) {
  GLctx["texImage3D"](target, level, internalFormat, width, height, depth, border, format, type, pixels);
 } else if (pixels) {
  var heap = heapObjectForWebGLType(type);
  GLctx["texImage3D"](target, level, internalFormat, width, height, depth, border, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
 } else {
  GLctx["texImage3D"](target, level, internalFormat, width, height, depth, border, format, type, null);
 }
}

function _emscripten_glTexParameterf(x0, x1, x2) {
 GLctx["texParameterf"](x0, x1, x2);
}

function _emscripten_glTexParameteri(x0, x1, x2) {
 GLctx["texParameteri"](x0, x1, x2);
}

function _emscripten_glTexStorage2D(x0, x1, x2, x3, x4) {
 GLctx["texStorage2D"](x0, x1, x2, x3, x4);
}

function _emscripten_glTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels) {
 if (GLctx.currentPixelUnpackBufferBinding) {
  GLctx["texSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, pixels);
 } else if (pixels) {
  var heap = heapObjectForWebGLType(type);
  GLctx["texSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, heap, pixels >> heapAccessShiftForWebGLHeap(heap));
 } else {
  GLctx["texSubImage3D"](target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, null);
 }
}

function _emscripten_glTransformFeedbackVaryings(program, count, varyings, bufferMode) {
 program = GL.programs[program];
 var vars = [];
 for (var i = 0; i < count; i++) vars.push(UTF8ToString(GROWABLE_HEAP_I32()[varyings + i * 4 >> 2]));
 GLctx["transformFeedbackVaryings"](program, vars, bufferMode);
}

function webglGetUniformLocation(location) {
 var p = GLctx.currentProgram;
 if (p) {
  var webglLoc = p.uniformLocsById[location];
  if (typeof webglLoc === "number") {
   p.uniformLocsById[location] = webglLoc = GLctx.getUniformLocation(p, p.uniformArrayNamesById[location] + (webglLoc > 0 ? "[" + webglLoc + "]" : ""));
  }
  return webglLoc;
 } else {
  GL.recordError(1282);
 }
}

function _emscripten_glUniform1f(location, v0) {
 GLctx.uniform1f(webglGetUniformLocation(location), v0);
}

function _emscripten_glUniform1i(location, v0) {
 GLctx.uniform1i(webglGetUniformLocation(location), v0);
}

function _emscripten_glUniform1ui(location, v0) {
 GLctx.uniform1ui(webglGetUniformLocation(location), v0);
}

function _emscripten_glUniform1uiv(location, count, value) {
 GLctx.uniform1uiv(webglGetUniformLocation(location), GROWABLE_HEAP_U32(), value >> 2, count);
}

function _emscripten_glUniform2f(location, v0, v1) {
 GLctx.uniform2f(webglGetUniformLocation(location), v0, v1);
}

var __miniTempWebGLIntBuffers = [];

function _emscripten_glUniform2iv(location, count, value) {
 if (GL.currentContext.version >= 2) {
  GLctx.uniform2iv(webglGetUniformLocation(location), GROWABLE_HEAP_I32(), value >> 2, count * 2);
  return;
 }
 if (count <= 144) {
  var view = __miniTempWebGLIntBuffers[2 * count - 1];
  for (var i = 0; i < 2 * count; i += 2) {
   view[i] = GROWABLE_HEAP_I32()[value + 4 * i >> 2];
   view[i + 1] = GROWABLE_HEAP_I32()[value + (4 * i + 4) >> 2];
  }
 } else {
  var view = GROWABLE_HEAP_I32().subarray(value >> 2, value + count * 8 >> 2);
 }
 GLctx.uniform2iv(webglGetUniformLocation(location), view);
}

var miniTempWebGLFloatBuffers = [];

function _emscripten_glUniform3fv(location, count, value) {
 if (GL.currentContext.version >= 2) {
  GLctx.uniform3fv(webglGetUniformLocation(location), GROWABLE_HEAP_F32(), value >> 2, count * 3);
  return;
 }
 if (count <= 96) {
  var view = miniTempWebGLFloatBuffers[3 * count - 1];
  for (var i = 0; i < 3 * count; i += 3) {
   view[i] = GROWABLE_HEAP_F32()[value + 4 * i >> 2];
   view[i + 1] = GROWABLE_HEAP_F32()[value + (4 * i + 4) >> 2];
   view[i + 2] = GROWABLE_HEAP_F32()[value + (4 * i + 8) >> 2];
  }
 } else {
  var view = GROWABLE_HEAP_F32().subarray(value >> 2, value + count * 12 >> 2);
 }
 GLctx.uniform3fv(webglGetUniformLocation(location), view);
}

function _emscripten_glUniform4f(location, v0, v1, v2, v3) {
 GLctx.uniform4f(webglGetUniformLocation(location), v0, v1, v2, v3);
}

function _emscripten_glUniform4fv(location, count, value) {
 if (GL.currentContext.version >= 2) {
  GLctx.uniform4fv(webglGetUniformLocation(location), GROWABLE_HEAP_F32(), value >> 2, count * 4);
  return;
 }
 if (count <= 72) {
  var view = miniTempWebGLFloatBuffers[4 * count - 1];
  var heap = GROWABLE_HEAP_F32();
  value >>= 2;
  for (var i = 0; i < 4 * count; i += 4) {
   var dst = value + i;
   view[i] = heap[dst];
   view[i + 1] = heap[dst + 1];
   view[i + 2] = heap[dst + 2];
   view[i + 3] = heap[dst + 3];
  }
 } else {
  var view = GROWABLE_HEAP_F32().subarray(value >> 2, value + count * 16 >> 2);
 }
 GLctx.uniform4fv(webglGetUniformLocation(location), view);
}

function _emscripten_glUniformBlockBinding(program, uniformBlockIndex, uniformBlockBinding) {
 program = GL.programs[program];
 GLctx["uniformBlockBinding"](program, uniformBlockIndex, uniformBlockBinding);
}

function _emscripten_glUniformMatrix4fv(location, count, transpose, value) {
 if (GL.currentContext.version >= 2) {
  GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, GROWABLE_HEAP_F32(), value >> 2, count * 16);
  return;
 }
 if (count <= 18) {
  var view = miniTempWebGLFloatBuffers[16 * count - 1];
  var heap = GROWABLE_HEAP_F32();
  value >>= 2;
  for (var i = 0; i < 16 * count; i += 16) {
   var dst = value + i;
   view[i] = heap[dst];
   view[i + 1] = heap[dst + 1];
   view[i + 2] = heap[dst + 2];
   view[i + 3] = heap[dst + 3];
   view[i + 4] = heap[dst + 4];
   view[i + 5] = heap[dst + 5];
   view[i + 6] = heap[dst + 6];
   view[i + 7] = heap[dst + 7];
   view[i + 8] = heap[dst + 8];
   view[i + 9] = heap[dst + 9];
   view[i + 10] = heap[dst + 10];
   view[i + 11] = heap[dst + 11];
   view[i + 12] = heap[dst + 12];
   view[i + 13] = heap[dst + 13];
   view[i + 14] = heap[dst + 14];
   view[i + 15] = heap[dst + 15];
  }
 } else {
  var view = GROWABLE_HEAP_F32().subarray(value >> 2, value + count * 64 >> 2);
 }
 GLctx.uniformMatrix4fv(webglGetUniformLocation(location), !!transpose, view);
}

function _emscripten_glUseProgram(program) {
 program = GL.programs[program];
 GLctx.useProgram(program);
 GLctx.currentProgram = program;
}

function _emscripten_glVertexAttrib4f(x0, x1, x2, x3, x4) {
 GLctx["vertexAttrib4f"](x0, x1, x2, x3, x4);
}

function _emscripten_glVertexAttribDivisor(index, divisor) {
 GLctx["vertexAttribDivisor"](index, divisor);
}

function _emscripten_glVertexAttribIPointer(index, size, type, stride, ptr) {
 GLctx["vertexAttribIPointer"](index, size, type, stride, ptr);
}

function _emscripten_glVertexAttribPointer(index, size, type, normalized, stride, ptr) {
 GLctx.vertexAttribPointer(index, size, type, !!normalized, stride, ptr);
}

function _emscripten_glViewport(x0, x1, x2, x3) {
 GLctx["viewport"](x0, x1, x2, x3);
}

function _emscripten_memcpy_big(dest, src, num) {
 GROWABLE_HEAP_U8().copyWithin(dest, src, src + num);
}

function _emscripten_num_logical_cores() {
 return navigator["hardwareConcurrency"];
}

function _emscripten_proxy_to_main_thread_js(index, sync) {
 var numCallArgs = arguments.length - 2;
 if (numCallArgs > 20 - 1) throw "emscripten_proxy_to_main_thread_js: Too many arguments " + numCallArgs + " to proxied function idx=" + index + ", maximum supported is " + (20 - 1) + "!";
 var stack = stackSave();
 var serializedNumCallArgs = numCallArgs;
 var args = stackAlloc(serializedNumCallArgs * 8);
 var b = args >> 3;
 for (var i = 0; i < numCallArgs; i++) {
  var arg = arguments[2 + i];
  GROWABLE_HEAP_F64()[b + i] = arg;
 }
 var ret = _emscripten_run_in_main_runtime_thread_js(index, serializedNumCallArgs, args, sync);
 stackRestore(stack);
 return ret;
}

var _emscripten_receive_on_main_thread_js_callArgs = [];

function _emscripten_receive_on_main_thread_js(index, numCallArgs, args) {
 _emscripten_receive_on_main_thread_js_callArgs.length = numCallArgs;
 var b = args >> 3;
 for (var i = 0; i < numCallArgs; i++) {
  _emscripten_receive_on_main_thread_js_callArgs[i] = GROWABLE_HEAP_F64()[b + i];
 }
 var isEmAsmConst = index < 0;
 var func = !isEmAsmConst ? proxiedFunctionTable[index] : ASM_CONSTS[-index - 1];
 assert(func.length == numCallArgs, "Call args mismatch in emscripten_receive_on_main_thread_js");
 return func.apply(null, _emscripten_receive_on_main_thread_js_callArgs);
}

function emscripten_realloc_buffer(size) {
 try {
  wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
  updateGlobalBufferAndViews(wasmMemory.buffer);
  return 1;
 } catch (e) {
  err("emscripten_realloc_buffer: Attempted to grow heap from " + buffer.byteLength + " bytes to " + size + " bytes, but got error: " + e);
 }
}

function _emscripten_resize_heap(requestedSize) {
 var oldSize = GROWABLE_HEAP_U8().length;
 requestedSize = requestedSize >>> 0;
 if (requestedSize <= oldSize) {
  return false;
 }
 var maxHeapSize = 2147483648;
 if (requestedSize > maxHeapSize) {
  err("Cannot enlarge memory, asked to go up to " + requestedSize + " bytes, but the limit is " + maxHeapSize + " bytes!");
  return false;
 }
 for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
  var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
  overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
  var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
  var replacement = emscripten_realloc_buffer(newSize);
  if (replacement) {
   return true;
  }
 }
 err("Failed to grow the heap from " + oldSize + " bytes to " + newSize + " bytes, not enough memory!");
 return false;
}

var JSEvents = {
 inEventHandler: 0,
 removeAllEventListeners: function() {
  for (var i = JSEvents.eventHandlers.length - 1; i >= 0; --i) {
   JSEvents._removeHandler(i);
  }
  JSEvents.eventHandlers = [];
  JSEvents.deferredCalls = [];
 },
 registerRemoveEventListeners: function() {
  if (!JSEvents.removeEventListenersRegistered) {
   __ATEXIT__.push(JSEvents.removeAllEventListeners);
   JSEvents.removeEventListenersRegistered = true;
  }
 },
 deferredCalls: [],
 deferCall: function(targetFunction, precedence, argsList) {
  function arraysHaveEqualContent(arrA, arrB) {
   if (arrA.length != arrB.length) return false;
   for (var i in arrA) {
    if (arrA[i] != arrB[i]) return false;
   }
   return true;
  }
  for (var i in JSEvents.deferredCalls) {
   var call = JSEvents.deferredCalls[i];
   if (call.targetFunction == targetFunction && arraysHaveEqualContent(call.argsList, argsList)) {
    return;
   }
  }
  JSEvents.deferredCalls.push({
   targetFunction: targetFunction,
   precedence: precedence,
   argsList: argsList
  });
  JSEvents.deferredCalls.sort(function(x, y) {
   return x.precedence < y.precedence;
  });
 },
 removeDeferredCalls: function(targetFunction) {
  for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
   if (JSEvents.deferredCalls[i].targetFunction == targetFunction) {
    JSEvents.deferredCalls.splice(i, 1);
    --i;
   }
  }
 },
 canPerformEventHandlerRequests: function() {
  return JSEvents.inEventHandler && JSEvents.currentEventHandler.allowsDeferredCalls;
 },
 runDeferredCalls: function() {
  if (!JSEvents.canPerformEventHandlerRequests()) {
   return;
  }
  for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
   var call = JSEvents.deferredCalls[i];
   JSEvents.deferredCalls.splice(i, 1);
   --i;
   call.targetFunction.apply(null, call.argsList);
  }
 },
 eventHandlers: [],
 removeAllHandlersOnTarget: function(target, eventTypeString) {
  for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
   if (JSEvents.eventHandlers[i].target == target && (!eventTypeString || eventTypeString == JSEvents.eventHandlers[i].eventTypeString)) {
    JSEvents._removeHandler(i--);
   }
  }
 },
 _removeHandler: function(i) {
  var h = JSEvents.eventHandlers[i];
  h.target.removeEventListener(h.eventTypeString, h.eventListenerFunc, h.useCapture);
  JSEvents.eventHandlers.splice(i, 1);
 },
 registerOrRemoveHandler: function(eventHandler) {
  var jsEventHandler = function jsEventHandler(event) {
   ++JSEvents.inEventHandler;
   JSEvents.currentEventHandler = eventHandler;
   JSEvents.runDeferredCalls();
   eventHandler.handlerFunc(event);
   JSEvents.runDeferredCalls();
   --JSEvents.inEventHandler;
  };
  if (eventHandler.callbackfunc) {
   eventHandler.eventListenerFunc = jsEventHandler;
   eventHandler.target.addEventListener(eventHandler.eventTypeString, jsEventHandler, eventHandler.useCapture);
   JSEvents.eventHandlers.push(eventHandler);
   JSEvents.registerRemoveEventListeners();
  } else {
   for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
    if (JSEvents.eventHandlers[i].target == eventHandler.target && JSEvents.eventHandlers[i].eventTypeString == eventHandler.eventTypeString) {
     JSEvents._removeHandler(i--);
    }
   }
  }
 },
 queueEventHandlerOnThread_iiii: function(targetThread, eventHandlerFunc, eventTypeId, eventData, userData) {
  var stackTop = stackSave();
  var varargs = stackAlloc(12);
  GROWABLE_HEAP_I32()[varargs >> 2] = eventTypeId;
  GROWABLE_HEAP_I32()[varargs + 4 >> 2] = eventData;
  GROWABLE_HEAP_I32()[varargs + 8 >> 2] = userData;
  __emscripten_call_on_thread(0, targetThread, 637534208, eventHandlerFunc, eventData, varargs);
  stackRestore(stackTop);
 },
 getTargetThreadForEventCallback: function(targetThread) {
  switch (targetThread) {
  case 1:
   return 0;

  case 2:
   return PThread.currentProxiedOperationCallerThread;

  default:
   return targetThread;
  }
 },
 getNodeNameForTarget: function(target) {
  if (!target) return "";
  if (target == window) return "#window";
  if (target == screen) return "#screen";
  return target && target.nodeName ? target.nodeName : "";
 },
 fullscreenEnabled: function() {
  return document.fullscreenEnabled || document.webkitFullscreenEnabled;
 }
};

function _emscripten_set_offscreencanvas_size_on_target_thread_js(targetThread, targetCanvas, width, height) {
 var stackTop = stackSave();
 var varargs = stackAlloc(12);
 var targetCanvasPtr = 0;
 if (targetCanvas) {
  targetCanvasPtr = stringToNewUTF8(targetCanvas);
 }
 GROWABLE_HEAP_I32()[varargs >> 2] = targetCanvasPtr;
 GROWABLE_HEAP_I32()[varargs + 4 >> 2] = width;
 GROWABLE_HEAP_I32()[varargs + 8 >> 2] = height;
 __emscripten_call_on_thread(0, targetThread, 657457152, 0, targetCanvasPtr, varargs);
 stackRestore(stackTop);
}

function _emscripten_set_offscreencanvas_size_on_target_thread(targetThread, targetCanvas, width, height) {
 targetCanvas = targetCanvas ? UTF8ToString(targetCanvas) : "";
 _emscripten_set_offscreencanvas_size_on_target_thread_js(targetThread, targetCanvas, width, height);
}

function maybeCStringToJsString(cString) {
 return cString > 2 ? UTF8ToString(cString) : cString;
}

var specialHTMLTargets = [ 0, typeof document !== "undefined" ? document : 0, typeof window !== "undefined" ? window : 0 ];

function findEventTarget(target) {
 target = maybeCStringToJsString(target);
 var domElement = specialHTMLTargets[target] || (typeof document !== "undefined" ? document.querySelector(target) : undefined);
 return domElement;
}

function findCanvasEventTarget(target) {
 return findEventTarget(target);
}

function _emscripten_set_canvas_element_size_calling_thread(target, width, height) {
 var canvas = findCanvasEventTarget(target);
 if (!canvas) return -4;
 if (canvas.canvasSharedPtr) {
  GROWABLE_HEAP_I32()[canvas.canvasSharedPtr >> 2] = width;
  GROWABLE_HEAP_I32()[canvas.canvasSharedPtr + 4 >> 2] = height;
 }
 if (canvas.offscreenCanvas || !canvas.controlTransferredOffscreen) {
  if (canvas.offscreenCanvas) canvas = canvas.offscreenCanvas;
  var autoResizeViewport = false;
  if (canvas.GLctxObject && canvas.GLctxObject.GLctx) {
   var prevViewport = canvas.GLctxObject.GLctx.getParameter(2978);
   autoResizeViewport = prevViewport[0] === 0 && prevViewport[1] === 0 && prevViewport[2] === canvas.width && prevViewport[3] === canvas.height;
  }
  canvas.width = width;
  canvas.height = height;
  if (autoResizeViewport) {
   canvas.GLctxObject.GLctx.viewport(0, 0, width, height);
  }
 } else if (canvas.canvasSharedPtr) {
  var targetThread = GROWABLE_HEAP_I32()[canvas.canvasSharedPtr + 8 >> 2];
  _emscripten_set_offscreencanvas_size_on_target_thread(targetThread, target, width, height);
  return 1;
 } else {
  return -4;
 }
 if (canvas.GLctxObject) GL.resizeOffscreenFramebuffer(canvas.GLctxObject);
 return 0;
}

function _emscripten_set_canvas_element_size_main_thread(target, width, height) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(33, 1, target, width, height);
 return _emscripten_set_canvas_element_size_calling_thread(target, width, height);
}

function _emscripten_set_canvas_element_size(target, width, height) {
 var canvas = findCanvasEventTarget(target);
 if (canvas) {
  return _emscripten_set_canvas_element_size_calling_thread(target, width, height);
 } else {
  return _emscripten_set_canvas_element_size_main_thread(target, width, height);
 }
}

function _emscripten_set_current_thread_status_js(newStatus) {}

function _emscripten_set_current_thread_status(newStatus) {}

function _emscripten_set_main_loop(func, fps, simulateInfiniteLoop) {
 var browserIterationFunc = wasmTable.get(func);
 setMainLoop(browserIterationFunc, fps, simulateInfiniteLoop);
}

function _emscripten_set_timeout(cb, msecs, userData) {
 runtimeKeepalivePush();
 return setTimeout(function() {
  runtimeKeepalivePop();
  callUserCallback(function() {
   wasmTable.get(cb)(userData);
  });
 }, msecs);
}

function _emscripten_supports_offscreencanvas() {
 return 0;
}

function _emscripten_unwind_to_js_event_loop() {
 throw "unwind";
}

function _emscripten_webgl_destroy_context(contextHandle) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(34, 1, contextHandle);
 if (GL.currentContext == contextHandle) GL.currentContext = 0;
 GL.deleteContext(contextHandle);
}

function _emscripten_webgl_do_commit_frame() {
 if (!GL.currentContext || !GL.currentContext.GLctx) {
  return -3;
 }
 if (GL.currentContext.defaultFbo) {
  GL.blitOffscreenFramebuffer(GL.currentContext);
  return 0;
 }
 if (!GL.currentContext.attributes.explicitSwapControl) {
  return -3;
 }
 return 0;
}

var __emscripten_webgl_power_preferences = [ "default", "low-power", "high-performance" ];

function _emscripten_webgl_do_create_context(target, attributes) {
 assert(attributes);
 var a = attributes >> 2;
 var powerPreference = GROWABLE_HEAP_I32()[a + (24 >> 2)];
 var contextAttributes = {
  "alpha": !!GROWABLE_HEAP_I32()[a + (0 >> 2)],
  "depth": !!GROWABLE_HEAP_I32()[a + (4 >> 2)],
  "stencil": !!GROWABLE_HEAP_I32()[a + (8 >> 2)],
  "antialias": !!GROWABLE_HEAP_I32()[a + (12 >> 2)],
  "premultipliedAlpha": !!GROWABLE_HEAP_I32()[a + (16 >> 2)],
  "preserveDrawingBuffer": !!GROWABLE_HEAP_I32()[a + (20 >> 2)],
  "powerPreference": __emscripten_webgl_power_preferences[powerPreference],
  "failIfMajorPerformanceCaveat": !!GROWABLE_HEAP_I32()[a + (28 >> 2)],
  majorVersion: GROWABLE_HEAP_I32()[a + (32 >> 2)],
  minorVersion: GROWABLE_HEAP_I32()[a + (36 >> 2)],
  enableExtensionsByDefault: GROWABLE_HEAP_I32()[a + (40 >> 2)],
  explicitSwapControl: GROWABLE_HEAP_I32()[a + (44 >> 2)],
  proxyContextToMainThread: GROWABLE_HEAP_I32()[a + (48 >> 2)],
  renderViaOffscreenBackBuffer: GROWABLE_HEAP_I32()[a + (52 >> 2)]
 };
 var canvas = findCanvasEventTarget(target);
 if (ENVIRONMENT_IS_PTHREAD) {
  if (contextAttributes.proxyContextToMainThread === 2 || !canvas && contextAttributes.proxyContextToMainThread === 1) {
   if (typeof OffscreenCanvas === "undefined") {
    GROWABLE_HEAP_I32()[attributes + 52 >> 2] = 1;
    GROWABLE_HEAP_I32()[attributes + 20 >> 2] = 1;
   }
   return _emscripten_sync_run_in_main_thread_2(622854144, target, attributes);
  }
 }
 if (!canvas) {
  return 0;
 }
 if (contextAttributes.explicitSwapControl && !contextAttributes.renderViaOffscreenBackBuffer) {
  contextAttributes.renderViaOffscreenBackBuffer = true;
 }
 var contextHandle = GL.createContext(canvas, contextAttributes);
 return contextHandle;
}

function _emscripten_webgl_enable_extension(contextHandle, extension) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(35, 1, contextHandle, extension);
 var context = GL.getContext(contextHandle);
 var extString = UTF8ToString(extension);
 if (extString.startsWith("GL_")) extString = extString.substr(3);
 if (extString == "ANGLE_instanced_arrays") __webgl_enable_ANGLE_instanced_arrays(GLctx);
 if (extString == "OES_vertex_array_object") __webgl_enable_OES_vertex_array_object(GLctx);
 if (extString == "WEBGL_draw_buffers") __webgl_enable_WEBGL_draw_buffers(GLctx);
 if (extString == "WEBGL_draw_instanced_base_vertex_base_instance") __webgl_enable_WEBGL_draw_instanced_base_vertex_base_instance(GLctx);
 if (extString == "WEBGL_multi_draw_instanced_base_vertex_base_instance") __webgl_enable_WEBGL_multi_draw_instanced_base_vertex_base_instance(GLctx);
 if (extString == "WEBGL_multi_draw") __webgl_enable_WEBGL_multi_draw(GLctx);
 var ext = context.GLctx.getExtension(extString);
 return !!ext;
}

function _emscripten_webgl_init_context_attributes(attributes) {
 assert(attributes);
 var a = attributes >> 2;
 for (var i = 0; i < 56 >> 2; ++i) {
  GROWABLE_HEAP_I32()[a + i] = 0;
 }
 GROWABLE_HEAP_I32()[a + (0 >> 2)] = GROWABLE_HEAP_I32()[a + (4 >> 2)] = GROWABLE_HEAP_I32()[a + (12 >> 2)] = GROWABLE_HEAP_I32()[a + (16 >> 2)] = GROWABLE_HEAP_I32()[a + (32 >> 2)] = GROWABLE_HEAP_I32()[a + (40 >> 2)] = 1;
 if (ENVIRONMENT_IS_WORKER) GROWABLE_HEAP_I32()[attributes + 48 >> 2] = 1;
}

function _emscripten_webgl_make_context_current_calling_thread(contextHandle) {
 var success = GL.makeContextCurrent(contextHandle);
 if (success) GL.currentContextIsProxied = false;
 return success ? 0 : -5;
}

var ENV = {};

function getExecutableName() {
 return thisProgram || "./this.program";
}

function getEnvStrings() {
 if (!getEnvStrings.strings) {
  var lang = (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8";
  var env = {
   "USER": "web_user",
   "LOGNAME": "web_user",
   "PATH": "/",
   "PWD": "/",
   "HOME": "/home/web_user",
   "LANG": lang,
   "_": getExecutableName()
  };
  for (var x in ENV) {
   if (ENV[x] === undefined) delete env[x]; else env[x] = ENV[x];
  }
  var strings = [];
  for (var x in env) {
   strings.push(x + "=" + env[x]);
  }
  getEnvStrings.strings = strings;
 }
 return getEnvStrings.strings;
}

function _environ_get(__environ, environ_buf) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(36, 1, __environ, environ_buf);
 var bufSize = 0;
 getEnvStrings().forEach(function(string, i) {
  var ptr = environ_buf + bufSize;
  GROWABLE_HEAP_I32()[__environ + i * 4 >> 2] = ptr;
  writeAsciiToMemory(string, ptr);
  bufSize += string.length + 1;
 });
 return 0;
}

function _environ_sizes_get(penviron_count, penviron_buf_size) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(37, 1, penviron_count, penviron_buf_size);
 var strings = getEnvStrings();
 GROWABLE_HEAP_I32()[penviron_count >> 2] = strings.length;
 var bufSize = 0;
 strings.forEach(function(string) {
  bufSize += string.length + 1;
 });
 GROWABLE_HEAP_I32()[penviron_buf_size >> 2] = bufSize;
 return 0;
}

function _fd_close(fd) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(38, 1, fd);
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  FS.close(stream);
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return e.errno;
 }
}

function _fd_fdstat_get(fd, pbuf) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(39, 1, fd, pbuf);
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  var type = stream.tty ? 2 : FS.isDir(stream.mode) ? 3 : FS.isLink(stream.mode) ? 7 : 4;
  GROWABLE_HEAP_I8()[pbuf >> 0] = type;
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return e.errno;
 }
}

function _fd_read(fd, iov, iovcnt, pnum) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(40, 1, fd, iov, iovcnt, pnum);
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  var num = SYSCALLS.doReadv(stream, iov, iovcnt);
  GROWABLE_HEAP_I32()[pnum >> 2] = num;
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return e.errno;
 }
}

function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(41, 1, fd, offset_low, offset_high, whence, newOffset);
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  var HIGH_OFFSET = 4294967296;
  var offset = offset_high * HIGH_OFFSET + (offset_low >>> 0);
  var DOUBLE_LIMIT = 9007199254740992;
  if (offset <= -DOUBLE_LIMIT || offset >= DOUBLE_LIMIT) {
   return -61;
  }
  FS.llseek(stream, offset, whence);
  tempI64 = [ stream.position >>> 0, (tempDouble = stream.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math.min(+Math.floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0) ], 
  GROWABLE_HEAP_I32()[newOffset >> 2] = tempI64[0], GROWABLE_HEAP_I32()[newOffset + 4 >> 2] = tempI64[1];
  if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return e.errno;
 }
}

function _fd_write(fd, iov, iovcnt, pnum) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(42, 1, fd, iov, iovcnt, pnum);
 try {
  var stream = SYSCALLS.getStreamFromFD(fd);
  var num = SYSCALLS.doWritev(stream, iov, iovcnt);
  GROWABLE_HEAP_I32()[pnum >> 2] = num;
  return 0;
 } catch (e) {
  if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError)) abort(e);
  return e.errno;
 }
}

var GAI_ERRNO_MESSAGES = {};

function _gai_strerror(val) {
 var buflen = 256;
 if (!_gai_strerror.buffer) {
  _gai_strerror.buffer = _malloc(buflen);
  GAI_ERRNO_MESSAGES["0"] = "Success";
  GAI_ERRNO_MESSAGES["" + -1] = "Invalid value for 'ai_flags' field";
  GAI_ERRNO_MESSAGES["" + -2] = "NAME or SERVICE is unknown";
  GAI_ERRNO_MESSAGES["" + -3] = "Temporary failure in name resolution";
  GAI_ERRNO_MESSAGES["" + -4] = "Non-recoverable failure in name res";
  GAI_ERRNO_MESSAGES["" + -6] = "'ai_family' not supported";
  GAI_ERRNO_MESSAGES["" + -7] = "'ai_socktype' not supported";
  GAI_ERRNO_MESSAGES["" + -8] = "SERVICE not supported for 'ai_socktype'";
  GAI_ERRNO_MESSAGES["" + -10] = "Memory allocation failure";
  GAI_ERRNO_MESSAGES["" + -11] = "System error returned in 'errno'";
  GAI_ERRNO_MESSAGES["" + -12] = "Argument buffer overflow";
 }
 var msg = "Unknown error";
 if (val in GAI_ERRNO_MESSAGES) {
  if (GAI_ERRNO_MESSAGES[val].length > buflen - 1) {
   msg = "Message too long";
  } else {
   msg = GAI_ERRNO_MESSAGES[val];
  }
 }
 writeAsciiToMemory(msg, _gai_strerror.buffer);
 return _gai_strerror.buffer;
}

function _getTempRet0() {
 return getTempRet0();
}

function _getaddrinfo(node, service, hint, out) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(43, 1, node, service, hint, out);
 var addrs = [];
 var canon = null;
 var addr = 0;
 var port = 0;
 var flags = 0;
 var family = 0;
 var type = 0;
 var proto = 0;
 var ai, last;
 function allocaddrinfo(family, type, proto, canon, addr, port) {
  var sa, salen, ai;
  var errno;
  salen = family === 10 ? 28 : 16;
  addr = family === 10 ? inetNtop6(addr) : inetNtop4(addr);
  sa = _malloc(salen);
  errno = writeSockaddr(sa, family, addr, port);
  assert(!errno);
  ai = _malloc(32);
  GROWABLE_HEAP_I32()[ai + 4 >> 2] = family;
  GROWABLE_HEAP_I32()[ai + 8 >> 2] = type;
  GROWABLE_HEAP_I32()[ai + 12 >> 2] = proto;
  GROWABLE_HEAP_I32()[ai + 24 >> 2] = canon;
  GROWABLE_HEAP_I32()[ai + 20 >> 2] = sa;
  if (family === 10) {
   GROWABLE_HEAP_I32()[ai + 16 >> 2] = 28;
  } else {
   GROWABLE_HEAP_I32()[ai + 16 >> 2] = 16;
  }
  GROWABLE_HEAP_I32()[ai + 28 >> 2] = 0;
  return ai;
 }
 if (hint) {
  flags = GROWABLE_HEAP_I32()[hint >> 2];
  family = GROWABLE_HEAP_I32()[hint + 4 >> 2];
  type = GROWABLE_HEAP_I32()[hint + 8 >> 2];
  proto = GROWABLE_HEAP_I32()[hint + 12 >> 2];
 }
 if (type && !proto) {
  proto = type === 2 ? 17 : 6;
 }
 if (!type && proto) {
  type = proto === 17 ? 2 : 1;
 }
 if (proto === 0) {
  proto = 6;
 }
 if (type === 0) {
  type = 1;
 }
 if (!node && !service) {
  return -2;
 }
 if (flags & ~(1 | 2 | 4 | 1024 | 8 | 16 | 32)) {
  return -1;
 }
 if (hint !== 0 && GROWABLE_HEAP_I32()[hint >> 2] & 2 && !node) {
  return -1;
 }
 if (flags & 32) {
  return -2;
 }
 if (type !== 0 && type !== 1 && type !== 2) {
  return -7;
 }
 if (family !== 0 && family !== 2 && family !== 10) {
  return -6;
 }
 if (service) {
  service = UTF8ToString(service);
  port = parseInt(service, 10);
  if (isNaN(port)) {
   if (flags & 1024) {
    return -2;
   }
   return -8;
  }
 }
 if (!node) {
  if (family === 0) {
   family = 2;
  }
  if ((flags & 1) === 0) {
   if (family === 2) {
    addr = _htonl(2130706433);
   } else {
    addr = [ 0, 0, 0, 1 ];
   }
  }
  ai = allocaddrinfo(family, type, proto, null, addr, port);
  GROWABLE_HEAP_I32()[out >> 2] = ai;
  return 0;
 }
 node = UTF8ToString(node);
 addr = inetPton4(node);
 if (addr !== null) {
  if (family === 0 || family === 2) {
   family = 2;
  } else if (family === 10 && flags & 8) {
   addr = [ 0, 0, _htonl(65535), addr ];
   family = 10;
  } else {
   return -2;
  }
 } else {
  addr = inetPton6(node);
  if (addr !== null) {
   if (family === 0 || family === 10) {
    family = 10;
   } else {
    return -2;
   }
  }
 }
 if (addr != null) {
  ai = allocaddrinfo(family, type, proto, node, addr, port);
  GROWABLE_HEAP_I32()[out >> 2] = ai;
  return 0;
 }
 if (flags & 4) {
  return -2;
 }
 node = DNS.lookup_name(node);
 addr = inetPton4(node);
 if (family === 0) {
  family = 2;
 } else if (family === 10) {
  addr = [ 0, 0, _htonl(65535), addr ];
 }
 ai = allocaddrinfo(family, type, proto, null, addr, port);
 GROWABLE_HEAP_I32()[out >> 2] = ai;
 return 0;
}

function _getnameinfo(sa, salen, node, nodelen, serv, servlen, flags) {
 var info = readSockaddr(sa, salen);
 if (info.errno) {
  return -6;
 }
 var port = info.port;
 var addr = info.addr;
 var overflowed = false;
 if (node && nodelen) {
  var lookup;
  if (flags & 1 || !(lookup = DNS.lookup_addr(addr))) {
   if (flags & 8) {
    return -2;
   }
  } else {
   addr = lookup;
  }
  var numBytesWrittenExclNull = stringToUTF8(addr, node, nodelen);
  if (numBytesWrittenExclNull + 1 >= nodelen) {
   overflowed = true;
  }
 }
 if (serv && servlen) {
  port = "" + port;
  var numBytesWrittenExclNull = stringToUTF8(port, serv, servlen);
  if (numBytesWrittenExclNull + 1 >= servlen) {
   overflowed = true;
  }
 }
 if (overflowed) {
  return -12;
 }
 return 0;
}

function _gettimeofday(ptr) {
 var now = Date.now();
 GROWABLE_HEAP_I32()[ptr >> 2] = now / 1e3 | 0;
 GROWABLE_HEAP_I32()[ptr + 4 >> 2] = now % 1e3 * 1e3 | 0;
 return 0;
}

function _glGetBufferSubData(target, offset, size, data) {
 if (!data) {
  GL.recordError(1281);
  return;
 }
 GLctx["getBufferSubData"](target, offset, GROWABLE_HEAP_U8(), data, size);
}

function _gmtime_r(time, tmPtr) {
 var date = new Date(GROWABLE_HEAP_I32()[time >> 2] * 1e3);
 GROWABLE_HEAP_I32()[tmPtr >> 2] = date.getUTCSeconds();
 GROWABLE_HEAP_I32()[tmPtr + 4 >> 2] = date.getUTCMinutes();
 GROWABLE_HEAP_I32()[tmPtr + 8 >> 2] = date.getUTCHours();
 GROWABLE_HEAP_I32()[tmPtr + 12 >> 2] = date.getUTCDate();
 GROWABLE_HEAP_I32()[tmPtr + 16 >> 2] = date.getUTCMonth();
 GROWABLE_HEAP_I32()[tmPtr + 20 >> 2] = date.getUTCFullYear() - 1900;
 GROWABLE_HEAP_I32()[tmPtr + 24 >> 2] = date.getUTCDay();
 GROWABLE_HEAP_I32()[tmPtr + 36 >> 2] = 0;
 GROWABLE_HEAP_I32()[tmPtr + 32 >> 2] = 0;
 var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
 var yday = (date.getTime() - start) / (1e3 * 60 * 60 * 24) | 0;
 GROWABLE_HEAP_I32()[tmPtr + 28 >> 2] = yday;
 if (!_gmtime_r.GMTString) _gmtime_r.GMTString = allocateUTF8("GMT");
 GROWABLE_HEAP_I32()[tmPtr + 40 >> 2] = _gmtime_r.GMTString;
 return tmPtr;
}

var GodotRuntime = {
 get_func: function(ptr) {
  return wasmTable.get(ptr);
 },
 error: function() {
  err.apply(null, Array.from(arguments));
 },
 print: function() {
  out.apply(null, Array.from(arguments));
 },
 malloc: function(p_size) {
  return _malloc(p_size);
 },
 free: function(p_ptr) {
  _free(p_ptr);
 },
 getHeapValue: function(p_ptr, p_type) {
  return getValue(p_ptr, p_type);
 },
 setHeapValue: function(p_ptr, p_value, p_type) {
  setValue(p_ptr, p_value, p_type);
 },
 heapSub: function(p_heap, p_ptr, p_len) {
  const bytes = p_heap.BYTES_PER_ELEMENT;
  return p_heap.subarray(p_ptr / bytes, p_ptr / bytes + p_len);
 },
 heapSlice: function(p_heap, p_ptr, p_len) {
  const bytes = p_heap.BYTES_PER_ELEMENT;
  return p_heap.slice(p_ptr / bytes, p_ptr / bytes + p_len);
 },
 heapCopy: function(p_dst, p_src, p_ptr) {
  const bytes = p_src.BYTES_PER_ELEMENT;
  return p_dst.set(p_src, p_ptr / bytes);
 },
 parseString: function(p_ptr) {
  return UTF8ToString(p_ptr);
 },
 parseStringArray: function(p_ptr, p_size) {
  const strings = [];
  const ptrs = GodotRuntime.heapSub(GROWABLE_HEAP_I32(), p_ptr, p_size);
  ptrs.forEach(function(ptr) {
   strings.push(GodotRuntime.parseString(ptr));
  });
  return strings;
 },
 strlen: function(p_str) {
  return lengthBytesUTF8(p_str);
 },
 allocString: function(p_str) {
  const length = GodotRuntime.strlen(p_str) + 1;
  const c_str = GodotRuntime.malloc(length);
  stringToUTF8(p_str, c_str, length);
  return c_str;
 },
 allocStringArray: function(p_strings) {
  const size = p_strings.length;
  const c_ptr = GodotRuntime.malloc(size * 4);
  for (let i = 0; i < size; i++) {
   GROWABLE_HEAP_I32()[(c_ptr >> 2) + i] = GodotRuntime.allocString(p_strings[i]);
  }
  return c_ptr;
 },
 freeStringArray: function(p_ptr, p_len) {
  for (let i = 0; i < p_len; i++) {
   GodotRuntime.free(GROWABLE_HEAP_I32()[(p_ptr >> 2) + i]);
  }
  GodotRuntime.free(p_ptr);
 },
 stringToHeap: function(p_str, p_ptr, p_len) {
  return stringToUTF8Array(p_str, GROWABLE_HEAP_I8(), p_ptr, p_len);
 }
};

var GodotConfig = {
 canvas: null,
 locale: "en",
 canvas_resize_policy: 2,
 virtual_keyboard: false,
 persistent_drops: false,
 on_execute: null,
 on_exit: null,
 init_config: function(p_opts) {
  GodotConfig.canvas_resize_policy = p_opts["canvasResizePolicy"];
  GodotConfig.canvas = p_opts["canvas"];
  GodotConfig.locale = p_opts["locale"] || GodotConfig.locale;
  GodotConfig.virtual_keyboard = p_opts["virtualKeyboard"];
  GodotConfig.persistent_drops = !!p_opts["persistentDrops"];
  GodotConfig.on_execute = p_opts["onExecute"];
  GodotConfig.on_exit = p_opts["onExit"];
  if (p_opts["focusCanvas"]) {
   GodotConfig.canvas.focus();
  }
 },
 locate_file: function(file) {
  return Module["locateFile"](file);
 },
 clear: function() {
  GodotConfig.canvas = null;
  GodotConfig.locale = "en";
  GodotConfig.canvas_resize_policy = 2;
  GodotConfig.virtual_keyboard = false;
  GodotConfig.persistent_drops = false;
  GodotConfig.on_execute = null;
  GodotConfig.on_exit = null;
 }
};

var GodotFS = {
 ENOENT: 44,
 _idbfs: false,
 _syncing: false,
 _mount_points: [],
 is_persistent: function() {
  return GodotFS._idbfs ? 1 : 0;
 },
 init: function(persistentPaths) {
  GodotFS._idbfs = false;
  if (!Array.isArray(persistentPaths)) {
   return Promise.reject(new Error("Persistent paths must be an array"));
  }
  if (!persistentPaths.length) {
   return Promise.resolve();
  }
  GodotFS._mount_points = persistentPaths.slice();
  function createRecursive(dir) {
   try {
    FS.stat(dir);
   } catch (e) {
    if (e.errno !== GodotFS.ENOENT) {
     GodotRuntime.error(e);
    }
    FS.mkdirTree(dir);
   }
  }
  GodotFS._mount_points.forEach(function(path) {
   createRecursive(path);
   FS.mount(IDBFS, {}, path);
  });
  return new Promise(function(resolve, reject) {
   FS.syncfs(true, function(err) {
    if (err) {
     GodotFS._mount_points = [];
     GodotFS._idbfs = false;
     GodotRuntime.print(`IndexedDB not available: ${err.message}`);
    } else {
     GodotFS._idbfs = true;
    }
    resolve(err);
   });
  });
 },
 deinit: function() {
  GodotFS._mount_points.forEach(function(path) {
   try {
    FS.unmount(path);
   } catch (e) {
    GodotRuntime.print("Already unmounted", e);
   }
   if (GodotFS._idbfs && IDBFS.dbs[path]) {
    IDBFS.dbs[path].close();
    delete IDBFS.dbs[path];
   }
  });
  GodotFS._mount_points = [];
  GodotFS._idbfs = false;
  GodotFS._syncing = false;
 },
 sync: function() {
  if (GodotFS._syncing) {
   GodotRuntime.error("Already syncing!");
   return Promise.resolve();
  }
  GodotFS._syncing = true;
  return new Promise(function(resolve, reject) {
   FS.syncfs(false, function(error) {
    if (error) {
     GodotRuntime.error(`Failed to save IDB file system: ${error.message}`);
    }
    GodotFS._syncing = false;
    resolve(error);
   });
  });
 },
 copy_to_fs: function(path, buffer) {
  const idx = path.lastIndexOf("/");
  let dir = "/";
  if (idx > 0) {
   dir = path.slice(0, idx);
  }
  try {
   FS.stat(dir);
  } catch (e) {
   if (e.errno !== GodotFS.ENOENT) {
    GodotRuntime.error(e);
   }
   FS.mkdirTree(dir);
  }
  FS.writeFile(path, new Uint8Array(buffer));
 }
};

var GodotOS = {
 request_quit: function() {},
 _async_cbs: [],
 _fs_sync_promise: null,
 atexit: function(p_promise_cb) {
  GodotOS._async_cbs.push(p_promise_cb);
 },
 cleanup: function(exit_code) {
  const cb = GodotConfig.on_exit;
  GodotFS.deinit();
  GodotConfig.clear();
  if (cb) {
   cb(exit_code);
  }
 },
 finish_async: function(callback) {
  GodotOS._fs_sync_promise.then(function(err) {
   const promises = [];
   GodotOS._async_cbs.forEach(function(cb) {
    promises.push(new Promise(cb));
   });
   return Promise.all(promises);
  }).then(function() {
   return GodotFS.sync();
  }).then(function(err) {
   setTimeout(function() {
    callback();
   }, 0);
  });
 }
};

var GodotAudio = {
 ctx: null,
 input: null,
 driver: null,
 interval: 0,
 init: function(mix_rate, latency, onstatechange, onlatencyupdate) {
  const opts = {};
  if (mix_rate) {
   opts["sampleRate"] = mix_rate;
  }
  const ctx = new (window.AudioContext || window.webkitAudioContext)(opts);
  GodotAudio.ctx = ctx;
  ctx.onstatechange = function() {
   let state = 0;
   switch (ctx.state) {
   case "suspended":
    state = 0;
    break;

   case "running":
    state = 1;
    break;

   case "closed":
    state = 2;
    break;
   }
   onstatechange(state);
  };
  ctx.onstatechange();
  GodotAudio.interval = setInterval(function() {
   let computed_latency = 0;
   if (ctx.baseLatency) {
    computed_latency += GodotAudio.ctx.baseLatency;
   }
   if (ctx.outputLatency) {
    computed_latency += GodotAudio.ctx.outputLatency;
   }
   onlatencyupdate(computed_latency);
  }, 1e3);
  GodotOS.atexit(GodotAudio.close_async);
  return ctx.destination.channelCount;
 },
 create_input: function(callback) {
  if (GodotAudio.input) {
   return 0;
  }
  function gotMediaInput(stream) {
   try {
    GodotAudio.input = GodotAudio.ctx.createMediaStreamSource(stream);
    callback(GodotAudio.input);
   } catch (e) {
    GodotRuntime.error("Failed creaating input.", e);
   }
  }
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
   navigator.mediaDevices.getUserMedia({
    "audio": true
   }).then(gotMediaInput, function(e) {
    GodotRuntime.error("Error getting user media.", e);
   });
  } else {
   if (!navigator.getUserMedia) {
    navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
   }
   if (!navigator.getUserMedia) {
    GodotRuntime.error("getUserMedia not available.");
    return 1;
   }
   navigator.getUserMedia({
    "audio": true
   }, gotMediaInput, function(e) {
    GodotRuntime.print(e);
   });
  }
  return 0;
 },
 close_async: function(resolve, reject) {
  const ctx = GodotAudio.ctx;
  GodotAudio.ctx = null;
  if (!ctx) {
   resolve();
   return;
  }
  if (GodotAudio.interval) {
   clearInterval(GodotAudio.interval);
   GodotAudio.interval = 0;
  }
  if (GodotAudio.input) {
   GodotAudio.input.disconnect();
   GodotAudio.input = null;
  }
  let closed = Promise.resolve();
  if (GodotAudio.driver) {
   closed = GodotAudio.driver.close();
  }
  closed.then(function() {
   return ctx.close();
  }).then(function() {
   ctx.onstatechange = null;
   resolve();
  }).catch(function(e) {
   ctx.onstatechange = null;
   GodotRuntime.error("Error closing AudioContext", e);
   resolve();
  });
 }
};

function _godot_audio_capture_start() {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(44, 1);
 return GodotAudio.create_input(function(input) {
  input.connect(GodotAudio.driver.get_node());
 });
}

function _godot_audio_capture_stop() {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(45, 1);
 if (GodotAudio.input) {
  const tracks = GodotAudio.input["mediaStream"]["getTracks"]();
  for (let i = 0; i < tracks.length; i++) {
   tracks[i]["stop"]();
  }
  GodotAudio.input.disconnect();
  GodotAudio.input = null;
 }
}

function _godot_audio_has_worklet() {
 return GodotAudio.ctx && GodotAudio.ctx.audioWorklet ? 1 : 0;
}

function _godot_audio_init(p_mix_rate, p_latency, p_state_change, p_latency_update) {
 const statechange = GodotRuntime.get_func(p_state_change);
 const latencyupdate = GodotRuntime.get_func(p_latency_update);
 const mix_rate = GodotRuntime.getHeapValue(p_mix_rate, "i32");
 const channels = GodotAudio.init(mix_rate, p_latency, statechange, latencyupdate);
 GodotRuntime.setHeapValue(p_mix_rate, GodotAudio.ctx.sampleRate, "i32");
 return channels;
}

function _godot_audio_is_available() {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(46, 1);
 if (!(window.AudioContext || window.webkitAudioContext)) {
  return 0;
 }
 return 1;
}

function _godot_audio_resume() {
 if (GodotAudio.ctx && GodotAudio.ctx.state !== "running") {
  GodotAudio.ctx.resume();
 }
}

var GodotAudioWorklet = {
 promise: null,
 worklet: null,
 ring_buffer: null,
 create: function(channels) {
  const path = GodotConfig.locate_file("godot.audio.worklet.js");
  GodotAudioWorklet.promise = GodotAudio.ctx.audioWorklet.addModule(path).then(function() {
   GodotAudioWorklet.worklet = new AudioWorkletNode(GodotAudio.ctx, "godot-processor", {
    "outputChannelCount": [ channels ]
   });
   return Promise.resolve();
  });
  GodotAudio.driver = GodotAudioWorklet;
 },
 start: function(in_buf, out_buf, state) {
  GodotAudioWorklet.promise.then(function() {
   const node = GodotAudioWorklet.worklet;
   node.connect(GodotAudio.ctx.destination);
   node.port.postMessage({
    "cmd": "start",
    "data": [ state, in_buf, out_buf ]
   });
   node.port.onmessage = function(event) {
    GodotRuntime.error(event.data);
   };
  });
 },
 start_no_threads: function(p_out_buf, p_out_size, out_callback, p_in_buf, p_in_size, in_callback) {
  function RingBuffer() {
   let wpos = 0;
   let rpos = 0;
   let pending_samples = 0;
   const wbuf = new Float32Array(p_out_size);
   function send(port) {
    if (pending_samples === 0) {
     return;
    }
    const buffer = GodotRuntime.heapSub(GROWABLE_HEAP_F32(), p_out_buf, p_out_size);
    const size = buffer.length;
    const tot_sent = pending_samples;
    out_callback(wpos, pending_samples);
    if (wpos + pending_samples >= size) {
     const high = size - wpos;
     wbuf.set(buffer.subarray(wpos, size));
     pending_samples -= high;
     wpos = 0;
    }
    if (pending_samples > 0) {
     wbuf.set(buffer.subarray(wpos, wpos + pending_samples), tot_sent - pending_samples);
    }
    port.postMessage({
     "cmd": "chunk",
     "data": wbuf.subarray(0, tot_sent)
    });
    wpos += pending_samples;
    pending_samples = 0;
   }
   this.receive = function(recv_buf) {
    const buffer = GodotRuntime.heapSub(GROWABLE_HEAP_F32(), p_in_buf, p_in_size);
    const from = rpos;
    let to_write = recv_buf.length;
    let high = 0;
    if (rpos + to_write >= p_in_size) {
     high = p_in_size - rpos;
     buffer.set(recv_buf.subarray(0, high), rpos);
     to_write -= high;
     rpos = 0;
    }
    if (to_write) {
     buffer.set(recv_buf.subarray(high, to_write), rpos);
    }
    in_callback(from, recv_buf.length);
    rpos += to_write;
   };
   this.consumed = function(size, port) {
    pending_samples += size;
    send(port);
   };
  }
  GodotAudioWorklet.ring_buffer = new RingBuffer();
  GodotAudioWorklet.promise.then(function() {
   const node = GodotAudioWorklet.worklet;
   const buffer = GodotRuntime.heapSlice(GROWABLE_HEAP_F32(), p_out_buf, p_out_size);
   node.connect(GodotAudio.ctx.destination);
   node.port.postMessage({
    "cmd": "start_nothreads",
    "data": [ buffer, p_in_size ]
   });
   node.port.onmessage = function(event) {
    if (!GodotAudioWorklet.worklet) {
     return;
    }
    if (event.data["cmd"] === "read") {
     const read = event.data["data"];
     GodotAudioWorklet.ring_buffer.consumed(read, GodotAudioWorklet.worklet.port);
    } else if (event.data["cmd"] === "input") {
     const buf = event.data["data"];
     if (buf.length > p_in_size) {
      GodotRuntime.error("Input chunk is too big");
      return;
     }
     GodotAudioWorklet.ring_buffer.receive(buf);
    } else {
     GodotRuntime.error(event.data);
    }
   };
  });
 },
 get_node: function() {
  return GodotAudioWorklet.worklet;
 },
 close: function() {
  return new Promise(function(resolve, reject) {
   if (GodotAudioWorklet.promise === null) {
    return;
   }
   const p = GodotAudioWorklet.promise;
   p.then(function() {
    GodotAudioWorklet.worklet.port.postMessage({
     "cmd": "stop",
     "data": null
    });
    GodotAudioWorklet.worklet.disconnect();
    GodotAudioWorklet.worklet.port.onmessage = null;
    GodotAudioWorklet.worklet = null;
    GodotAudioWorklet.promise = null;
    resolve();
   }).catch(function(err) {
    GodotRuntime.error(err);
   });
  });
 }
};

function _godot_audio_worklet_create(channels) {
 try {
  GodotAudioWorklet.create(channels);
 } catch (e) {
  GodotRuntime.error("Error starting AudioDriverWorklet", e);
  return 1;
 }
 return 0;
}

function _godot_audio_worklet_start(p_in_buf, p_in_size, p_out_buf, p_out_size, p_state) {
 const out_buffer = GodotRuntime.heapSub(GROWABLE_HEAP_F32(), p_out_buf, p_out_size);
 const in_buffer = GodotRuntime.heapSub(GROWABLE_HEAP_F32(), p_in_buf, p_in_size);
 const state = GodotRuntime.heapSub(GROWABLE_HEAP_I32(), p_state, 4);
 GodotAudioWorklet.start(in_buffer, out_buffer, state);
}

function _godot_audio_worklet_state_add(p_state, p_idx, p_value) {
 return Atomics.add(GROWABLE_HEAP_I32(), (p_state >> 2) + p_idx, p_value);
}

function _godot_audio_worklet_state_get(p_state, p_idx) {
 return Atomics.load(GROWABLE_HEAP_I32(), (p_state >> 2) + p_idx);
}

function _godot_audio_worklet_state_wait(p_state, p_idx, p_expected, p_timeout) {
 Atomics.wait(GROWABLE_HEAP_I32(), (p_state >> 2) + p_idx, p_expected, p_timeout);
 return Atomics.load(GROWABLE_HEAP_I32(), (p_state >> 2) + p_idx);
}

function _godot_js_config_canvas_id_get(p_ptr, p_ptr_max) {
 GodotRuntime.stringToHeap(`#${GodotConfig.canvas.id}`, p_ptr, p_ptr_max);
}

function _godot_js_config_locale_get(p_ptr, p_ptr_max) {
 GodotRuntime.stringToHeap(GodotConfig.locale, p_ptr, p_ptr_max);
}

var GodotDisplayCursor = {
 shape: "default",
 visible: true,
 cursors: {},
 set_style: function(style) {
  GodotConfig.canvas.style.cursor = style;
 },
 set_shape: function(shape) {
  GodotDisplayCursor.shape = shape;
  let css = shape;
  if (shape in GodotDisplayCursor.cursors) {
   const c = GodotDisplayCursor.cursors[shape];
   css = `url("${c.url}") ${c.x} ${c.y}, default`;
  }
  if (GodotDisplayCursor.visible) {
   GodotDisplayCursor.set_style(css);
  }
 },
 clear: function() {
  GodotDisplayCursor.set_style("");
  GodotDisplayCursor.shape = "default";
  GodotDisplayCursor.visible = true;
  Object.keys(GodotDisplayCursor.cursors).forEach(function(key) {
   URL.revokeObjectURL(GodotDisplayCursor.cursors[key]);
   delete GodotDisplayCursor.cursors[key];
  });
 },
 lockPointer: function() {
  const canvas = GodotConfig.canvas;
  if (canvas.requestPointerLock) {
   canvas.requestPointerLock();
  }
 },
 releasePointer: function() {
  if (document.exitPointerLock) {
   document.exitPointerLock();
  }
 },
 isPointerLocked: function() {
  return document.pointerLockElement === GodotConfig.canvas;
 }
};

var GodotEventListeners = {
 handlers: [],
 has: function(target, event, method, capture) {
  return GodotEventListeners.handlers.findIndex(function(e) {
   return e.target === target && e.event === event && e.method === method && e.capture === capture;
  }) !== -1;
 },
 add: function(target, event, method, capture) {
  if (GodotEventListeners.has(target, event, method, capture)) {
   return;
  }
  function Handler(p_target, p_event, p_method, p_capture) {
   this.target = p_target;
   this.event = p_event;
   this.method = p_method;
   this.capture = p_capture;
  }
  GodotEventListeners.handlers.push(new Handler(target, event, method, capture));
  target.addEventListener(event, method, capture);
 },
 clear: function() {
  GodotEventListeners.handlers.forEach(function(h) {
   h.target.removeEventListener(h.event, h.method, h.capture);
  });
  GodotEventListeners.handlers.length = 0;
 }
};

var GodotDisplayScreen = {
 desired_size: [ 0, 0 ],
 hidpi: true,
 getPixelRatio: function() {
  return GodotDisplayScreen.hidpi ? window.devicePixelRatio || 1 : 1;
 },
 isFullscreen: function() {
  const elem = document.fullscreenElement || document.mozFullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
  if (elem) {
   return elem === GodotConfig.canvas;
  }
  return document.fullscreen || document.mozFullScreen || document.webkitIsFullscreen;
 },
 hasFullscreen: function() {
  return document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;
 },
 requestFullscreen: function() {
  if (!GodotDisplayScreen.hasFullscreen()) {
   return 1;
  }
  const canvas = GodotConfig.canvas;
  try {
   const promise = (canvas.requestFullscreen || canvas.msRequestFullscreen || canvas.mozRequestFullScreen || canvas.mozRequestFullscreen || canvas.webkitRequestFullscreen).call(canvas);
   if (promise) {
    promise.catch(function() {});
   }
  } catch (e) {
   return 1;
  }
  return 0;
 },
 exitFullscreen: function() {
  if (!GodotDisplayScreen.isFullscreen()) {
   return 0;
  }
  try {
   const promise = document.exitFullscreen();
   if (promise) {
    promise.catch(function() {});
   }
  } catch (e) {
   return 1;
  }
  return 0;
 },
 _updateGL: function() {
  const gl_context_handle = _emscripten_webgl_get_current_context();
  const gl = GL.getContext(gl_context_handle);
  if (gl) {
   GL.resizeOffscreenFramebuffer(gl);
  }
 },
 updateSize: function() {
  const isFullscreen = GodotDisplayScreen.isFullscreen();
  const wantsFullWindow = GodotConfig.canvas_resize_policy === 2;
  const noResize = GodotConfig.canvas_resize_policy === 0;
  const wwidth = GodotDisplayScreen.desired_size[0];
  const wheight = GodotDisplayScreen.desired_size[1];
  const canvas = GodotConfig.canvas;
  let width = wwidth;
  let height = wheight;
  if (noResize) {
   if (canvas.width !== width || canvas.height !== height) {
    GodotDisplayScreen.desired_size = [ canvas.width, canvas.height ];
    GodotDisplayScreen._updateGL();
    return 1;
   }
   return 0;
  }
  const scale = GodotDisplayScreen.getPixelRatio();
  if (isFullscreen || wantsFullWindow) {
   width = window.innerWidth * scale;
   height = window.innerHeight * scale;
  }
  const csw = `${width / scale}px`;
  const csh = `${height / scale}px`;
  if (canvas.style.width !== csw || canvas.style.height !== csh || canvas.width !== width || canvas.height !== height) {
   canvas.width = width;
   canvas.height = height;
   canvas.style.width = csw;
   canvas.style.height = csh;
   GodotDisplayScreen._updateGL();
   return 1;
  }
  return 0;
 }
};

var GodotDisplayVK = {
 textinput: null,
 textarea: null,
 available: function() {
  return GodotConfig.virtual_keyboard && "ontouchstart" in window;
 },
 init: function(input_cb) {
  function create(what) {
   const elem = document.createElement(what);
   elem.style.display = "none";
   elem.style.position = "absolute";
   elem.style.zIndex = "-1";
   elem.style.background = "transparent";
   elem.style.padding = "0px";
   elem.style.margin = "0px";
   elem.style.overflow = "hidden";
   elem.style.width = "0px";
   elem.style.height = "0px";
   elem.style.border = "0px";
   elem.style.outline = "none";
   elem.readonly = true;
   elem.disabled = true;
   GodotEventListeners.add(elem, "input", function(evt) {
    const c_str = GodotRuntime.allocString(elem.value);
    input_cb(c_str, elem.selectionEnd);
    GodotRuntime.free(c_str);
   }, false);
   GodotEventListeners.add(elem, "blur", function(evt) {
    elem.style.display = "none";
    elem.readonly = true;
    elem.disabled = true;
   }, false);
   GodotConfig.canvas.insertAdjacentElement("beforebegin", elem);
   return elem;
  }
  GodotDisplayVK.textinput = create("input");
  GodotDisplayVK.textarea = create("textarea");
  GodotDisplayVK.updateSize();
 },
 show: function(text, type, start, end) {
  if (!GodotDisplayVK.textinput || !GodotDisplayVK.textarea) {
   return;
  }
  if (GodotDisplayVK.textinput.style.display !== "" || GodotDisplayVK.textarea.style.display !== "") {
   GodotDisplayVK.hide();
  }
  GodotDisplayVK.updateSize();
  let elem = GodotDisplayVK.textinput;
  switch (type) {
  case 0:
   elem.type = "text";
   elem.inputmode = "";
   break;

  case 1:
   elem = GodotDisplayVK.textarea;
   break;

  case 2:
   elem.type = "text";
   elem.inputmode = "numeric";
   break;

  case 3:
   elem.type = "text";
   elem.inputmode = "decimal";
   break;

  case 4:
   elem.type = "tel";
   elem.inputmode = "";
   break;

  case 5:
   elem.type = "email";
   elem.inputmode = "";
   break;

  case 6:
   elem.type = "password";
   elem.inputmode = "";
   break;

  case 7:
   elem.type = "url";
   elem.inputmode = "";
   break;

  default:
   elem.type = "text";
   elem.inputmode = "";
   break;
  }
  elem.readonly = false;
  elem.disabled = false;
  elem.value = text;
  elem.style.display = "block";
  elem.focus();
  elem.setSelectionRange(start, end);
 },
 hide: function() {
  if (!GodotDisplayVK.textinput || !GodotDisplayVK.textarea) {
   return;
  }
  [ GodotDisplayVK.textinput, GodotDisplayVK.textarea ].forEach(function(elem) {
   elem.blur();
   elem.style.display = "none";
   elem.value = "";
  });
 },
 updateSize: function() {
  if (!GodotDisplayVK.textinput || !GodotDisplayVK.textarea) {
   return;
  }
  const rect = GodotConfig.canvas.getBoundingClientRect();
  function update(elem) {
   elem.style.left = `${rect.left}px`;
   elem.style.top = `${rect.top}px`;
   elem.style.width = `${rect.width}px`;
   elem.style.height = `${rect.height}px`;
  }
  update(GodotDisplayVK.textinput);
  update(GodotDisplayVK.textarea);
 },
 clear: function() {
  if (GodotDisplayVK.textinput) {
   GodotDisplayVK.textinput.remove();
   GodotDisplayVK.textinput = null;
  }
  if (GodotDisplayVK.textarea) {
   GodotDisplayVK.textarea.remove();
   GodotDisplayVK.textarea = null;
  }
 }
};

var GodotDisplay = {
 window_icon: "",
 getDPI: function() {
  const dpi = Math.round(window.devicePixelRatio * 96);
  return dpi >= 96 ? dpi : 96;
 }
};

function _godot_js_display_alert(p_text) {
 window.alert(GodotRuntime.parseString(p_text));
}

function _godot_js_display_canvas_focus() {
 GodotConfig.canvas.focus();
}

function _godot_js_display_canvas_is_focused() {
 return document.activeElement === GodotConfig.canvas;
}

function _godot_js_display_clipboard_get(callback) {
 const func = GodotRuntime.get_func(callback);
 try {
  navigator.clipboard.readText().then(function(result) {
   const ptr = GodotRuntime.allocString(result);
   func(ptr);
   GodotRuntime.free(ptr);
  }).catch(function(e) {});
 } catch (e) {}
}

function _godot_js_display_clipboard_set(p_text) {
 const text = GodotRuntime.parseString(p_text);
 if (!navigator.clipboard || !navigator.clipboard.writeText) {
  return 1;
 }
 navigator.clipboard.writeText(text).catch(function(e) {
  GodotRuntime.error("Setting OS clipboard is only possible from an input callback for the Web plafrom. Exception:", e);
 });
 return 0;
}

function _godot_js_display_cursor_is_hidden() {
 return !GodotDisplayCursor.visible;
}

function _godot_js_display_cursor_is_locked() {
 return GodotDisplayCursor.isPointerLocked() ? 1 : 0;
}

function _godot_js_display_cursor_lock_set(p_lock) {
 if (p_lock) {
  GodotDisplayCursor.lockPointer();
 } else {
  GodotDisplayCursor.releasePointer();
 }
}

function _godot_js_display_cursor_set_custom_shape(p_shape, p_ptr, p_len, p_hotspot_x, p_hotspot_y) {
 const shape = GodotRuntime.parseString(p_shape);
 const old_shape = GodotDisplayCursor.cursors[shape];
 if (p_len > 0) {
  const png = new Blob([ GodotRuntime.heapSlice(GROWABLE_HEAP_U8(), p_ptr, p_len) ], {
   type: "image/png"
  });
  const url = URL.createObjectURL(png);
  GodotDisplayCursor.cursors[shape] = {
   url: url,
   x: p_hotspot_x,
   y: p_hotspot_y
  };
 } else {
  delete GodotDisplayCursor.cursors[shape];
 }
 if (shape === GodotDisplayCursor.shape) {
  GodotDisplayCursor.set_shape(GodotDisplayCursor.shape);
 }
 if (old_shape) {
  URL.revokeObjectURL(old_shape.url);
 }
}

function _godot_js_display_cursor_set_shape(p_string) {
 GodotDisplayCursor.set_shape(GodotRuntime.parseString(p_string));
}

function _godot_js_display_cursor_set_visible(p_visible) {
 const visible = p_visible !== 0;
 if (visible === GodotDisplayCursor.visible) {
  return;
 }
 GodotDisplayCursor.visible = visible;
 if (visible) {
  GodotDisplayCursor.set_shape(GodotDisplayCursor.shape);
 } else {
  GodotDisplayCursor.set_style("none");
 }
}

function _godot_js_display_desired_size_set(width, height) {
 GodotDisplayScreen.desired_size = [ width, height ];
 GodotDisplayScreen.updateSize();
}

function _godot_js_display_fullscreen_cb(callback) {
 const canvas = GodotConfig.canvas;
 const func = GodotRuntime.get_func(callback);
 function change_cb(evt) {
  if (evt.target === canvas) {
   func(GodotDisplayScreen.isFullscreen());
  }
 }
 GodotEventListeners.add(document, "fullscreenchange", change_cb, false);
 GodotEventListeners.add(document, "mozfullscreenchange", change_cb, false);
 GodotEventListeners.add(document, "webkitfullscreenchange", change_cb, false);
}

function _godot_js_display_fullscreen_exit() {
 return GodotDisplayScreen.exitFullscreen();
}

function _godot_js_display_fullscreen_request() {
 return GodotDisplayScreen.requestFullscreen();
}

function _godot_js_display_has_webgl(p_version) {
 if (p_version !== 1 && p_version !== 2) {
  return false;
 }
 try {
  return !!document.createElement("canvas").getContext(p_version === 2 ? "webgl2" : "webgl");
 } catch (e) {}
 return false;
}

function _godot_js_display_is_swap_ok_cancel() {
 const win = [ "Windows", "Win64", "Win32", "WinCE" ];
 const plat = navigator.platform || "";
 if (win.indexOf(plat) !== -1) {
  return 1;
 }
 return 0;
}

function _godot_js_display_notification_cb(callback, p_enter, p_exit, p_in, p_out) {
 const canvas = GodotConfig.canvas;
 const func = GodotRuntime.get_func(callback);
 const notif = [ p_enter, p_exit, p_in, p_out ];
 [ "mouseover", "mouseleave", "focus", "blur" ].forEach(function(evt_name, idx) {
  GodotEventListeners.add(canvas, evt_name, function() {
   func(notif[idx]);
  }, true);
 });
}

function _godot_js_display_pixel_ratio_get() {
 return GodotDisplayScreen.getPixelRatio();
}

function _godot_js_display_screen_dpi_get() {
 return GodotDisplay.getDPI();
}

function _godot_js_display_screen_size_get(width, height) {
 const scale = GodotDisplayScreen.getPixelRatio();
 GodotRuntime.setHeapValue(width, window.screen.width * scale, "i32");
 GodotRuntime.setHeapValue(height, window.screen.height * scale, "i32");
}

function _godot_js_display_setup_canvas(p_width, p_height, p_fullscreen, p_hidpi) {
 const canvas = GodotConfig.canvas;
 GodotEventListeners.add(canvas, "contextmenu", function(ev) {
  ev.preventDefault();
 }, false);
 GodotEventListeners.add(canvas, "webglcontextlost", function(ev) {
  alert("WebGL context lost, please reload the page");
  ev.preventDefault();
 }, false);
 GodotDisplayScreen.hidpi = !!p_hidpi;
 switch (GodotConfig.canvas_resize_policy) {
 case 0:
  GodotDisplayScreen.desired_size = [ canvas.width, canvas.height ];
  break;

 case 1:
  GodotDisplayScreen.desired_size = [ p_width, p_height ];
  break;

 default:
  canvas.style.position = "absolute";
  canvas.style.top = 0;
  canvas.style.left = 0;
  break;
 }
 GodotDisplayScreen.updateSize();
 if (p_fullscreen) {
  GodotDisplayScreen.requestFullscreen();
 }
}

function _godot_js_display_size_update() {
 const updated = GodotDisplayScreen.updateSize();
 if (updated) {
  GodotDisplayVK.updateSize();
 }
 return updated;
}

function _godot_js_display_touchscreen_is_available() {
 return "ontouchstart" in window;
}

function _godot_js_display_tts_available() {
 return "speechSynthesis" in window;
}

function _godot_js_display_vk_available() {
 return GodotDisplayVK.available();
}

function _godot_js_display_vk_cb(p_input_cb) {
 const input_cb = GodotRuntime.get_func(p_input_cb);
 if (GodotDisplayVK.available()) {
  GodotDisplayVK.init(input_cb);
 }
}

function _godot_js_display_vk_hide() {
 GodotDisplayVK.hide();
}

function _godot_js_display_vk_show(p_text, p_type, p_start, p_end) {
 const text = GodotRuntime.parseString(p_text);
 const start = p_start > 0 ? p_start : 0;
 const end = p_end > 0 ? p_end : start;
 GodotDisplayVK.show(text, p_type, start, end);
}

function _godot_js_display_window_blur_cb(callback) {
 const func = GodotRuntime.get_func(callback);
 GodotEventListeners.add(window, "blur", function() {
  func();
 }, false);
}

function _godot_js_display_window_icon_set(p_ptr, p_len) {
 let link = document.getElementById("-gd-engine-icon");
 if (link === null) {
  link = document.createElement("link");
  link.rel = "icon";
  link.id = "-gd-engine-icon";
  document.head.appendChild(link);
 }
 const old_icon = GodotDisplay.window_icon;
 const png = new Blob([ GodotRuntime.heapSlice(GROWABLE_HEAP_U8(), p_ptr, p_len) ], {
  type: "image/png"
 });
 GodotDisplay.window_icon = URL.createObjectURL(png);
 link.href = GodotDisplay.window_icon;
 if (old_icon) {
  URL.revokeObjectURL(old_icon);
 }
}

function _godot_js_display_window_size_get(p_width, p_height) {
 GodotRuntime.setHeapValue(p_width, GodotConfig.canvas.width, "i32");
 GodotRuntime.setHeapValue(p_height, GodotConfig.canvas.height, "i32");
}

function _godot_js_display_window_title_set(p_data) {
 document.title = GodotRuntime.parseString(p_data);
}

function _godot_js_eval(p_js, p_use_global_ctx, p_union_ptr, p_byte_arr, p_byte_arr_write, p_callback) {
 const js_code = GodotRuntime.parseString(p_js);
 let eval_ret = null;
 try {
  if (p_use_global_ctx) {
   const global_eval = eval;
   eval_ret = global_eval(js_code);
  } else {
   eval_ret = eval(js_code);
  }
 } catch (e) {
  GodotRuntime.error(e);
 }
 switch (typeof eval_ret) {
 case "boolean":
  GodotRuntime.setHeapValue(p_union_ptr, eval_ret, "i32");
  return 1;

 case "number":
  GodotRuntime.setHeapValue(p_union_ptr, eval_ret, "double");
  return 3;

 case "string":
  GodotRuntime.setHeapValue(p_union_ptr, GodotRuntime.allocString(eval_ret), "*");
  return 4;

 case "object":
  if (eval_ret === null) {
   break;
  }
  if (ArrayBuffer.isView(eval_ret) && !(eval_ret instanceof Uint8Array)) {
   eval_ret = new Uint8Array(eval_ret.buffer);
  } else if (eval_ret instanceof ArrayBuffer) {
   eval_ret = new Uint8Array(eval_ret);
  }
  if (eval_ret instanceof Uint8Array) {
   const func = GodotRuntime.get_func(p_callback);
   const bytes_ptr = func(p_byte_arr, p_byte_arr_write, eval_ret.length);
   GROWABLE_HEAP_U8().set(eval_ret, bytes_ptr);
   return 20;
  }
  break;
 }
 return 0;
}

var IDHandler = {
 _last_id: 0,
 _references: {},
 get: function(p_id) {
  return IDHandler._references[p_id];
 },
 add: function(p_data) {
  const id = ++IDHandler._last_id;
  IDHandler._references[id] = p_data;
  return id;
 },
 remove: function(p_id) {
  delete IDHandler._references[p_id];
 }
};

var GodotFetch = {
 onread: function(id, result) {
  const obj = IDHandler.get(id);
  if (!obj) {
   return;
  }
  if (result.value) {
   obj.chunks.push(result.value);
  }
  obj.reading = false;
  obj.done = result.done;
 },
 onresponse: function(id, response) {
  const obj = IDHandler.get(id);
  if (!obj) {
   return;
  }
  let chunked = false;
  response.headers.forEach(function(value, header) {
   const v = value.toLowerCase().trim();
   const h = header.toLowerCase().trim();
   if (h === "transfer-encoding" && v === "chunked") {
    chunked = true;
   }
  });
  obj.status = response.status;
  obj.response = response;
  obj.reader = response.body.getReader();
  obj.chunked = chunked;
 },
 onerror: function(id, err) {
  GodotRuntime.error(err);
  const obj = IDHandler.get(id);
  if (!obj) {
   return;
  }
  obj.error = err;
 },
 create: function(method, url, headers, body) {
  const obj = {
   request: null,
   response: null,
   reader: null,
   error: null,
   done: false,
   reading: false,
   status: 0,
   chunks: [],
   bodySize: -1
  };
  const id = IDHandler.add(obj);
  const init = {
   method: method,
   headers: headers,
   body: body
  };
  obj.request = fetch(url, init);
  obj.request.then(GodotFetch.onresponse.bind(null, id)).catch(GodotFetch.onerror.bind(null, id));
  return id;
 },
 free: function(id) {
  const obj = IDHandler.get(id);
  if (!obj) {
   return;
  }
  IDHandler.remove(id);
  if (!obj.request) {
   return;
  }
  obj.request.then(function(response) {
   response.abort();
  }).catch(function(e) {});
 },
 read: function(id) {
  const obj = IDHandler.get(id);
  if (!obj) {
   return;
  }
  if (obj.reader && !obj.reading) {
   if (obj.done) {
    obj.reader = null;
    return;
   }
   obj.reading = true;
   obj.reader.read().then(GodotFetch.onread.bind(null, id)).catch(GodotFetch.onerror.bind(null, id));
  }
 }
};

function _godot_js_fetch_body_length_get(p_id) {
 const obj = IDHandler.get(p_id);
 if (!obj || !obj.response) {
  return -1;
 }
 return obj.bodySize;
}

function _godot_js_fetch_create(p_method, p_url, p_headers, p_headers_size, p_body, p_body_size) {
 const method = GodotRuntime.parseString(p_method);
 const url = GodotRuntime.parseString(p_url);
 const headers = GodotRuntime.parseStringArray(p_headers, p_headers_size);
 const body = p_body_size ? GodotRuntime.heapSlice(GROWABLE_HEAP_I8(), p_body, p_body_size) : null;
 return GodotFetch.create(method, url, headers.map(function(hv) {
  const idx = hv.indexOf(":");
  if (idx <= 0) {
   return [];
  }
  return [ hv.slice(0, idx).trim(), hv.slice(idx + 1).trim() ];
 }).filter(function(v) {
  return v.length === 2;
 }), body);
}

function _godot_js_fetch_free(id) {
 GodotFetch.free(id);
}

function _godot_js_fetch_http_status_get(p_id) {
 const obj = IDHandler.get(p_id);
 if (!obj || !obj.response) {
  return 0;
 }
 return obj.status;
}

function _godot_js_fetch_is_chunked(p_id) {
 const obj = IDHandler.get(p_id);
 if (!obj || !obj.response) {
  return -1;
 }
 return obj.chunked ? 1 : 0;
}

function _godot_js_fetch_read_chunk(p_id, p_buf, p_buf_size) {
 const obj = IDHandler.get(p_id);
 if (!obj || !obj.response) {
  return 0;
 }
 let to_read = p_buf_size;
 const chunks = obj.chunks;
 while (to_read && chunks.length) {
  const chunk = obj.chunks[0];
  if (chunk.length > to_read) {
   GodotRuntime.heapCopy(GROWABLE_HEAP_I8(), chunk.slice(0, to_read), p_buf);
   chunks[0] = chunk.slice(to_read);
   to_read = 0;
  } else {
   GodotRuntime.heapCopy(GROWABLE_HEAP_I8(), chunk, p_buf);
   to_read -= chunk.length;
   chunks.pop();
  }
 }
 if (!chunks.length) {
  GodotFetch.read(p_id);
 }
 return p_buf_size - to_read;
}

function _godot_js_fetch_read_headers(p_id, p_parse_cb, p_ref) {
 const obj = IDHandler.get(p_id);
 if (!obj || !obj.response) {
  return 1;
 }
 const cb = GodotRuntime.get_func(p_parse_cb);
 const arr = [];
 obj.response.headers.forEach(function(v, h) {
  arr.push(`${h}:${v}`);
 });
 const c_ptr = GodotRuntime.allocStringArray(arr);
 cb(arr.length, c_ptr, p_ref);
 GodotRuntime.freeStringArray(c_ptr, arr.length);
 return 0;
}

function _godot_js_fetch_state_get(p_id) {
 const obj = IDHandler.get(p_id);
 if (!obj) {
  return -1;
 }
 if (obj.error) {
  return -1;
 }
 if (!obj.response) {
  return 0;
 }
 if (obj.reader) {
  return 1;
 }
 if (obj.done) {
  return 2;
 }
 return -1;
}

var GodotInputGamepads = {
 samples: [],
 get_pads: function() {
  try {
   const pads = navigator.getGamepads();
   if (pads) {
    return pads;
   }
   return [];
  } catch (e) {
   return [];
  }
 },
 get_samples: function() {
  return GodotInputGamepads.samples;
 },
 get_sample: function(index) {
  const samples = GodotInputGamepads.samples;
  return index < samples.length ? samples[index] : null;
 },
 sample: function() {
  const pads = GodotInputGamepads.get_pads();
  const samples = [];
  for (let i = 0; i < pads.length; i++) {
   const pad = pads[i];
   if (!pad) {
    samples.push(null);
    continue;
   }
   const s = {
    standard: pad.mapping === "standard",
    buttons: [],
    axes: [],
    connected: pad.connected
   };
   for (let b = 0; b < pad.buttons.length; b++) {
    s.buttons.push(pad.buttons[b].value);
   }
   for (let a = 0; a < pad.axes.length; a++) {
    s.axes.push(pad.axes[a]);
   }
   samples.push(s);
  }
  GodotInputGamepads.samples = samples;
 },
 init: function(onchange) {
  GodotInputGamepads.samples = [];
  function add(pad) {
   const guid = GodotInputGamepads.get_guid(pad);
   const c_id = GodotRuntime.allocString(pad.id);
   const c_guid = GodotRuntime.allocString(guid);
   onchange(pad.index, 1, c_id, c_guid);
   GodotRuntime.free(c_id);
   GodotRuntime.free(c_guid);
  }
  const pads = GodotInputGamepads.get_pads();
  for (let i = 0; i < pads.length; i++) {
   if (pads[i]) {
    add(pads[i]);
   }
  }
  GodotEventListeners.add(window, "gamepadconnected", function(evt) {
   if (evt.gamepad) {
    add(evt.gamepad);
   }
  }, false);
  GodotEventListeners.add(window, "gamepaddisconnected", function(evt) {
   if (evt.gamepad) {
    onchange(evt.gamepad.index, 0);
   }
  }, false);
 },
 get_guid: function(pad) {
  if (pad.mapping) {
   return pad.mapping;
  }
  const ua = navigator.userAgent;
  let os = "Unknown";
  if (ua.indexOf("Android") >= 0) {
   os = "Android";
  } else if (ua.indexOf("Linux") >= 0) {
   os = "Linux";
  } else if (ua.indexOf("iPhone") >= 0) {
   os = "iOS";
  } else if (ua.indexOf("Macintosh") >= 0) {
   os = "MacOSX";
  } else if (ua.indexOf("Windows") >= 0) {
   os = "Windows";
  }
  const id = pad.id;
  const exp1 = /vendor: ([0-9a-f]{4}) product: ([0-9a-f]{4})/i;
  const exp2 = /^([0-9a-f]+)-([0-9a-f]+)-/i;
  let vendor = "";
  let product = "";
  if (exp1.test(id)) {
   const match = exp1.exec(id);
   vendor = match[1].padStart(4, "0");
   product = match[2].padStart(4, "0");
  } else if (exp2.test(id)) {
   const match = exp2.exec(id);
   vendor = match[1].padStart(4, "0");
   product = match[2].padStart(4, "0");
  }
  if (!vendor || !product) {
   return `${os}Unknown`;
  }
  return os + vendor + product;
 }
};

var GodotInputDragDrop = {
 promises: [],
 pending_files: [],
 add_entry: function(entry) {
  if (entry.isDirectory) {
   GodotInputDragDrop.add_dir(entry);
  } else if (entry.isFile) {
   GodotInputDragDrop.add_file(entry);
  } else {
   GodotRuntime.error("Unrecognized entry...", entry);
  }
 },
 add_dir: function(entry) {
  GodotInputDragDrop.promises.push(new Promise(function(resolve, reject) {
   const reader = entry.createReader();
   reader.readEntries(function(entries) {
    for (let i = 0; i < entries.length; i++) {
     GodotInputDragDrop.add_entry(entries[i]);
    }
    resolve();
   });
  }));
 },
 add_file: function(entry) {
  GodotInputDragDrop.promises.push(new Promise(function(resolve, reject) {
   entry.file(function(file) {
    const reader = new FileReader();
    reader.onload = function() {
     const f = {
      "path": file.relativePath || file.webkitRelativePath,
      "name": file.name,
      "type": file.type,
      "size": file.size,
      "data": reader.result
     };
     if (!f["path"]) {
      f["path"] = f["name"];
     }
     GodotInputDragDrop.pending_files.push(f);
     resolve();
    };
    reader.onerror = function() {
     GodotRuntime.print("Error reading file");
     reject();
    };
    reader.readAsArrayBuffer(file);
   }, function(err) {
    GodotRuntime.print("Error!");
    reject();
   });
  }));
 },
 process: function(resolve, reject) {
  if (GodotInputDragDrop.promises.length === 0) {
   resolve();
   return;
  }
  GodotInputDragDrop.promises.pop().then(function() {
   setTimeout(function() {
    GodotInputDragDrop.process(resolve, reject);
   }, 0);
  });
 },
 _process_event: function(ev, callback) {
  ev.preventDefault();
  if (ev.dataTransfer.items) {
   for (let i = 0; i < ev.dataTransfer.items.length; i++) {
    const item = ev.dataTransfer.items[i];
    let entry = null;
    if ("getAsEntry" in item) {
     entry = item.getAsEntry();
    } else if ("webkitGetAsEntry" in item) {
     entry = item.webkitGetAsEntry();
    }
    if (entry) {
     GodotInputDragDrop.add_entry(entry);
    }
   }
  } else {
   GodotRuntime.error("File upload not supported");
  }
  new Promise(GodotInputDragDrop.process).then(function() {
   const DROP = `/tmp/drop-${parseInt(Math.random() * (1 << 30), 10)}/`;
   const drops = [];
   const files = [];
   FS.mkdir(DROP.slice(0, -1));
   GodotInputDragDrop.pending_files.forEach(elem => {
    const path = elem["path"];
    GodotFS.copy_to_fs(DROP + path, elem["data"]);
    let idx = path.indexOf("/");
    if (idx === -1) {
     drops.push(DROP + path);
    } else {
     const sub = path.substr(0, idx);
     idx = sub.indexOf("/");
     if (idx < 0 && drops.indexOf(DROP + sub) === -1) {
      drops.push(DROP + sub);
     }
    }
    files.push(DROP + path);
   });
   GodotInputDragDrop.promises = [];
   GodotInputDragDrop.pending_files = [];
   callback(drops);
   if (GodotConfig.persistent_drops) {
    GodotOS.atexit(function(resolve, reject) {
     GodotInputDragDrop.remove_drop(files, DROP);
     resolve();
    });
   } else {
    GodotInputDragDrop.remove_drop(files, DROP);
   }
  });
 },
 remove_drop: function(files, drop_path) {
  const dirs = [ drop_path.substr(0, drop_path.length - 1) ];
  files.forEach(function(file) {
   FS.unlink(file);
   let dir = file.replace(drop_path, "");
   let idx = dir.lastIndexOf("/");
   while (idx > 0) {
    dir = dir.substr(0, idx);
    if (dirs.indexOf(drop_path + dir) === -1) {
     dirs.push(drop_path + dir);
    }
    idx = dir.lastIndexOf("/");
   }
  });
  dirs.sort(function(a, b) {
   const al = (a.match(/\//g) || []).length;
   const bl = (b.match(/\//g) || []).length;
   if (al > bl) {
    return -1;
   } else if (al < bl) {
    return 1;
   }
   return 0;
  }).forEach(function(dir) {
   FS.rmdir(dir);
  });
 },
 handler: function(callback) {
  return function(ev) {
   GodotInputDragDrop._process_event(ev, callback);
  };
 }
};

var GodotInput = {
 getModifiers: function(evt) {
  return evt.shiftKey + 0 + (evt.altKey + 0 << 1) + (evt.ctrlKey + 0 << 2) + (evt.metaKey + 0 << 3);
 },
 computePosition: function(evt, rect) {
  const canvas = GodotConfig.canvas;
  const rw = canvas.width / rect.width;
  const rh = canvas.height / rect.height;
  const x = (evt.clientX - rect.x) * rw;
  const y = (evt.clientY - rect.y) * rh;
  return [ x, y ];
 }
};

function _godot_js_input_drop_files_cb(callback) {
 const func = GodotRuntime.get_func(callback);
 const dropFiles = function(files) {
  const args = files || [];
  if (!args.length) {
   return;
  }
  const argc = args.length;
  const argv = GodotRuntime.allocStringArray(args);
  func(argv, argc);
  GodotRuntime.freeStringArray(argv, argc);
 };
 const canvas = GodotConfig.canvas;
 GodotEventListeners.add(canvas, "dragover", function(ev) {
  ev.preventDefault();
 }, false);
 GodotEventListeners.add(canvas, "drop", GodotInputDragDrop.handler(dropFiles));
}

function _godot_js_input_gamepad_cb(change_cb) {
 const onchange = GodotRuntime.get_func(change_cb);
 GodotInputGamepads.init(onchange);
}

function _godot_js_input_gamepad_sample() {
 GodotInputGamepads.sample();
 return 0;
}

function _godot_js_input_gamepad_sample_count() {
 return GodotInputGamepads.get_samples().length;
}

function _godot_js_input_gamepad_sample_get(p_index, r_btns, r_btns_num, r_axes, r_axes_num, r_standard) {
 const sample = GodotInputGamepads.get_sample(p_index);
 if (!sample || !sample.connected) {
  return 1;
 }
 const btns = sample.buttons;
 const btns_len = btns.length < 16 ? btns.length : 16;
 for (let i = 0; i < btns_len; i++) {
  GodotRuntime.setHeapValue(r_btns + (i << 2), btns[i], "float");
 }
 GodotRuntime.setHeapValue(r_btns_num, btns_len, "i32");
 const axes = sample.axes;
 const axes_len = axes.length < 10 ? axes.length : 10;
 for (let i = 0; i < axes_len; i++) {
  GodotRuntime.setHeapValue(r_axes + (i << 2), axes[i], "float");
 }
 GodotRuntime.setHeapValue(r_axes_num, axes_len, "i32");
 const is_standard = sample.standard ? 1 : 0;
 GodotRuntime.setHeapValue(r_standard, is_standard, "i32");
 return 0;
}

function _godot_js_input_key_cb(callback, code, key) {
 const func = GodotRuntime.get_func(callback);
 function key_cb(pressed, evt) {
  const modifiers = GodotInput.getModifiers(evt);
  GodotRuntime.stringToHeap(evt.code, code, 32);
  GodotRuntime.stringToHeap(evt.key, key, 32);
  func(pressed, evt.repeat, modifiers);
  evt.preventDefault();
 }
 GodotEventListeners.add(GodotConfig.canvas, "keydown", key_cb.bind(null, 1), false);
 GodotEventListeners.add(GodotConfig.canvas, "keyup", key_cb.bind(null, 0), false);
}

function _godot_js_input_mouse_button_cb(callback) {
 const func = GodotRuntime.get_func(callback);
 const canvas = GodotConfig.canvas;
 function button_cb(p_pressed, evt) {
  const rect = canvas.getBoundingClientRect();
  const pos = GodotInput.computePosition(evt, rect);
  const modifiers = GodotInput.getModifiers(evt);
  if (p_pressed) {
   GodotConfig.canvas.focus();
  }
  if (func(p_pressed, evt.button, pos[0], pos[1], modifiers)) {
   evt.preventDefault();
  }
 }
 GodotEventListeners.add(canvas, "mousedown", button_cb.bind(null, 1), false);
 GodotEventListeners.add(window, "mouseup", button_cb.bind(null, 0), false);
}

function _godot_js_input_mouse_move_cb(callback) {
 const func = GodotRuntime.get_func(callback);
 const canvas = GodotConfig.canvas;
 function move_cb(evt) {
  const rect = canvas.getBoundingClientRect();
  const pos = GodotInput.computePosition(evt, rect);
  const rw = canvas.width / rect.width;
  const rh = canvas.height / rect.height;
  const rel_pos_x = evt.movementX * rw;
  const rel_pos_y = evt.movementY * rh;
  const modifiers = GodotInput.getModifiers(evt);
  func(pos[0], pos[1], rel_pos_x, rel_pos_y, modifiers);
 }
 GodotEventListeners.add(window, "mousemove", move_cb, false);
}

function _godot_js_input_mouse_wheel_cb(callback) {
 const func = GodotRuntime.get_func(callback);
 function wheel_cb(evt) {
  if (func(evt["deltaX"] || 0, evt["deltaY"] || 0)) {
   evt.preventDefault();
  }
 }
 GodotEventListeners.add(GodotConfig.canvas, "wheel", wheel_cb, false);
}

function _godot_js_input_paste_cb(callback) {
 const func = GodotRuntime.get_func(callback);
 GodotEventListeners.add(window, "paste", function(evt) {
  const text = evt.clipboardData.getData("text");
  const ptr = GodotRuntime.allocString(text);
  func(ptr);
  GodotRuntime.free(ptr);
 }, false);
}

function _godot_js_input_touch_cb(callback, ids, coords) {
 const func = GodotRuntime.get_func(callback);
 const canvas = GodotConfig.canvas;
 function touch_cb(type, evt) {
  if (type === 0) {
   GodotConfig.canvas.focus();
  }
  const rect = canvas.getBoundingClientRect();
  const touches = evt.changedTouches;
  for (let i = 0; i < touches.length; i++) {
   const touch = touches[i];
   const pos = GodotInput.computePosition(touch, rect);
   GodotRuntime.setHeapValue(coords + i * 2 * 8, pos[0], "double");
   GodotRuntime.setHeapValue(coords + (i * 2 + 1) * 8, pos[1], "double");
   GodotRuntime.setHeapValue(ids + i * 4, touch.identifier, "i32");
  }
  func(type, touches.length);
  if (evt.cancelable) {
   evt.preventDefault();
  }
 }
 GodotEventListeners.add(canvas, "touchstart", touch_cb.bind(null, 0), false);
 GodotEventListeners.add(canvas, "touchend", touch_cb.bind(null, 1), false);
 GodotEventListeners.add(canvas, "touchcancel", touch_cb.bind(null, 1), false);
 GodotEventListeners.add(canvas, "touchmove", touch_cb.bind(null, 2), false);
}

function _godot_js_input_vibrate_handheld(p_duration_ms) {
 if (typeof navigator.vibrate !== "function") {
  GodotRuntime.print("This browser does not support vibration.");
 } else {
  navigator.vibrate(p_duration_ms);
 }
}

function _godot_js_os_download_buffer(p_ptr, p_size, p_name, p_mime) {
 const buf = GodotRuntime.heapSlice(GROWABLE_HEAP_I8(), p_ptr, p_size);
 const name = GodotRuntime.parseString(p_name);
 const mime = GodotRuntime.parseString(p_mime);
 const blob = new Blob([ buf ], {
  type: mime
 });
 const url = window.URL.createObjectURL(blob);
 const a = document.createElement("a");
 a.href = url;
 a.download = name;
 a.style.display = "none";
 document.body.appendChild(a);
 a.click();
 a.remove();
 window.URL.revokeObjectURL(url);
}

function _godot_js_os_execute(p_json) {
 const json_args = GodotRuntime.parseString(p_json);
 const args = JSON.parse(json_args);
 if (GodotConfig.on_execute) {
  GodotConfig.on_execute(args);
  return 0;
 }
 return 1;
}

function _godot_js_os_finish_async(p_callback) {
 const func = GodotRuntime.get_func(p_callback);
 GodotOS.finish_async(func);
}

function _godot_js_os_fs_is_persistent() {
 return GodotFS.is_persistent();
}

function _godot_js_os_fs_sync(callback) {
 const func = GodotRuntime.get_func(callback);
 GodotOS._fs_sync_promise = GodotFS.sync();
 GodotOS._fs_sync_promise.then(function(err) {
  func();
 });
}

function _godot_js_os_hw_concurrency_get() {
 const concurrency = navigator.hardwareConcurrency || 1;
 return concurrency < 2 ? concurrency : 2;
}

function _godot_js_os_request_quit_cb(p_callback) {
 GodotOS.request_quit = GodotRuntime.get_func(p_callback);
}

function _godot_js_os_shell_open(p_uri) {
 window.open(GodotRuntime.parseString(p_uri), "_blank");
}

var GodotPWA = {
 hasUpdate: false,
 updateState: function(cb, reg) {
  if (!reg) {
   return;
  }
  if (!reg.active) {
   return;
  }
  if (reg.waiting) {
   GodotPWA.hasUpdate = true;
   cb();
  }
  GodotEventListeners.add(reg, "updatefound", function() {
   const installing = reg.installing;
   GodotEventListeners.add(installing, "statechange", function() {
    if (installing.state === "installed") {
     GodotPWA.hasUpdate = true;
     cb();
    }
   });
  });
 }
};

function _godot_js_pwa_cb(p_update_cb) {
 if ("serviceWorker" in navigator) {
  const cb = GodotRuntime.get_func(p_update_cb);
  navigator.serviceWorker.getRegistration().then(GodotPWA.updateState.bind(null, cb));
 }
}

function _godot_js_pwa_update() {
 if ("serviceWorker" in navigator && GodotPWA.hasUpdate) {
  navigator.serviceWorker.getRegistration().then(function(reg) {
   if (!reg || !reg.waiting) {
    return;
   }
   reg.waiting.postMessage("update");
  });
  return 0;
 }
 return 1;
}

var GodotRTCDataChannel = {
 connect: function(p_id, p_on_open, p_on_message, p_on_error, p_on_close) {
  const ref = IDHandler.get(p_id);
  if (!ref) {
   return;
  }
  ref.binaryType = "arraybuffer";
  ref.onopen = function(event) {
   p_on_open();
  };
  ref.onclose = function(event) {
   p_on_close();
  };
  ref.onerror = function(event) {
   p_on_error();
  };
  ref.onmessage = function(event) {
   let buffer;
   let is_string = 0;
   if (event.data instanceof ArrayBuffer) {
    buffer = new Uint8Array(event.data);
   } else if (event.data instanceof Blob) {
    GodotRuntime.error("Blob type not supported");
    return;
   } else if (typeof event.data === "string") {
    is_string = 1;
    const enc = new TextEncoder("utf-8");
    buffer = new Uint8Array(enc.encode(event.data));
   } else {
    GodotRuntime.error("Unknown message type");
    return;
   }
   const len = buffer.length * buffer.BYTES_PER_ELEMENT;
   const out = GodotRuntime.malloc(len);
   GROWABLE_HEAP_U8().set(buffer, out);
   p_on_message(out, len, is_string);
   GodotRuntime.free(out);
  };
 },
 close: function(p_id) {
  const ref = IDHandler.get(p_id);
  if (!ref) {
   return;
  }
  ref.onopen = null;
  ref.onmessage = null;
  ref.onerror = null;
  ref.onclose = null;
  ref.close();
 },
 get_prop: function(p_id, p_prop, p_def) {
  const ref = IDHandler.get(p_id);
  return ref && ref[p_prop] !== undefined ? ref[p_prop] : p_def;
 }
};

function _godot_js_rtc_datachannel_close(p_id) {
 const ref = IDHandler.get(p_id);
 if (!ref) {
  return;
 }
 GodotRTCDataChannel.close(p_id);
}

function _godot_js_rtc_datachannel_connect(p_id, p_ref, p_on_open, p_on_message, p_on_error, p_on_close) {
 const onopen = GodotRuntime.get_func(p_on_open).bind(null, p_ref);
 const onmessage = GodotRuntime.get_func(p_on_message).bind(null, p_ref);
 const onerror = GodotRuntime.get_func(p_on_error).bind(null, p_ref);
 const onclose = GodotRuntime.get_func(p_on_close).bind(null, p_ref);
 GodotRTCDataChannel.connect(p_id, onopen, onmessage, onerror, onclose);
}

function _godot_js_rtc_datachannel_destroy(p_id) {
 GodotRTCDataChannel.close(p_id);
 IDHandler.remove(p_id);
}

function _godot_js_rtc_datachannel_get_buffered_amount(p_id) {
 return GodotRTCDataChannel.get_prop(p_id, "bufferedAmount", 0);
}

function _godot_js_rtc_datachannel_id_get(p_id) {
 return GodotRTCDataChannel.get_prop(p_id, "id", 65535);
}

function _godot_js_rtc_datachannel_is_negotiated(p_id) {
 return GodotRTCDataChannel.get_prop(p_id, "negotiated", 65535);
}

function _godot_js_rtc_datachannel_is_ordered(p_id) {
 return GodotRTCDataChannel.get_prop(p_id, "ordered", true);
}

function _godot_js_rtc_datachannel_label_get(p_id) {
 const ref = IDHandler.get(p_id);
 if (!ref || !ref.label) {
  return 0;
 }
 return GodotRuntime.allocString(ref.label);
}

function _godot_js_rtc_datachannel_max_packet_lifetime_get(p_id) {
 const ref = IDHandler.get(p_id);
 if (!ref) {
  return 65535;
 }
 if (ref["maxPacketLifeTime"] !== undefined) {
  return ref["maxPacketLifeTime"];
 } else if (ref["maxRetransmitTime"] !== undefined) {
  return ref["maxRetransmitTime"];
 }
 return 65535;
}

function _godot_js_rtc_datachannel_max_retransmits_get(p_id) {
 return GodotRTCDataChannel.get_prop(p_id, "maxRetransmits", 65535);
}

function _godot_js_rtc_datachannel_protocol_get(p_id) {
 const ref = IDHandler.get(p_id);
 if (!ref || !ref.protocol) {
  return 0;
 }
 return GodotRuntime.allocString(ref.protocol);
}

function _godot_js_rtc_datachannel_ready_state_get(p_id) {
 const ref = IDHandler.get(p_id);
 if (!ref) {
  return 3;
 }
 switch (ref.readyState) {
 case "connecting":
  return 0;

 case "open":
  return 1;

 case "closing":
  return 2;

 case "closed":
 default:
  return 3;
 }
}

function _godot_js_rtc_datachannel_send(p_id, p_buffer, p_length, p_raw) {
 const ref = IDHandler.get(p_id);
 if (!ref) {
  return 1;
 }
 const bytes_array = new Uint8Array(p_length);
 for (let i = 0; i < p_length; i++) {
  bytes_array[i] = GodotRuntime.getHeapValue(p_buffer + i, "i8");
 }
 if (p_raw) {
  ref.send(bytes_array.buffer);
 } else {
  const string = new TextDecoder("utf-8").decode(bytes_array);
  ref.send(string);
 }
 return 0;
}

var GodotRTCPeerConnection = {
 ConnectionState: {
  new: 0,
  connecting: 1,
  connected: 2,
  disconnected: 3,
  failed: 4,
  closed: 5
 },
 ConnectionStateCompat: {
  new: 0,
  checking: 1,
  connected: 2,
  completed: 2,
  disconnected: 3,
  failed: 4,
  closed: 5
 },
 IceGatheringState: {
  new: 0,
  gathering: 1,
  complete: 2
 },
 SignalingState: {
  stable: 0,
  "have-local-offer": 1,
  "have-remote-offer": 2,
  "have-local-pranswer": 3,
  "have-remote-pranswer": 4,
  closed: 5
 },
 create: function(config, onConnectionChange, onSignalingChange, onIceGatheringChange, onIceCandidate, onDataChannel) {
  let conn = null;
  try {
   conn = new RTCPeerConnection(config);
  } catch (e) {
   GodotRuntime.error(e);
   return 0;
  }
  const id = IDHandler.add(conn);
  if ("connectionState" in conn && conn["connectionState"] !== undefined) {
   conn.onconnectionstatechange = function(event) {
    if (!IDHandler.get(id)) {
     return;
    }
    onConnectionChange(GodotRTCPeerConnection.ConnectionState[conn.connectionState] || 0);
   };
  } else {
   conn.oniceconnectionstatechange = function(event) {
    if (!IDHandler.get(id)) {
     return;
    }
    onConnectionChange(GodotRTCPeerConnection.ConnectionStateCompat[conn.iceConnectionState] || 0);
   };
  }
  conn.onicegatheringstatechange = function(event) {
   if (!IDHandler.get(id)) {
    return;
   }
   onIceGatheringChange(GodotRTCPeerConnection.IceGatheringState[conn.iceGatheringState] || 0);
  };
  conn.onsignalingstatechange = function(event) {
   if (!IDHandler.get(id)) {
    return;
   }
   onSignalingChange(GodotRTCPeerConnection.SignalingState[conn.signalingState] || 0);
  };
  conn.onicecandidate = function(event) {
   if (!IDHandler.get(id)) {
    return;
   }
   const c = event.candidate;
   if (!c || !c.candidate) {
    return;
   }
   const candidate_str = GodotRuntime.allocString(c.candidate);
   const mid_str = GodotRuntime.allocString(c.sdpMid);
   onIceCandidate(mid_str, c.sdpMLineIndex, candidate_str);
   GodotRuntime.free(candidate_str);
   GodotRuntime.free(mid_str);
  };
  conn.ondatachannel = function(event) {
   if (!IDHandler.get(id)) {
    return;
   }
   const cid = IDHandler.add(event.channel);
   onDataChannel(cid);
  };
  return id;
 },
 destroy: function(p_id) {
  const conn = IDHandler.get(p_id);
  if (!conn) {
   return;
  }
  conn.onconnectionstatechange = null;
  conn.oniceconnectionstatechange = null;
  conn.onicegatheringstatechange = null;
  conn.onsignalingstatechange = null;
  conn.onicecandidate = null;
  conn.ondatachannel = null;
  IDHandler.remove(p_id);
 },
 onsession: function(p_id, callback, session) {
  if (!IDHandler.get(p_id)) {
   return;
  }
  const type_str = GodotRuntime.allocString(session.type);
  const sdp_str = GodotRuntime.allocString(session.sdp);
  callback(type_str, sdp_str);
  GodotRuntime.free(type_str);
  GodotRuntime.free(sdp_str);
 },
 onerror: function(p_id, callback, error) {
  const ref = IDHandler.get(p_id);
  if (!ref) {
   return;
  }
  GodotRuntime.error(error);
  callback();
 }
};

function _godot_js_rtc_pc_close(p_id) {
 const ref = IDHandler.get(p_id);
 if (!ref) {
  return;
 }
 ref.close();
}

function _godot_js_rtc_pc_create(p_config, p_ref, p_on_connection_state_change, p_on_ice_gathering_state_change, p_on_signaling_state_change, p_on_ice_candidate, p_on_datachannel) {
 const wrap = function(p_func) {
  return GodotRuntime.get_func(p_func).bind(null, p_ref);
 };
 return GodotRTCPeerConnection.create(JSON.parse(GodotRuntime.parseString(p_config)), wrap(p_on_connection_state_change), wrap(p_on_signaling_state_change), wrap(p_on_ice_gathering_state_change), wrap(p_on_ice_candidate), wrap(p_on_datachannel));
}

function _godot_js_rtc_pc_datachannel_create(p_id, p_label, p_config) {
 try {
  const ref = IDHandler.get(p_id);
  if (!ref) {
   return 0;
  }
  const label = GodotRuntime.parseString(p_label);
  const config = JSON.parse(GodotRuntime.parseString(p_config));
  const channel = ref.createDataChannel(label, config);
  return IDHandler.add(channel);
 } catch (e) {
  GodotRuntime.error(e);
  return 0;
 }
}

function _godot_js_rtc_pc_destroy(p_id) {
 GodotRTCPeerConnection.destroy(p_id);
}

function _godot_js_rtc_pc_ice_candidate_add(p_id, p_mid_name, p_mline_idx, p_sdp) {
 const ref = IDHandler.get(p_id);
 if (!ref) {
  return;
 }
 const sdpMidName = GodotRuntime.parseString(p_mid_name);
 const sdpName = GodotRuntime.parseString(p_sdp);
 ref.addIceCandidate(new RTCIceCandidate({
  "candidate": sdpName,
  "sdpMid": sdpMidName,
  "sdpMlineIndex": p_mline_idx
 }));
}

function _godot_js_rtc_pc_local_description_set(p_id, p_type, p_sdp, p_obj, p_on_error) {
 const ref = IDHandler.get(p_id);
 if (!ref) {
  return;
 }
 const type = GodotRuntime.parseString(p_type);
 const sdp = GodotRuntime.parseString(p_sdp);
 const onerror = GodotRuntime.get_func(p_on_error).bind(null, p_obj);
 ref.setLocalDescription({
  "sdp": sdp,
  "type": type
 }).catch(function(error) {
  GodotRTCPeerConnection.onerror(p_id, onerror, error);
 });
}

function _godot_js_rtc_pc_offer_create(p_id, p_obj, p_on_session, p_on_error) {
 const ref = IDHandler.get(p_id);
 if (!ref) {
  return;
 }
 const onsession = GodotRuntime.get_func(p_on_session).bind(null, p_obj);
 const onerror = GodotRuntime.get_func(p_on_error).bind(null, p_obj);
 ref.createOffer().then(function(session) {
  GodotRTCPeerConnection.onsession(p_id, onsession, session);
 }).catch(function(error) {
  GodotRTCPeerConnection.onerror(p_id, onerror, error);
 });
}

function _godot_js_rtc_pc_remote_description_set(p_id, p_type, p_sdp, p_obj, p_session_created, p_on_error) {
 const ref = IDHandler.get(p_id);
 if (!ref) {
  return;
 }
 const type = GodotRuntime.parseString(p_type);
 const sdp = GodotRuntime.parseString(p_sdp);
 const onerror = GodotRuntime.get_func(p_on_error).bind(null, p_obj);
 const onsession = GodotRuntime.get_func(p_session_created).bind(null, p_obj);
 ref.setRemoteDescription({
  "sdp": sdp,
  "type": type
 }).then(function() {
  if (type !== "offer") {
   return Promise.resolve();
  }
  return ref.createAnswer().then(function(session) {
   GodotRTCPeerConnection.onsession(p_id, onsession, session);
  });
 }).catch(function(error) {
  GodotRTCPeerConnection.onerror(p_id, onerror, error);
 });
}

function _godot_js_tts_get_voices(p_callback) {
 const func = GodotRuntime.get_func(p_callback);
 try {
  const arr = [];
  const voices = window.speechSynthesis.getVoices();
  for (let i = 0; i < voices.length; i++) {
   arr.push(`${voices[i].lang};${voices[i].name}`);
  }
  const c_ptr = GodotRuntime.allocStringArray(arr);
  func(arr.length, c_ptr);
  GodotRuntime.freeStringArray(c_ptr, arr.length);
 } catch (e) {}
}

function _godot_js_tts_is_paused() {
 return window.speechSynthesis.paused;
}

function _godot_js_tts_is_speaking() {
 return window.speechSynthesis.speaking;
}

function _godot_js_tts_pause() {
 window.speechSynthesis.pause();
}

function _godot_js_tts_resume() {
 window.speechSynthesis.resume();
}

function _godot_js_tts_speak(p_text, p_voice, p_volume, p_pitch, p_rate, p_utterance_id, p_callback) {
 const func = GodotRuntime.get_func(p_callback);
 function listener_end(evt) {
  evt.currentTarget.cb(1, evt.currentTarget.id, 0);
 }
 function listener_start(evt) {
  evt.currentTarget.cb(0, evt.currentTarget.id, 0);
 }
 function listener_error(evt) {
  evt.currentTarget.cb(2, evt.currentTarget.id, 0);
 }
 function listener_bound(evt) {
  evt.currentTarget.cb(3, evt.currentTarget.id, evt.charIndex);
 }
 const utterance = new SpeechSynthesisUtterance(GodotRuntime.parseString(p_text));
 utterance.rate = p_rate;
 utterance.pitch = p_pitch;
 utterance.volume = p_volume / 100;
 utterance.addEventListener("end", listener_end);
 utterance.addEventListener("start", listener_start);
 utterance.addEventListener("error", listener_error);
 utterance.addEventListener("boundary", listener_bound);
 utterance.id = p_utterance_id;
 utterance.cb = func;
 const voice = GodotRuntime.parseString(p_voice);
 const voices = window.speechSynthesis.getVoices();
 for (let i = 0; i < voices.length; i++) {
  if (voices[i].name === voice) {
   utterance.voice = voices[i];
   break;
  }
 }
 window.speechSynthesis.resume();
 window.speechSynthesis.speak(utterance);
}

function _godot_js_tts_stop() {
 window.speechSynthesis.cancel();
 window.speechSynthesis.resume();
}

var GodotWebSocket = {
 _onopen: function(p_id, callback, event) {
  const ref = IDHandler.get(p_id);
  if (!ref) {
   return;
  }
  const c_str = GodotRuntime.allocString(ref.protocol);
  callback(c_str);
  GodotRuntime.free(c_str);
 },
 _onmessage: function(p_id, callback, event) {
  const ref = IDHandler.get(p_id);
  if (!ref) {
   return;
  }
  let buffer;
  let is_string = 0;
  if (event.data instanceof ArrayBuffer) {
   buffer = new Uint8Array(event.data);
  } else if (event.data instanceof Blob) {
   GodotRuntime.error("Blob type not supported");
   return;
  } else if (typeof event.data === "string") {
   is_string = 1;
   const enc = new TextEncoder("utf-8");
   buffer = new Uint8Array(enc.encode(event.data));
  } else {
   GodotRuntime.error("Unknown message type");
   return;
  }
  const len = buffer.length * buffer.BYTES_PER_ELEMENT;
  const out = GodotRuntime.malloc(len);
  GROWABLE_HEAP_U8().set(buffer, out);
  callback(out, len, is_string);
  GodotRuntime.free(out);
 },
 _onerror: function(p_id, callback, event) {
  const ref = IDHandler.get(p_id);
  if (!ref) {
   return;
  }
  callback();
 },
 _onclose: function(p_id, callback, event) {
  const ref = IDHandler.get(p_id);
  if (!ref) {
   return;
  }
  const c_str = GodotRuntime.allocString(event.reason);
  callback(event.code, c_str, event.wasClean ? 1 : 0);
  GodotRuntime.free(c_str);
 },
 send: function(p_id, p_data) {
  const ref = IDHandler.get(p_id);
  if (!ref || ref.readyState !== ref.OPEN) {
   return 1;
  }
  ref.send(p_data);
  return 0;
 },
 bufferedAmount: function(p_id) {
  const ref = IDHandler.get(p_id);
  if (!ref) {
   return 0;
  }
  return ref.bufferedAmount;
 },
 create: function(socket, p_on_open, p_on_message, p_on_error, p_on_close) {
  const id = IDHandler.add(socket);
  socket.onopen = GodotWebSocket._onopen.bind(null, id, p_on_open);
  socket.onmessage = GodotWebSocket._onmessage.bind(null, id, p_on_message);
  socket.onerror = GodotWebSocket._onerror.bind(null, id, p_on_error);
  socket.onclose = GodotWebSocket._onclose.bind(null, id, p_on_close);
  return id;
 },
 close: function(p_id, p_code, p_reason) {
  const ref = IDHandler.get(p_id);
  if (ref && ref.readyState < ref.CLOSING) {
   const code = p_code;
   const reason = GodotRuntime.parseString(p_reason);
   ref.close(code, reason);
  }
 },
 destroy: function(p_id) {
  const ref = IDHandler.get(p_id);
  if (!ref) {
   return;
  }
  GodotWebSocket.close(p_id, 3001, "destroyed");
  IDHandler.remove(p_id);
  ref.onopen = null;
  ref.onmessage = null;
  ref.onerror = null;
  ref.onclose = null;
 }
};

function _godot_js_websocket_buffered_amount(p_id) {
 return GodotWebSocket.bufferedAmount(p_id);
}

function _godot_js_websocket_close(p_id, p_code, p_reason) {
 const code = p_code;
 const reason = GodotRuntime.parseString(p_reason);
 GodotWebSocket.close(p_id, code, reason);
}

function _godot_js_websocket_create(p_ref, p_url, p_proto, p_on_open, p_on_message, p_on_error, p_on_close) {
 const on_open = GodotRuntime.get_func(p_on_open).bind(null, p_ref);
 const on_message = GodotRuntime.get_func(p_on_message).bind(null, p_ref);
 const on_error = GodotRuntime.get_func(p_on_error).bind(null, p_ref);
 const on_close = GodotRuntime.get_func(p_on_close).bind(null, p_ref);
 const url = GodotRuntime.parseString(p_url);
 const protos = GodotRuntime.parseString(p_proto);
 let socket = null;
 try {
  if (protos) {
   socket = new WebSocket(url, protos.split(","));
  } else {
   socket = new WebSocket(url);
  }
 } catch (e) {
  return 0;
 }
 socket.binaryType = "arraybuffer";
 return GodotWebSocket.create(socket, on_open, on_message, on_error, on_close);
}

function _godot_js_websocket_destroy(p_id) {
 GodotWebSocket.destroy(p_id);
}

function _godot_js_websocket_send(p_id, p_buf, p_buf_len, p_raw) {
 const bytes_array = new Uint8Array(p_buf_len);
 let i = 0;
 for (i = 0; i < p_buf_len; i++) {
  bytes_array[i] = GodotRuntime.getHeapValue(p_buf + i, "i8");
 }
 let out = bytes_array.buffer;
 if (!p_raw) {
  out = new TextDecoder("utf-8").decode(bytes_array);
 }
 return GodotWebSocket.send(p_id, out);
}

var GodotJSWrapper = {
 proxies: null,
 cb_ret: null,
 MyProxy: function(val) {
  const id = IDHandler.add(this);
  GodotJSWrapper.proxies.set(val, id);
  let refs = 1;
  this.ref = function() {
   refs++;
  };
  this.unref = function() {
   refs--;
   if (refs === 0) {
    IDHandler.remove(id);
    GodotJSWrapper.proxies.delete(val);
   }
  };
  this.get_val = function() {
   return val;
  };
  this.get_id = function() {
   return id;
  };
 },
 get_proxied: function(val) {
  const id = GodotJSWrapper.proxies.get(val);
  if (id === undefined) {
   const proxy = new GodotJSWrapper.MyProxy(val);
   return proxy.get_id();
  }
  IDHandler.get(id).ref();
  return id;
 },
 get_proxied_value: function(id) {
  const proxy = IDHandler.get(id);
  if (proxy === undefined) {
   return undefined;
  }
  return proxy.get_val();
 },
 variant2js: function(type, val) {
  switch (type) {
  case 0:
   return null;

  case 1:
   return !!GodotRuntime.getHeapValue(val, "i64");

  case 2:
   return GodotRuntime.getHeapValue(val, "i64");

  case 3:
   return GodotRuntime.getHeapValue(val, "double");

  case 4:
   return GodotRuntime.parseString(GodotRuntime.getHeapValue(val, "*"));

  case 24:
   return GodotJSWrapper.get_proxied_value(GodotRuntime.getHeapValue(val, "i64"));

  default:
   return undefined;
  }
 },
 js2variant: function(p_val, p_exchange) {
  if (p_val === undefined || p_val === null) {
   return 0;
  }
  const type = typeof p_val;
  if (type === "boolean") {
   GodotRuntime.setHeapValue(p_exchange, p_val, "i64");
   return 1;
  } else if (type === "number") {
   if (Number.isInteger(p_val)) {
    GodotRuntime.setHeapValue(p_exchange, p_val, "i64");
    return 2;
   }
   GodotRuntime.setHeapValue(p_exchange, p_val, "double");
   return 3;
  } else if (type === "string") {
   const c_str = GodotRuntime.allocString(p_val);
   GodotRuntime.setHeapValue(p_exchange, c_str, "*");
   return 4;
  }
  const id = GodotJSWrapper.get_proxied(p_val);
  GodotRuntime.setHeapValue(p_exchange, id, "i64");
  return 24;
 }
};

function _godot_js_wrapper_create_cb(p_ref, p_func) {
 const func = GodotRuntime.get_func(p_func);
 let id = 0;
 const cb = function() {
  if (!GodotJSWrapper.get_proxied_value(id)) {
   return undefined;
  }
  GodotJSWrapper.cb_ret = null;
  const args = Array.from(arguments);
  func(p_ref, GodotJSWrapper.get_proxied(args), args.length);
  const ret = GodotJSWrapper.cb_ret;
  GodotJSWrapper.cb_ret = null;
  return ret;
 };
 id = GodotJSWrapper.get_proxied(cb);
 return id;
}

function _godot_js_wrapper_create_object(p_object, p_args, p_argc, p_convert_callback, p_exchange, p_lock, p_free_lock_callback) {
 const name = GodotRuntime.parseString(p_object);
 if (typeof window[name] === "undefined") {
  return -1;
 }
 const convert = GodotRuntime.get_func(p_convert_callback);
 const freeLock = GodotRuntime.get_func(p_free_lock_callback);
 const args = new Array(p_argc);
 for (let i = 0; i < p_argc; i++) {
  const type = convert(p_args, i, p_exchange, p_lock);
  const lock = GodotRuntime.getHeapValue(p_lock, "*");
  args[i] = GodotJSWrapper.variant2js(type, p_exchange);
  if (lock) {
   freeLock(p_lock, type);
  }
 }
 try {
  const res = new window[name](...args);
  return GodotJSWrapper.js2variant(res, p_exchange);
 } catch (e) {
  GodotRuntime.error(`Error calling constructor ${name} with args:`, args, "error:", e);
  return -1;
 }
}

function _godot_js_wrapper_interface_get(p_name) {
 const name = GodotRuntime.parseString(p_name);
 if (typeof window[name] !== "undefined") {
  return GodotJSWrapper.get_proxied(window[name]);
 }
 return 0;
}

function _godot_js_wrapper_object_call(p_id, p_method, p_args, p_argc, p_convert_callback, p_exchange, p_lock, p_free_lock_callback) {
 const obj = GodotJSWrapper.get_proxied_value(p_id);
 if (obj === undefined) {
  return -1;
 }
 const method = GodotRuntime.parseString(p_method);
 const convert = GodotRuntime.get_func(p_convert_callback);
 const freeLock = GodotRuntime.get_func(p_free_lock_callback);
 const args = new Array(p_argc);
 for (let i = 0; i < p_argc; i++) {
  const type = convert(p_args, i, p_exchange, p_lock);
  const lock = GodotRuntime.getHeapValue(p_lock, "*");
  args[i] = GodotJSWrapper.variant2js(type, p_exchange);
  if (lock) {
   freeLock(p_lock, type);
  }
 }
 try {
  const res = obj[method](...args);
  return GodotJSWrapper.js2variant(res, p_exchange);
 } catch (e) {
  GodotRuntime.error(`Error calling method ${method} on:`, obj, "error:", e);
  return -1;
 }
}

function _godot_js_wrapper_object_get(p_id, p_exchange, p_prop) {
 const obj = GodotJSWrapper.get_proxied_value(p_id);
 if (obj === undefined) {
  return 0;
 }
 if (p_prop) {
  const prop = GodotRuntime.parseString(p_prop);
  try {
   return GodotJSWrapper.js2variant(obj[prop], p_exchange);
  } catch (e) {
   GodotRuntime.error(`Error getting variable ${prop} on object`, obj);
   return 0;
  }
 }
 return GodotJSWrapper.js2variant(obj, p_exchange);
}

function _godot_js_wrapper_object_getvar(p_id, p_type, p_exchange) {
 const obj = GodotJSWrapper.get_proxied_value(p_id);
 if (obj === undefined) {
  return -1;
 }
 const prop = GodotJSWrapper.variant2js(p_type, p_exchange);
 if (prop === undefined || prop === null) {
  return -1;
 }
 try {
  return GodotJSWrapper.js2variant(obj[prop], p_exchange);
 } catch (e) {
  GodotRuntime.error(`Error getting variable ${prop} on object`, obj, e);
  return -1;
 }
}

function _godot_js_wrapper_object_set(p_id, p_name, p_type, p_exchange) {
 const obj = GodotJSWrapper.get_proxied_value(p_id);
 if (obj === undefined) {
  return;
 }
 const name = GodotRuntime.parseString(p_name);
 try {
  obj[name] = GodotJSWrapper.variant2js(p_type, p_exchange);
 } catch (e) {
  GodotRuntime.error(`Error setting variable ${name} on object`, obj);
 }
}

function _godot_js_wrapper_object_set_cb_ret(p_val_type, p_val_ex) {
 GodotJSWrapper.cb_ret = GodotJSWrapper.variant2js(p_val_type, p_val_ex);
}

function _godot_js_wrapper_object_setvar(p_id, p_key_type, p_key_ex, p_val_type, p_val_ex) {
 const obj = GodotJSWrapper.get_proxied_value(p_id);
 if (obj === undefined) {
  return -1;
 }
 const key = GodotJSWrapper.variant2js(p_key_type, p_key_ex);
 try {
  obj[key] = GodotJSWrapper.variant2js(p_val_type, p_val_ex);
  return 0;
 } catch (e) {
  GodotRuntime.error(`Error setting variable ${key} on object`, obj);
  return -1;
 }
}

function _godot_js_wrapper_object_unref(p_id) {
 const proxy = IDHandler.get(p_id);
 if (proxy !== undefined) {
  proxy.unref();
 }
}

var GodotWebGL2 = {};

function _godot_webgl2_glFramebufferTextureMultiviewOVR(target, attachment, texture, level, base_view_index, num_views) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(47, 1, target, attachment, texture, level, base_view_index, num_views);
 const context = GL.currentContext;
 if (typeof context.multiviewExt === "undefined") {
  const ext = context.GLctx.getExtension("OVR_multiview2");
  if (!ext) {
   console.error("Trying to call glFramebufferTextureMultiviewOVR() without the OVR_multiview2 extension");
   return;
  }
  context.multiviewExt = ext;
 }
 const ext = context.multiviewExt;
 ext.framebufferTextureMultiviewOVR(target, attachment, GL.textures[texture], level, base_view_index, num_views);
}

var GodotWebXR = {
 gl: null,
 session: null,
 gl_binding: null,
 layer: null,
 space: null,
 frame: null,
 pose: null,
 view_count: 1,
 input_sources: [ , , , , , , , , , , , , , , ,  ],
 touches: [ , , , ,  ],
 orig_requestAnimationFrame: null,
 requestAnimationFrame: callback => {
  if (GodotWebXR.session && GodotWebXR.space) {
   const onFrame = function(time, frame) {
    GodotWebXR.frame = frame;
    GodotWebXR.pose = frame.getViewerPose(GodotWebXR.space);
    callback(time);
    GodotWebXR.frame = null;
    GodotWebXR.pose = null;
   };
   GodotWebXR.session.requestAnimationFrame(onFrame);
  } else {
   GodotWebXR.orig_requestAnimationFrame(callback);
  }
 },
 monkeyPatchRequestAnimationFrame: enable => {
  if (GodotWebXR.orig_requestAnimationFrame === null) {
   GodotWebXR.orig_requestAnimationFrame = Browser.requestAnimationFrame;
  }
  Browser.requestAnimationFrame = enable ? GodotWebXR.requestAnimationFrame : GodotWebXR.orig_requestAnimationFrame;
 },
 pauseResumeMainLoop: () => {
  Browser.mainLoop.pause();
  runtimeKeepalivePush();
  window.setTimeout(function() {
   runtimeKeepalivePop();
   Browser.mainLoop.resume();
  }, 0);
 },
 getLayer: () => {
  const new_view_count = GodotWebXR.pose ? GodotWebXR.pose.views.length : 1;
  let layer = GodotWebXR.layer;
  if (layer && GodotWebXR.view_count === new_view_count) {
   return layer;
  }
  if (!GodotWebXR.session || !GodotWebXR.gl_binding) {
   return null;
  }
  const gl = GodotWebXR.gl;
  layer = GodotWebXR.gl_binding.createProjectionLayer({
   textureType: new_view_count > 1 ? "texture-array" : "texture",
   colorFormat: gl.RGBA8,
   depthFormat: gl.DEPTH_COMPONENT24
  });
  GodotWebXR.session.updateRenderState({
   layers: [ layer ]
  });
  GodotWebXR.layer = layer;
  GodotWebXR.view_count = new_view_count;
  return layer;
 },
 getSubImage: () => {
  if (!GodotWebXR.pose) {
   return null;
  }
  const layer = GodotWebXR.getLayer();
  if (layer === null) {
   return null;
  }
  return GodotWebXR.gl_binding.getViewSubImage(layer, GodotWebXR.pose.views[0]);
 },
 getTextureId: texture => {
  if (texture.name !== undefined) {
   return texture.name;
  }
  const id = GL.getNewId(GL.textures);
  texture.name = id;
  GL.textures[id] = texture;
  return id;
 },
 addInputSource: input_source => {
  let name = -1;
  if (input_source.targetRayMode === "tracked-pointer" && input_source.handedness === "left") {
   name = 0;
  } else if (input_source.targetRayMode === "tracked-pointer" && input_source.handedness === "right") {
   name = 1;
  } else {
   for (let i = 2; i < 16; i++) {
    if (!GodotWebXR.input_sources[i]) {
     name = i;
     break;
    }
   }
  }
  if (name >= 0) {
   GodotWebXR.input_sources[name] = input_source;
   input_source.name = name;
   if (input_source.targetRayMode === "screen") {
    let touch_index = -1;
    for (let i = 0; i < 5; i++) {
     if (!GodotWebXR.touches[i]) {
      touch_index = i;
      break;
     }
    }
    if (touch_index >= 0) {
     GodotWebXR.touches[touch_index] = input_source;
     input_source.touch_index = touch_index;
    }
   }
  }
  return name;
 },
 removeInputSource: input_source => {
  if (input_source.name !== undefined) {
   const name = input_source.name;
   if (name >= 0 && name < 16) {
    GodotWebXR.input_sources[name] = null;
   }
   if (input_source.touch_index !== undefined) {
    const touch_index = input_source.touch_index;
    if (touch_index >= 0 && touch_index < 5) {
     GodotWebXR.touches[touch_index] = null;
    }
   }
   return name;
  }
  return -1;
 },
 getInputSourceId: input_source => {
  if (input_source !== undefined) {
   return input_source.name;
  }
  return -1;
 },
 getTouchIndex: input_source => {
  if (input_source.touch_index !== undefined) {
   return input_source.touch_index;
  }
  return -1;
 }
};

function _godot_webxr_get_bounds_geometry(r_points) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(48, 1, r_points);
 if (!GodotWebXR.space || !GodotWebXR.space.boundsGeometry) {
  return 0;
 }
 const point_count = GodotWebXR.space.boundsGeometry.length;
 if (point_count === 0) {
  return 0;
 }
 const buf = GodotRuntime.malloc(point_count * 3 * 4);
 GodotRuntime.setHeapValue(buf, point_count, "i32");
 for (let i = 0; i < point_count; i++) {
  const point = GodotWebXR.space.boundsGeometry[i];
  GodotRuntime.setHeapValue(buf + (i * 3 + 1) * 4, point.x, "float");
  GodotRuntime.setHeapValue(buf + (i * 3 + 2) * 4, point.y, "float");
  GodotRuntime.setHeapValue(buf + (i * 3 + 3) * 4, point.z, "float");
 }
 GodotRuntime.setHeapValue(r_points, buf, "i32");
 return point_count;
}

function _godot_webxr_get_color_texture() {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(49, 1);
 const subimage = GodotWebXR.getSubImage();
 if (subimage === null) {
  return 0;
 }
 return GodotWebXR.getTextureId(subimage.colorTexture);
}

function _godot_webxr_get_depth_texture() {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(50, 1);
 const subimage = GodotWebXR.getSubImage();
 if (subimage === null) {
  return 0;
 }
 if (!subimage.depthStencilTexture) {
  return 0;
 }
 return GodotWebXR.getTextureId(subimage.depthStencilTexture);
}

function _godot_webxr_get_projection_for_view(p_view, r_transform) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(51, 1, p_view, r_transform);
 if (!GodotWebXR.session || !GodotWebXR.pose) {
  return false;
 }
 const matrix = GodotWebXR.pose.views[p_view].projectionMatrix;
 for (let i = 0; i < 16; i++) {
  GodotRuntime.setHeapValue(r_transform + i * 4, matrix[i], "float");
 }
 return true;
}

function _godot_webxr_get_render_target_size(r_size) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(52, 1, r_size);
 const subimage = GodotWebXR.getSubImage();
 if (subimage === null) {
  return false;
 }
 GodotRuntime.setHeapValue(r_size + 0, subimage.viewport.width, "i32");
 GodotRuntime.setHeapValue(r_size + 4, subimage.viewport.height, "i32");
 return true;
}

function _godot_webxr_get_transform_for_view(p_view, r_transform) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(53, 1, p_view, r_transform);
 if (!GodotWebXR.session || !GodotWebXR.pose) {
  return false;
 }
 const views = GodotWebXR.pose.views;
 let matrix;
 if (p_view >= 0) {
  matrix = views[p_view].transform.matrix;
 } else {
  matrix = GodotWebXR.pose.transform.matrix;
 }
 for (let i = 0; i < 16; i++) {
  GodotRuntime.setHeapValue(r_transform + i * 4, matrix[i], "float");
 }
 return true;
}

function _godot_webxr_get_velocity_texture() {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(54, 1);
 const subimage = GodotWebXR.getSubImage();
 if (subimage === null) {
  return 0;
 }
 if (!subimage.motionVectorTexture) {
  return 0;
 }
 return GodotWebXR.getTextureId(subimage.motionVectorTexture);
}

function _godot_webxr_get_view_count() {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(55, 1);
 if (!GodotWebXR.session || !GodotWebXR.pose) {
  return 1;
 }
 const view_count = GodotWebXR.pose.views.length;
 return view_count > 0 ? view_count : 1;
}

function _godot_webxr_get_visibility_state() {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(56, 1);
 if (!GodotWebXR.session || !GodotWebXR.session.visibilityState) {
  return 0;
 }
 return GodotRuntime.allocString(GodotWebXR.session.visibilityState);
}

function _godot_webxr_initialize(p_session_mode, p_required_features, p_optional_features, p_requested_reference_spaces, p_on_session_started, p_on_session_ended, p_on_session_failed, p_on_input_event, p_on_simple_event) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(57, 1, p_session_mode, p_required_features, p_optional_features, p_requested_reference_spaces, p_on_session_started, p_on_session_ended, p_on_session_failed, p_on_input_event, p_on_simple_event);
 GodotWebXR.monkeyPatchRequestAnimationFrame(true);
 const session_mode = GodotRuntime.parseString(p_session_mode);
 const required_features = GodotRuntime.parseString(p_required_features).split(",").map(s => s.trim()).filter(s => s !== "");
 const optional_features = GodotRuntime.parseString(p_optional_features).split(",").map(s => s.trim()).filter(s => s !== "");
 const requested_reference_space_types = GodotRuntime.parseString(p_requested_reference_spaces).split(",").map(s => s.trim());
 const onstarted = GodotRuntime.get_func(p_on_session_started);
 const onended = GodotRuntime.get_func(p_on_session_ended);
 const onfailed = GodotRuntime.get_func(p_on_session_failed);
 const oninputevent = GodotRuntime.get_func(p_on_input_event);
 const onsimpleevent = GodotRuntime.get_func(p_on_simple_event);
 const session_init = {};
 if (required_features.length > 0) {
  session_init["requiredFeatures"] = required_features;
 }
 if (optional_features.length > 0) {
  session_init["optionalFeatures"] = optional_features;
 }
 navigator.xr.requestSession(session_mode, session_init).then(function(session) {
  GodotWebXR.session = session;
  session.addEventListener("end", function(evt) {
   onended();
  });
  session.addEventListener("inputsourceschange", function(evt) {
   evt.added.forEach(GodotWebXR.addInputSource);
   evt.removed.forEach(GodotWebXR.removeInputSource);
  });
  [ "selectstart", "selectend", "squeezestart", "squeezeend" ].forEach((input_event, index) => {
   session.addEventListener(input_event, function(evt) {
    GodotWebXR.frame = evt.frame;
    oninputevent(index, GodotWebXR.getInputSourceId(evt.inputSource));
    GodotWebXR.frame = null;
   });
  });
  session.addEventListener("visibilitychange", function(evt) {
   const c_str = GodotRuntime.allocString("visibility_state_changed");
   onsimpleevent(c_str);
   GodotRuntime.free(c_str);
  });
  const gl_context_handle = _emscripten_webgl_get_current_context();
  const gl = GL.getContext(gl_context_handle).GLctx;
  GodotWebXR.gl = gl;
  gl.makeXRCompatible().then(function() {
   GodotWebXR.gl_binding = new XRWebGLBinding(session, gl);
   GodotWebXR.getLayer();
   function onReferenceSpaceSuccess(reference_space, reference_space_type) {
    GodotWebXR.space = reference_space;
    reference_space.onreset = function(evt) {
     const c_str = GodotRuntime.allocString("reference_space_reset");
     onsimpleevent(c_str);
     GodotRuntime.free(c_str);
    };
    GodotWebXR.pauseResumeMainLoop();
    window.setTimeout(function() {
     const c_str = GodotRuntime.allocString(reference_space_type);
     onstarted(c_str);
     GodotRuntime.free(c_str);
    }, 0);
   }
   function requestReferenceSpace() {
    const reference_space_type = requested_reference_space_types.shift();
    session.requestReferenceSpace(reference_space_type).then(refSpace => {
     onReferenceSpaceSuccess(refSpace, reference_space_type);
    }).catch(() => {
     if (requested_reference_space_types.length === 0) {
      const c_str = GodotRuntime.allocString("Unable to get any of the requested reference space types");
      onfailed(c_str);
      GodotRuntime.free(c_str);
     } else {
      requestReferenceSpace();
     }
    });
   }
   requestReferenceSpace();
  }).catch(function(error) {
   const c_str = GodotRuntime.allocString(`Unable to make WebGL context compatible with WebXR: ${error}`);
   onfailed(c_str);
   GodotRuntime.free(c_str);
  });
 }).catch(function(error) {
  const c_str = GodotRuntime.allocString(`Unable to start session: ${error}`);
  onfailed(c_str);
  GodotRuntime.free(c_str);
 });
}

function _godot_webxr_is_session_supported(p_session_mode, p_callback) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(58, 1, p_session_mode, p_callback);
 const session_mode = GodotRuntime.parseString(p_session_mode);
 const cb = GodotRuntime.get_func(p_callback);
 if (navigator.xr) {
  navigator.xr.isSessionSupported(session_mode).then(function(supported) {
   const c_str = GodotRuntime.allocString(session_mode);
   cb(c_str, supported ? 1 : 0);
   GodotRuntime.free(c_str);
  });
 } else {
  const c_str = GodotRuntime.allocString(session_mode);
  cb(c_str, 0);
  GodotRuntime.free(c_str);
 }
}

function _godot_webxr_is_supported() {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(59, 1);
 return !!navigator.xr;
}

function _godot_webxr_uninitialize() {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(60, 1);
 if (GodotWebXR.session) {
  GodotWebXR.session.end().catch(e => {});
 }
 GodotWebXR.session = null;
 GodotWebXR.gl_binding = null;
 GodotWebXR.layer = null;
 GodotWebXR.space = null;
 GodotWebXR.frame = null;
 GodotWebXR.pose = null;
 GodotWebXR.view_count = 1;
 GodotWebXR.input_sources = new Array(16);
 GodotWebXR.touches = new Array(5);
 GodotWebXR.monkeyPatchRequestAnimationFrame(false);
 GodotWebXR.pauseResumeMainLoop();
}

function _godot_webxr_update_input_source(p_input_source_id, r_target_pose, r_target_ray_mode, r_touch_index, r_has_grip_pose, r_grip_pose, r_has_standard_mapping, r_button_count, r_buttons, r_axes_count, r_axes) {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(61, 1, p_input_source_id, r_target_pose, r_target_ray_mode, r_touch_index, r_has_grip_pose, r_grip_pose, r_has_standard_mapping, r_button_count, r_buttons, r_axes_count, r_axes);
 if (!GodotWebXR.session || !GodotWebXR.frame) {
  return 0;
 }
 if (p_input_source_id < 0 || p_input_source_id >= GodotWebXR.input_sources.length || !GodotWebXR.input_sources[p_input_source_id]) {
  return false;
 }
 const input_source = GodotWebXR.input_sources[p_input_source_id];
 const frame = GodotWebXR.frame;
 const space = GodotWebXR.space;
 const target_pose = frame.getPose(input_source.targetRaySpace, space);
 if (!target_pose) {
  return false;
 }
 const target_pose_matrix = target_pose.transform.matrix;
 for (let i = 0; i < 16; i++) {
  GodotRuntime.setHeapValue(r_target_pose + i * 4, target_pose_matrix[i], "float");
 }
 let target_ray_mode = 0;
 switch (input_source.targetRayMode) {
 case "gaze":
  target_ray_mode = 1;
  break;

 case "tracked-pointer":
  target_ray_mode = 2;
  break;

 case "screen":
  target_ray_mode = 3;
  break;

 default:
 }
 GodotRuntime.setHeapValue(r_target_ray_mode, target_ray_mode, "i32");
 GodotRuntime.setHeapValue(r_touch_index, GodotWebXR.getTouchIndex(input_source), "i32");
 let has_grip_pose = false;
 if (input_source.gripSpace) {
  const grip_pose = frame.getPose(input_source.gripSpace, space);
  if (grip_pose) {
   const grip_pose_matrix = grip_pose.transform.matrix;
   for (let i = 0; i < 16; i++) {
    GodotRuntime.setHeapValue(r_grip_pose + i * 4, grip_pose_matrix[i], "float");
   }
   has_grip_pose = true;
  }
 }
 GodotRuntime.setHeapValue(r_has_grip_pose, has_grip_pose ? 1 : 0, "i32");
 let has_standard_mapping = false;
 let button_count = 0;
 let axes_count = 0;
 if (input_source.gamepad) {
  if (input_source.gamepad.mapping === "xr-standard") {
   has_standard_mapping = true;
  }
  button_count = Math.min(input_source.gamepad.buttons.length, 10);
  for (let i = 0; i < button_count; i++) {
   GodotRuntime.setHeapValue(r_buttons + i * 4, input_source.gamepad.buttons[i].value, "float");
  }
  axes_count = Math.min(input_source.gamepad.axes.length, 10);
  for (let i = 0; i < axes_count; i++) {
   GodotRuntime.setHeapValue(r_axes + i * 4, input_source.gamepad.axes[i], "float");
  }
 }
 GodotRuntime.setHeapValue(r_has_standard_mapping, has_standard_mapping ? 1 : 0, "i32");
 GodotRuntime.setHeapValue(r_button_count, button_count, "i32");
 GodotRuntime.setHeapValue(r_axes_count, axes_count, "i32");
 return true;
}

function _tzset_impl() {
 if (ENVIRONMENT_IS_PTHREAD) return _emscripten_proxy_to_main_thread_js(62, 1);
 var currentYear = new Date().getFullYear();
 var winter = new Date(currentYear, 0, 1);
 var summer = new Date(currentYear, 6, 1);
 var winterOffset = winter.getTimezoneOffset();
 var summerOffset = summer.getTimezoneOffset();
 var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
 GROWABLE_HEAP_I32()[__get_timezone() >> 2] = stdTimezoneOffset * 60;
 GROWABLE_HEAP_I32()[__get_daylight() >> 2] = Number(winterOffset != summerOffset);
 function extractZone(date) {
  var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
  return match ? match[1] : "GMT";
 }
 var winterName = extractZone(winter);
 var summerName = extractZone(summer);
 var winterNamePtr = allocateUTF8(winterName);
 var summerNamePtr = allocateUTF8(summerName);
 if (summerOffset < winterOffset) {
  GROWABLE_HEAP_I32()[__get_tzname() >> 2] = winterNamePtr;
  GROWABLE_HEAP_I32()[__get_tzname() + 4 >> 2] = summerNamePtr;
 } else {
  GROWABLE_HEAP_I32()[__get_tzname() >> 2] = summerNamePtr;
  GROWABLE_HEAP_I32()[__get_tzname() + 4 >> 2] = winterNamePtr;
 }
}

function _tzset() {
 if (_tzset.called) return;
 _tzset.called = true;
 _tzset_impl();
}

function _localtime_r(time, tmPtr) {
 _tzset();
 var date = new Date(GROWABLE_HEAP_I32()[time >> 2] * 1e3);
 GROWABLE_HEAP_I32()[tmPtr >> 2] = date.getSeconds();
 GROWABLE_HEAP_I32()[tmPtr + 4 >> 2] = date.getMinutes();
 GROWABLE_HEAP_I32()[tmPtr + 8 >> 2] = date.getHours();
 GROWABLE_HEAP_I32()[tmPtr + 12 >> 2] = date.getDate();
 GROWABLE_HEAP_I32()[tmPtr + 16 >> 2] = date.getMonth();
 GROWABLE_HEAP_I32()[tmPtr + 20 >> 2] = date.getFullYear() - 1900;
 GROWABLE_HEAP_I32()[tmPtr + 24 >> 2] = date.getDay();
 var start = new Date(date.getFullYear(), 0, 1);
 var yday = (date.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24) | 0;
 GROWABLE_HEAP_I32()[tmPtr + 28 >> 2] = yday;
 GROWABLE_HEAP_I32()[tmPtr + 36 >> 2] = -(date.getTimezoneOffset() * 60);
 var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
 var winterOffset = start.getTimezoneOffset();
 var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
 GROWABLE_HEAP_I32()[tmPtr + 32 >> 2] = dst;
 var zonePtr = GROWABLE_HEAP_I32()[__get_tzname() + (dst ? 4 : 0) >> 2];
 GROWABLE_HEAP_I32()[tmPtr + 40 >> 2] = zonePtr;
 return tmPtr;
}

function _setTempRet0(val) {
 setTempRet0(val);
}

function __isLeapYear(year) {
 return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function __arraySum(array, index) {
 var sum = 0;
 for (var i = 0; i <= index; sum += array[i++]) {}
 return sum;
}

var __MONTH_DAYS_LEAP = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

var __MONTH_DAYS_REGULAR = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

function __addDays(date, days) {
 var newDate = new Date(date.getTime());
 while (days > 0) {
  var leap = __isLeapYear(newDate.getFullYear());
  var currentMonth = newDate.getMonth();
  var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
  if (days > daysInCurrentMonth - newDate.getDate()) {
   days -= daysInCurrentMonth - newDate.getDate() + 1;
   newDate.setDate(1);
   if (currentMonth < 11) {
    newDate.setMonth(currentMonth + 1);
   } else {
    newDate.setMonth(0);
    newDate.setFullYear(newDate.getFullYear() + 1);
   }
  } else {
   newDate.setDate(newDate.getDate() + days);
   return newDate;
  }
 }
 return newDate;
}

function _strftime(s, maxsize, format, tm) {
 var tm_zone = GROWABLE_HEAP_I32()[tm + 40 >> 2];
 var date = {
  tm_sec: GROWABLE_HEAP_I32()[tm >> 2],
  tm_min: GROWABLE_HEAP_I32()[tm + 4 >> 2],
  tm_hour: GROWABLE_HEAP_I32()[tm + 8 >> 2],
  tm_mday: GROWABLE_HEAP_I32()[tm + 12 >> 2],
  tm_mon: GROWABLE_HEAP_I32()[tm + 16 >> 2],
  tm_year: GROWABLE_HEAP_I32()[tm + 20 >> 2],
  tm_wday: GROWABLE_HEAP_I32()[tm + 24 >> 2],
  tm_yday: GROWABLE_HEAP_I32()[tm + 28 >> 2],
  tm_isdst: GROWABLE_HEAP_I32()[tm + 32 >> 2],
  tm_gmtoff: GROWABLE_HEAP_I32()[tm + 36 >> 2],
  tm_zone: tm_zone ? UTF8ToString(tm_zone) : ""
 };
 var pattern = UTF8ToString(format);
 var EXPANSION_RULES_1 = {
  "%c": "%a %b %d %H:%M:%S %Y",
  "%D": "%m/%d/%y",
  "%F": "%Y-%m-%d",
  "%h": "%b",
  "%r": "%I:%M:%S %p",
  "%R": "%H:%M",
  "%T": "%H:%M:%S",
  "%x": "%m/%d/%y",
  "%X": "%H:%M:%S",
  "%Ec": "%c",
  "%EC": "%C",
  "%Ex": "%m/%d/%y",
  "%EX": "%H:%M:%S",
  "%Ey": "%y",
  "%EY": "%Y",
  "%Od": "%d",
  "%Oe": "%e",
  "%OH": "%H",
  "%OI": "%I",
  "%Om": "%m",
  "%OM": "%M",
  "%OS": "%S",
  "%Ou": "%u",
  "%OU": "%U",
  "%OV": "%V",
  "%Ow": "%w",
  "%OW": "%W",
  "%Oy": "%y"
 };
 for (var rule in EXPANSION_RULES_1) {
  pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_1[rule]);
 }
 var WEEKDAYS = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
 var MONTHS = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
 function leadingSomething(value, digits, character) {
  var str = typeof value === "number" ? value.toString() : value || "";
  while (str.length < digits) {
   str = character[0] + str;
  }
  return str;
 }
 function leadingNulls(value, digits) {
  return leadingSomething(value, digits, "0");
 }
 function compareByDay(date1, date2) {
  function sgn(value) {
   return value < 0 ? -1 : value > 0 ? 1 : 0;
  }
  var compare;
  if ((compare = sgn(date1.getFullYear() - date2.getFullYear())) === 0) {
   if ((compare = sgn(date1.getMonth() - date2.getMonth())) === 0) {
    compare = sgn(date1.getDate() - date2.getDate());
   }
  }
  return compare;
 }
 function getFirstWeekStartDate(janFourth) {
  switch (janFourth.getDay()) {
  case 0:
   return new Date(janFourth.getFullYear() - 1, 11, 29);

  case 1:
   return janFourth;

  case 2:
   return new Date(janFourth.getFullYear(), 0, 3);

  case 3:
   return new Date(janFourth.getFullYear(), 0, 2);

  case 4:
   return new Date(janFourth.getFullYear(), 0, 1);

  case 5:
   return new Date(janFourth.getFullYear() - 1, 11, 31);

  case 6:
   return new Date(janFourth.getFullYear() - 1, 11, 30);
  }
 }
 function getWeekBasedYear(date) {
  var thisDate = __addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
  var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
  var janFourthNextYear = new Date(thisDate.getFullYear() + 1, 0, 4);
  var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
  var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
   if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
    return thisDate.getFullYear() + 1;
   } else {
    return thisDate.getFullYear();
   }
  } else {
   return thisDate.getFullYear() - 1;
  }
 }
 var EXPANSION_RULES_2 = {
  "%a": function(date) {
   return WEEKDAYS[date.tm_wday].substring(0, 3);
  },
  "%A": function(date) {
   return WEEKDAYS[date.tm_wday];
  },
  "%b": function(date) {
   return MONTHS[date.tm_mon].substring(0, 3);
  },
  "%B": function(date) {
   return MONTHS[date.tm_mon];
  },
  "%C": function(date) {
   var year = date.tm_year + 1900;
   return leadingNulls(year / 100 | 0, 2);
  },
  "%d": function(date) {
   return leadingNulls(date.tm_mday, 2);
  },
  "%e": function(date) {
   return leadingSomething(date.tm_mday, 2, " ");
  },
  "%g": function(date) {
   return getWeekBasedYear(date).toString().substring(2);
  },
  "%G": function(date) {
   return getWeekBasedYear(date);
  },
  "%H": function(date) {
   return leadingNulls(date.tm_hour, 2);
  },
  "%I": function(date) {
   var twelveHour = date.tm_hour;
   if (twelveHour == 0) twelveHour = 12; else if (twelveHour > 12) twelveHour -= 12;
   return leadingNulls(twelveHour, 2);
  },
  "%j": function(date) {
   return leadingNulls(date.tm_mday + __arraySum(__isLeapYear(date.tm_year + 1900) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, date.tm_mon - 1), 3);
  },
  "%m": function(date) {
   return leadingNulls(date.tm_mon + 1, 2);
  },
  "%M": function(date) {
   return leadingNulls(date.tm_min, 2);
  },
  "%n": function() {
   return "\n";
  },
  "%p": function(date) {
   if (date.tm_hour >= 0 && date.tm_hour < 12) {
    return "AM";
   } else {
    return "PM";
   }
  },
  "%S": function(date) {
   return leadingNulls(date.tm_sec, 2);
  },
  "%t": function() {
   return "\t";
  },
  "%u": function(date) {
   return date.tm_wday || 7;
  },
  "%U": function(date) {
   var janFirst = new Date(date.tm_year + 1900, 0, 1);
   var firstSunday = janFirst.getDay() === 0 ? janFirst : __addDays(janFirst, 7 - janFirst.getDay());
   var endDate = new Date(date.tm_year + 1900, date.tm_mon, date.tm_mday);
   if (compareByDay(firstSunday, endDate) < 0) {
    var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
    var firstSundayUntilEndJanuary = 31 - firstSunday.getDate();
    var days = firstSundayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
    return leadingNulls(Math.ceil(days / 7), 2);
   }
   return compareByDay(firstSunday, janFirst) === 0 ? "01" : "00";
  },
  "%V": function(date) {
   var janFourthThisYear = new Date(date.tm_year + 1900, 0, 4);
   var janFourthNextYear = new Date(date.tm_year + 1901, 0, 4);
   var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
   var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
   var endDate = __addDays(new Date(date.tm_year + 1900, 0, 1), date.tm_yday);
   if (compareByDay(endDate, firstWeekStartThisYear) < 0) {
    return "53";
   }
   if (compareByDay(firstWeekStartNextYear, endDate) <= 0) {
    return "01";
   }
   var daysDifference;
   if (firstWeekStartThisYear.getFullYear() < date.tm_year + 1900) {
    daysDifference = date.tm_yday + 32 - firstWeekStartThisYear.getDate();
   } else {
    daysDifference = date.tm_yday + 1 - firstWeekStartThisYear.getDate();
   }
   return leadingNulls(Math.ceil(daysDifference / 7), 2);
  },
  "%w": function(date) {
   return date.tm_wday;
  },
  "%W": function(date) {
   var janFirst = new Date(date.tm_year, 0, 1);
   var firstMonday = janFirst.getDay() === 1 ? janFirst : __addDays(janFirst, janFirst.getDay() === 0 ? 1 : 7 - janFirst.getDay() + 1);
   var endDate = new Date(date.tm_year + 1900, date.tm_mon, date.tm_mday);
   if (compareByDay(firstMonday, endDate) < 0) {
    var februaryFirstUntilEndMonth = __arraySum(__isLeapYear(endDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, endDate.getMonth() - 1) - 31;
    var firstMondayUntilEndJanuary = 31 - firstMonday.getDate();
    var days = firstMondayUntilEndJanuary + februaryFirstUntilEndMonth + endDate.getDate();
    return leadingNulls(Math.ceil(days / 7), 2);
   }
   return compareByDay(firstMonday, janFirst) === 0 ? "01" : "00";
  },
  "%y": function(date) {
   return (date.tm_year + 1900).toString().substring(2);
  },
  "%Y": function(date) {
   return date.tm_year + 1900;
  },
  "%z": function(date) {
   var off = date.tm_gmtoff;
   var ahead = off >= 0;
   off = Math.abs(off) / 60;
   off = off / 60 * 100 + off % 60;
   return (ahead ? "+" : "-") + String("0000" + off).slice(-4);
  },
  "%Z": function(date) {
   return date.tm_zone;
  },
  "%%": function() {
   return "%";
  }
 };
 for (var rule in EXPANSION_RULES_2) {
  if (pattern.includes(rule)) {
   pattern = pattern.replace(new RegExp(rule, "g"), EXPANSION_RULES_2[rule](date));
  }
 }
 var bytes = intArrayFromString(pattern, false);
 if (bytes.length > maxsize) {
  return 0;
 }
 writeArrayToMemory(bytes, s);
 return bytes.length - 1;
}

function _strftime_l(s, maxsize, format, tm) {
 return _strftime(s, maxsize, format, tm);
}

function _time(ptr) {
 var ret = Date.now() / 1e3 | 0;
 if (ptr) {
  GROWABLE_HEAP_I32()[ptr >> 2] = ret;
 }
 return ret;
}

if (!ENVIRONMENT_IS_PTHREAD) PThread.initMainThreadBlock();

var FSNode = function(parent, name, mode, rdev) {
 if (!parent) {
  parent = this;
 }
 this.parent = parent;
 this.mount = parent.mount;
 this.mounted = null;
 this.id = FS.nextInode++;
 this.name = name;
 this.mode = mode;
 this.node_ops = {};
 this.stream_ops = {};
 this.rdev = rdev;
};

var readMode = 292 | 73;

var writeMode = 146;

Object.defineProperties(FSNode.prototype, {
 read: {
  get: function() {
   return (this.mode & readMode) === readMode;
  },
  set: function(val) {
   val ? this.mode |= readMode : this.mode &= ~readMode;
  }
 },
 write: {
  get: function() {
   return (this.mode & writeMode) === writeMode;
  },
  set: function(val) {
   val ? this.mode |= writeMode : this.mode &= ~writeMode;
  }
 },
 isFolder: {
  get: function() {
   return FS.isDir(this.mode);
  }
 },
 isDevice: {
  get: function() {
   return FS.isChrdev(this.mode);
  }
 }
});

FS.FSNode = FSNode;

FS.staticInit();

ERRNO_CODES = {
 "EPERM": 63,
 "ENOENT": 44,
 "ESRCH": 71,
 "EINTR": 27,
 "EIO": 29,
 "ENXIO": 60,
 "E2BIG": 1,
 "ENOEXEC": 45,
 "EBADF": 8,
 "ECHILD": 12,
 "EAGAIN": 6,
 "EWOULDBLOCK": 6,
 "ENOMEM": 48,
 "EACCES": 2,
 "EFAULT": 21,
 "ENOTBLK": 105,
 "EBUSY": 10,
 "EEXIST": 20,
 "EXDEV": 75,
 "ENODEV": 43,
 "ENOTDIR": 54,
 "EISDIR": 31,
 "EINVAL": 28,
 "ENFILE": 41,
 "EMFILE": 33,
 "ENOTTY": 59,
 "ETXTBSY": 74,
 "EFBIG": 22,
 "ENOSPC": 51,
 "ESPIPE": 70,
 "EROFS": 69,
 "EMLINK": 34,
 "EPIPE": 64,
 "EDOM": 18,
 "ERANGE": 68,
 "ENOMSG": 49,
 "EIDRM": 24,
 "ECHRNG": 106,
 "EL2NSYNC": 156,
 "EL3HLT": 107,
 "EL3RST": 108,
 "ELNRNG": 109,
 "EUNATCH": 110,
 "ENOCSI": 111,
 "EL2HLT": 112,
 "EDEADLK": 16,
 "ENOLCK": 46,
 "EBADE": 113,
 "EBADR": 114,
 "EXFULL": 115,
 "ENOANO": 104,
 "EBADRQC": 103,
 "EBADSLT": 102,
 "EDEADLOCK": 16,
 "EBFONT": 101,
 "ENOSTR": 100,
 "ENODATA": 116,
 "ETIME": 117,
 "ENOSR": 118,
 "ENONET": 119,
 "ENOPKG": 120,
 "EREMOTE": 121,
 "ENOLINK": 47,
 "EADV": 122,
 "ESRMNT": 123,
 "ECOMM": 124,
 "EPROTO": 65,
 "EMULTIHOP": 36,
 "EDOTDOT": 125,
 "EBADMSG": 9,
 "ENOTUNIQ": 126,
 "EBADFD": 127,
 "EREMCHG": 128,
 "ELIBACC": 129,
 "ELIBBAD": 130,
 "ELIBSCN": 131,
 "ELIBMAX": 132,
 "ELIBEXEC": 133,
 "ENOSYS": 52,
 "ENOTEMPTY": 55,
 "ENAMETOOLONG": 37,
 "ELOOP": 32,
 "EOPNOTSUPP": 138,
 "EPFNOSUPPORT": 139,
 "ECONNRESET": 15,
 "ENOBUFS": 42,
 "EAFNOSUPPORT": 5,
 "EPROTOTYPE": 67,
 "ENOTSOCK": 57,
 "ENOPROTOOPT": 50,
 "ESHUTDOWN": 140,
 "ECONNREFUSED": 14,
 "EADDRINUSE": 3,
 "ECONNABORTED": 13,
 "ENETUNREACH": 40,
 "ENETDOWN": 38,
 "ETIMEDOUT": 73,
 "EHOSTDOWN": 142,
 "EHOSTUNREACH": 23,
 "EINPROGRESS": 26,
 "EALREADY": 7,
 "EDESTADDRREQ": 17,
 "EMSGSIZE": 35,
 "EPROTONOSUPPORT": 66,
 "ESOCKTNOSUPPORT": 137,
 "EADDRNOTAVAIL": 4,
 "ENETRESET": 39,
 "EISCONN": 30,
 "ENOTCONN": 53,
 "ETOOMANYREFS": 141,
 "EUSERS": 136,
 "EDQUOT": 19,
 "ESTALE": 72,
 "ENOTSUP": 138,
 "ENOMEDIUM": 148,
 "EILSEQ": 25,
 "EOVERFLOW": 61,
 "ECANCELED": 11,
 "ENOTRECOVERABLE": 56,
 "EOWNERDEAD": 62,
 "ESTRPIPE": 135
};

Module["requestFullscreen"] = function Module_requestFullscreen(lockPointer, resizeCanvas) {
 Browser.requestFullscreen(lockPointer, resizeCanvas);
};

Module["requestFullScreen"] = function Module_requestFullScreen() {
 Browser.requestFullScreen();
};

Module["requestAnimationFrame"] = function Module_requestAnimationFrame(func) {
 Browser.requestAnimationFrame(func);
};

Module["setCanvasSize"] = function Module_setCanvasSize(width, height, noUpdates) {
 Browser.setCanvasSize(width, height, noUpdates);
};

Module["pauseMainLoop"] = function Module_pauseMainLoop() {
 Browser.mainLoop.pause();
};

Module["resumeMainLoop"] = function Module_resumeMainLoop() {
 Browser.mainLoop.resume();
};

Module["getUserMedia"] = function Module_getUserMedia() {
 Browser.getUserMedia();
};

Module["createContext"] = function Module_createContext(canvas, useWebGL, setInModule, webGLContextAttributes) {
 return Browser.createContext(canvas, useWebGL, setInModule, webGLContextAttributes);
};

var GLctx;

var __miniTempWebGLIntBuffersStorage = new Int32Array(288);

for (var i = 0; i < 288; ++i) {
 __miniTempWebGLIntBuffers[i] = __miniTempWebGLIntBuffersStorage.subarray(0, i + 1);
}

var miniTempWebGLFloatBuffersStorage = new Float32Array(288);

for (var i = 0; i < 288; ++i) {
 miniTempWebGLFloatBuffers[i] = miniTempWebGLFloatBuffersStorage.subarray(0, i + 1);
}

Module["request_quit"] = function() {
 GodotOS.request_quit();
};

Module["onExit"] = GodotOS.cleanup;

GodotOS._fs_sync_promise = Promise.resolve();

Module["initConfig"] = GodotConfig.init_config;

Module["initFS"] = GodotFS.init;

Module["copyToFS"] = GodotFS.copy_to_fs;

GodotOS.atexit(function(resolve, reject) {
 GodotDisplayCursor.clear();
 resolve();
});

GodotOS.atexit(function(resolve, reject) {
 GodotEventListeners.clear();
 resolve();
});

GodotOS.atexit(function(resolve, reject) {
 GodotDisplayVK.clear();
 resolve();
});

GodotJSWrapper.proxies = new Map();

var proxiedFunctionTable = [ null, _atexit, ___sys__newselect, ___sys_accept4, ___sys_access, ___sys_bind, ___sys_chdir, ___sys_chmod, ___sys_connect, ___sys_fcntl64, ___sys_getcwd, ___sys_getdents64, ___sys_getsockname, ___sys_getsockopt, ___sys_ioctl, ___sys_listen, ___sys_lstat64, ___sys_mkdir, ___sys_mmap2, ___sys_munmap, ___sys_open, ___sys_poll, ___sys_readlink, ___sys_recvfrom, ___sys_rename, ___sys_rmdir, ___sys_sendto, ___sys_socket, ___sys_stat64, ___sys_statfs64, ___sys_symlink, ___sys_unlink, _emscripten_force_exit, _emscripten_set_canvas_element_size_main_thread, _emscripten_webgl_destroy_context, _emscripten_webgl_enable_extension, _environ_get, _environ_sizes_get, _fd_close, _fd_fdstat_get, _fd_read, _fd_seek, _fd_write, _getaddrinfo, _godot_audio_capture_start, _godot_audio_capture_stop, _godot_audio_is_available, _godot_webgl2_glFramebufferTextureMultiviewOVR, _godot_webxr_get_bounds_geometry, _godot_webxr_get_color_texture, _godot_webxr_get_depth_texture, _godot_webxr_get_projection_for_view, _godot_webxr_get_render_target_size, _godot_webxr_get_transform_for_view, _godot_webxr_get_velocity_texture, _godot_webxr_get_view_count, _godot_webxr_get_visibility_state, _godot_webxr_initialize, _godot_webxr_is_session_supported, _godot_webxr_is_supported, _godot_webxr_uninitialize, _godot_webxr_update_input_source, _tzset_impl ];

var ASSERTIONS = true;

function intArrayFromString(stringy, dontAddNull, length) {
 var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
 var u8array = new Array(len);
 var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
 if (dontAddNull) u8array.length = numBytesWritten;
 return u8array;
}

function intArrayToString(array) {
 var ret = [];
 for (var i = 0; i < array.length; i++) {
  var chr = array[i];
  if (chr > 255) {
   if (ASSERTIONS) {
    assert(false, "Character code " + chr + " (" + String.fromCharCode(chr) + ")  at offset " + i + " not in 0x00-0xFF.");
   }
   chr &= 255;
  }
  ret.push(String.fromCharCode(chr));
 }
 return ret.join("");
}

var asmLibraryArg = {
 "__assert_fail": ___assert_fail,
 "__call_sighandler": ___call_sighandler,
 "__clock_gettime": ___clock_gettime,
 "__cxa_atexit": ___cxa_atexit,
 "__cxa_thread_atexit": ___cxa_thread_atexit,
 "__pthread_create_js": ___pthread_create_js,
 "__pthread_detach_js": ___pthread_detach_js,
 "__pthread_exit_done": ___pthread_exit_done,
 "__pthread_exit_run_handlers": ___pthread_exit_run_handlers,
 "__pthread_join_js": ___pthread_join_js,
 "__sys__newselect": ___sys__newselect,
 "__sys_accept4": ___sys_accept4,
 "__sys_access": ___sys_access,
 "__sys_bind": ___sys_bind,
 "__sys_chdir": ___sys_chdir,
 "__sys_chmod": ___sys_chmod,
 "__sys_connect": ___sys_connect,
 "__sys_fcntl64": ___sys_fcntl64,
 "__sys_getcwd": ___sys_getcwd,
 "__sys_getdents64": ___sys_getdents64,
 "__sys_getpid": ___sys_getpid,
 "__sys_getsockname": ___sys_getsockname,
 "__sys_getsockopt": ___sys_getsockopt,
 "__sys_ioctl": ___sys_ioctl,
 "__sys_listen": ___sys_listen,
 "__sys_lstat64": ___sys_lstat64,
 "__sys_madvise1": ___sys_madvise1,
 "__sys_mkdir": ___sys_mkdir,
 "__sys_mmap2": ___sys_mmap2,
 "__sys_munmap": ___sys_munmap,
 "__sys_open": ___sys_open,
 "__sys_poll": ___sys_poll,
 "__sys_readlink": ___sys_readlink,
 "__sys_recvfrom": ___sys_recvfrom,
 "__sys_rename": ___sys_rename,
 "__sys_rmdir": ___sys_rmdir,
 "__sys_sendto": ___sys_sendto,
 "__sys_setsockopt": ___sys_setsockopt,
 "__sys_socket": ___sys_socket,
 "__sys_stat64": ___sys_stat64,
 "__sys_statfs64": ___sys_statfs64,
 "__sys_symlink": ___sys_symlink,
 "__sys_unlink": ___sys_unlink,
 "__sys_wait4": ___sys_wait4,
 "_emscripten_notify_thread_queue": __emscripten_notify_thread_queue,
 "_emscripten_proxied_gl_context_activated_from_main_browser_thread": __emscripten_proxied_gl_context_activated_from_main_browser_thread,
 "_emscripten_throw_longjmp": __emscripten_throw_longjmp,
 "abort": _abort,
 "clock_gettime": _clock_gettime,
 "dlclose": _dlclose,
 "dlerror": _dlerror,
 "dlopen": _dlopen,
 "dlsym": _dlsym,
 "emscripten_asm_const_int": _emscripten_asm_const_int,
 "emscripten_cancel_main_loop": _emscripten_cancel_main_loop,
 "emscripten_check_blocking_allowed": _emscripten_check_blocking_allowed,
 "emscripten_conditional_set_current_thread_status": _emscripten_conditional_set_current_thread_status,
 "emscripten_force_exit": _emscripten_force_exit,
 "emscripten_futex_wait": _emscripten_futex_wait,
 "emscripten_futex_wake": _emscripten_futex_wake,
 "emscripten_get_heap_max": _emscripten_get_heap_max,
 "emscripten_get_now": _emscripten_get_now,
 "emscripten_glActiveTexture": _emscripten_glActiveTexture,
 "emscripten_glAttachShader": _emscripten_glAttachShader,
 "emscripten_glBeginTransformFeedback": _emscripten_glBeginTransformFeedback,
 "emscripten_glBindBuffer": _emscripten_glBindBuffer,
 "emscripten_glBindBufferBase": _emscripten_glBindBufferBase,
 "emscripten_glBindBufferRange": _emscripten_glBindBufferRange,
 "emscripten_glBindFramebuffer": _emscripten_glBindFramebuffer,
 "emscripten_glBindRenderbuffer": _emscripten_glBindRenderbuffer,
 "emscripten_glBindTexture": _emscripten_glBindTexture,
 "emscripten_glBindVertexArray": _emscripten_glBindVertexArray,
 "emscripten_glBlendColor": _emscripten_glBlendColor,
 "emscripten_glBlendEquation": _emscripten_glBlendEquation,
 "emscripten_glBlendFunc": _emscripten_glBlendFunc,
 "emscripten_glBlendFuncSeparate": _emscripten_glBlendFuncSeparate,
 "emscripten_glBlitFramebuffer": _emscripten_glBlitFramebuffer,
 "emscripten_glBufferData": _emscripten_glBufferData,
 "emscripten_glBufferSubData": _emscripten_glBufferSubData,
 "emscripten_glCheckFramebufferStatus": _emscripten_glCheckFramebufferStatus,
 "emscripten_glClear": _emscripten_glClear,
 "emscripten_glClearBufferfv": _emscripten_glClearBufferfv,
 "emscripten_glClearColor": _emscripten_glClearColor,
 "emscripten_glClearDepthf": _emscripten_glClearDepthf,
 "emscripten_glColorMask": _emscripten_glColorMask,
 "emscripten_glCompileShader": _emscripten_glCompileShader,
 "emscripten_glCompressedTexImage2D": _emscripten_glCompressedTexImage2D,
 "emscripten_glCopyBufferSubData": _emscripten_glCopyBufferSubData,
 "emscripten_glCreateProgram": _emscripten_glCreateProgram,
 "emscripten_glCreateShader": _emscripten_glCreateShader,
 "emscripten_glCullFace": _emscripten_glCullFace,
 "emscripten_glDeleteBuffers": _emscripten_glDeleteBuffers,
 "emscripten_glDeleteFramebuffers": _emscripten_glDeleteFramebuffers,
 "emscripten_glDeleteProgram": _emscripten_glDeleteProgram,
 "emscripten_glDeleteQueries": _emscripten_glDeleteQueries,
 "emscripten_glDeleteRenderbuffers": _emscripten_glDeleteRenderbuffers,
 "emscripten_glDeleteShader": _emscripten_glDeleteShader,
 "emscripten_glDeleteSync": _emscripten_glDeleteSync,
 "emscripten_glDeleteTextures": _emscripten_glDeleteTextures,
 "emscripten_glDeleteVertexArrays": _emscripten_glDeleteVertexArrays,
 "emscripten_glDepthFunc": _emscripten_glDepthFunc,
 "emscripten_glDepthMask": _emscripten_glDepthMask,
 "emscripten_glDisable": _emscripten_glDisable,
 "emscripten_glDisableVertexAttribArray": _emscripten_glDisableVertexAttribArray,
 "emscripten_glDrawArrays": _emscripten_glDrawArrays,
 "emscripten_glDrawArraysInstanced": _emscripten_glDrawArraysInstanced,
 "emscripten_glDrawElements": _emscripten_glDrawElements,
 "emscripten_glDrawElementsInstanced": _emscripten_glDrawElementsInstanced,
 "emscripten_glEnable": _emscripten_glEnable,
 "emscripten_glEnableVertexAttribArray": _emscripten_glEnableVertexAttribArray,
 "emscripten_glEndTransformFeedback": _emscripten_glEndTransformFeedback,
 "emscripten_glFenceSync": _emscripten_glFenceSync,
 "emscripten_glFinish": _emscripten_glFinish,
 "emscripten_glFramebufferRenderbuffer": _emscripten_glFramebufferRenderbuffer,
 "emscripten_glFramebufferTexture2D": _emscripten_glFramebufferTexture2D,
 "emscripten_glFramebufferTextureLayer": _emscripten_glFramebufferTextureLayer,
 "emscripten_glFrontFace": _emscripten_glFrontFace,
 "emscripten_glGenBuffers": _emscripten_glGenBuffers,
 "emscripten_glGenFramebuffers": _emscripten_glGenFramebuffers,
 "emscripten_glGenQueries": _emscripten_glGenQueries,
 "emscripten_glGenRenderbuffers": _emscripten_glGenRenderbuffers,
 "emscripten_glGenTextures": _emscripten_glGenTextures,
 "emscripten_glGenVertexArrays": _emscripten_glGenVertexArrays,
 "emscripten_glGenerateMipmap": _emscripten_glGenerateMipmap,
 "emscripten_glGetFloatv": _emscripten_glGetFloatv,
 "emscripten_glGetIntegerv": _emscripten_glGetIntegerv,
 "emscripten_glGetProgramInfoLog": _emscripten_glGetProgramInfoLog,
 "emscripten_glGetProgramiv": _emscripten_glGetProgramiv,
 "emscripten_glGetShaderInfoLog": _emscripten_glGetShaderInfoLog,
 "emscripten_glGetShaderiv": _emscripten_glGetShaderiv,
 "emscripten_glGetString": _emscripten_glGetString,
 "emscripten_glGetStringi": _emscripten_glGetStringi,
 "emscripten_glGetSynciv": _emscripten_glGetSynciv,
 "emscripten_glGetUniformBlockIndex": _emscripten_glGetUniformBlockIndex,
 "emscripten_glGetUniformLocation": _emscripten_glGetUniformLocation,
 "emscripten_glLinkProgram": _emscripten_glLinkProgram,
 "emscripten_glPixelStorei": _emscripten_glPixelStorei,
 "emscripten_glReadBuffer": _emscripten_glReadBuffer,
 "emscripten_glReadPixels": _emscripten_glReadPixels,
 "emscripten_glRenderbufferStorage": _emscripten_glRenderbufferStorage,
 "emscripten_glScissor": _emscripten_glScissor,
 "emscripten_glShaderSource": _emscripten_glShaderSource,
 "emscripten_glTexImage2D": _emscripten_glTexImage2D,
 "emscripten_glTexImage3D": _emscripten_glTexImage3D,
 "emscripten_glTexParameterf": _emscripten_glTexParameterf,
 "emscripten_glTexParameteri": _emscripten_glTexParameteri,
 "emscripten_glTexStorage2D": _emscripten_glTexStorage2D,
 "emscripten_glTexSubImage3D": _emscripten_glTexSubImage3D,
 "emscripten_glTransformFeedbackVaryings": _emscripten_glTransformFeedbackVaryings,
 "emscripten_glUniform1f": _emscripten_glUniform1f,
 "emscripten_glUniform1i": _emscripten_glUniform1i,
 "emscripten_glUniform1ui": _emscripten_glUniform1ui,
 "emscripten_glUniform1uiv": _emscripten_glUniform1uiv,
 "emscripten_glUniform2f": _emscripten_glUniform2f,
 "emscripten_glUniform2iv": _emscripten_glUniform2iv,
 "emscripten_glUniform3fv": _emscripten_glUniform3fv,
 "emscripten_glUniform4f": _emscripten_glUniform4f,
 "emscripten_glUniform4fv": _emscripten_glUniform4fv,
 "emscripten_glUniformBlockBinding": _emscripten_glUniformBlockBinding,
 "emscripten_glUniformMatrix4fv": _emscripten_glUniformMatrix4fv,
 "emscripten_glUseProgram": _emscripten_glUseProgram,
 "emscripten_glVertexAttrib4f": _emscripten_glVertexAttrib4f,
 "emscripten_glVertexAttribDivisor": _emscripten_glVertexAttribDivisor,
 "emscripten_glVertexAttribIPointer": _emscripten_glVertexAttribIPointer,
 "emscripten_glVertexAttribPointer": _emscripten_glVertexAttribPointer,
 "emscripten_glViewport": _emscripten_glViewport,
 "emscripten_memcpy_big": _emscripten_memcpy_big,
 "emscripten_num_logical_cores": _emscripten_num_logical_cores,
 "emscripten_receive_on_main_thread_js": _emscripten_receive_on_main_thread_js,
 "emscripten_resize_heap": _emscripten_resize_heap,
 "emscripten_set_canvas_element_size": _emscripten_set_canvas_element_size,
 "emscripten_set_current_thread_status": _emscripten_set_current_thread_status,
 "emscripten_set_main_loop": _emscripten_set_main_loop,
 "emscripten_set_timeout": _emscripten_set_timeout,
 "emscripten_supports_offscreencanvas": _emscripten_supports_offscreencanvas,
 "emscripten_unwind_to_js_event_loop": _emscripten_unwind_to_js_event_loop,
 "emscripten_webgl_destroy_context": _emscripten_webgl_destroy_context,
 "emscripten_webgl_do_commit_frame": _emscripten_webgl_do_commit_frame,
 "emscripten_webgl_do_create_context": _emscripten_webgl_do_create_context,
 "emscripten_webgl_enable_extension": _emscripten_webgl_enable_extension,
 "emscripten_webgl_init_context_attributes": _emscripten_webgl_init_context_attributes,
 "emscripten_webgl_make_context_current_calling_thread": _emscripten_webgl_make_context_current_calling_thread,
 "environ_get": _environ_get,
 "environ_sizes_get": _environ_sizes_get,
 "exit": _exit,
 "fd_close": _fd_close,
 "fd_fdstat_get": _fd_fdstat_get,
 "fd_read": _fd_read,
 "fd_seek": _fd_seek,
 "fd_write": _fd_write,
 "gai_strerror": _gai_strerror,
 "getTempRet0": _getTempRet0,
 "getaddrinfo": _getaddrinfo,
 "getnameinfo": _getnameinfo,
 "gettimeofday": _gettimeofday,
 "glGetBufferSubData": _glGetBufferSubData,
 "gmtime_r": _gmtime_r,
 "godot_audio_capture_start": _godot_audio_capture_start,
 "godot_audio_capture_stop": _godot_audio_capture_stop,
 "godot_audio_has_worklet": _godot_audio_has_worklet,
 "godot_audio_init": _godot_audio_init,
 "godot_audio_is_available": _godot_audio_is_available,
 "godot_audio_resume": _godot_audio_resume,
 "godot_audio_worklet_create": _godot_audio_worklet_create,
 "godot_audio_worklet_start": _godot_audio_worklet_start,
 "godot_audio_worklet_state_add": _godot_audio_worklet_state_add,
 "godot_audio_worklet_state_get": _godot_audio_worklet_state_get,
 "godot_audio_worklet_state_wait": _godot_audio_worklet_state_wait,
 "godot_js_config_canvas_id_get": _godot_js_config_canvas_id_get,
 "godot_js_config_locale_get": _godot_js_config_locale_get,
 "godot_js_display_alert": _godot_js_display_alert,
 "godot_js_display_canvas_focus": _godot_js_display_canvas_focus,
 "godot_js_display_canvas_is_focused": _godot_js_display_canvas_is_focused,
 "godot_js_display_clipboard_get": _godot_js_display_clipboard_get,
 "godot_js_display_clipboard_set": _godot_js_display_clipboard_set,
 "godot_js_display_cursor_is_hidden": _godot_js_display_cursor_is_hidden,
 "godot_js_display_cursor_is_locked": _godot_js_display_cursor_is_locked,
 "godot_js_display_cursor_lock_set": _godot_js_display_cursor_lock_set,
 "godot_js_display_cursor_set_custom_shape": _godot_js_display_cursor_set_custom_shape,
 "godot_js_display_cursor_set_shape": _godot_js_display_cursor_set_shape,
 "godot_js_display_cursor_set_visible": _godot_js_display_cursor_set_visible,
 "godot_js_display_desired_size_set": _godot_js_display_desired_size_set,
 "godot_js_display_fullscreen_cb": _godot_js_display_fullscreen_cb,
 "godot_js_display_fullscreen_exit": _godot_js_display_fullscreen_exit,
 "godot_js_display_fullscreen_request": _godot_js_display_fullscreen_request,
 "godot_js_display_has_webgl": _godot_js_display_has_webgl,
 "godot_js_display_is_swap_ok_cancel": _godot_js_display_is_swap_ok_cancel,
 "godot_js_display_notification_cb": _godot_js_display_notification_cb,
 "godot_js_display_pixel_ratio_get": _godot_js_display_pixel_ratio_get,
 "godot_js_display_screen_dpi_get": _godot_js_display_screen_dpi_get,
 "godot_js_display_screen_size_get": _godot_js_display_screen_size_get,
 "godot_js_display_setup_canvas": _godot_js_display_setup_canvas,
 "godot_js_display_size_update": _godot_js_display_size_update,
 "godot_js_display_touchscreen_is_available": _godot_js_display_touchscreen_is_available,
 "godot_js_display_tts_available": _godot_js_display_tts_available,
 "godot_js_display_vk_available": _godot_js_display_vk_available,
 "godot_js_display_vk_cb": _godot_js_display_vk_cb,
 "godot_js_display_vk_hide": _godot_js_display_vk_hide,
 "godot_js_display_vk_show": _godot_js_display_vk_show,
 "godot_js_display_window_blur_cb": _godot_js_display_window_blur_cb,
 "godot_js_display_window_icon_set": _godot_js_display_window_icon_set,
 "godot_js_display_window_size_get": _godot_js_display_window_size_get,
 "godot_js_display_window_title_set": _godot_js_display_window_title_set,
 "godot_js_eval": _godot_js_eval,
 "godot_js_fetch_body_length_get": _godot_js_fetch_body_length_get,
 "godot_js_fetch_create": _godot_js_fetch_create,
 "godot_js_fetch_free": _godot_js_fetch_free,
 "godot_js_fetch_http_status_get": _godot_js_fetch_http_status_get,
 "godot_js_fetch_is_chunked": _godot_js_fetch_is_chunked,
 "godot_js_fetch_read_chunk": _godot_js_fetch_read_chunk,
 "godot_js_fetch_read_headers": _godot_js_fetch_read_headers,
 "godot_js_fetch_state_get": _godot_js_fetch_state_get,
 "godot_js_input_drop_files_cb": _godot_js_input_drop_files_cb,
 "godot_js_input_gamepad_cb": _godot_js_input_gamepad_cb,
 "godot_js_input_gamepad_sample": _godot_js_input_gamepad_sample,
 "godot_js_input_gamepad_sample_count": _godot_js_input_gamepad_sample_count,
 "godot_js_input_gamepad_sample_get": _godot_js_input_gamepad_sample_get,
 "godot_js_input_key_cb": _godot_js_input_key_cb,
 "godot_js_input_mouse_button_cb": _godot_js_input_mouse_button_cb,
 "godot_js_input_mouse_move_cb": _godot_js_input_mouse_move_cb,
 "godot_js_input_mouse_wheel_cb": _godot_js_input_mouse_wheel_cb,
 "godot_js_input_paste_cb": _godot_js_input_paste_cb,
 "godot_js_input_touch_cb": _godot_js_input_touch_cb,
 "godot_js_input_vibrate_handheld": _godot_js_input_vibrate_handheld,
 "godot_js_os_download_buffer": _godot_js_os_download_buffer,
 "godot_js_os_execute": _godot_js_os_execute,
 "godot_js_os_finish_async": _godot_js_os_finish_async,
 "godot_js_os_fs_is_persistent": _godot_js_os_fs_is_persistent,
 "godot_js_os_fs_sync": _godot_js_os_fs_sync,
 "godot_js_os_hw_concurrency_get": _godot_js_os_hw_concurrency_get,
 "godot_js_os_request_quit_cb": _godot_js_os_request_quit_cb,
 "godot_js_os_shell_open": _godot_js_os_shell_open,
 "godot_js_pwa_cb": _godot_js_pwa_cb,
 "godot_js_pwa_update": _godot_js_pwa_update,
 "godot_js_rtc_datachannel_close": _godot_js_rtc_datachannel_close,
 "godot_js_rtc_datachannel_connect": _godot_js_rtc_datachannel_connect,
 "godot_js_rtc_datachannel_destroy": _godot_js_rtc_datachannel_destroy,
 "godot_js_rtc_datachannel_get_buffered_amount": _godot_js_rtc_datachannel_get_buffered_amount,
 "godot_js_rtc_datachannel_id_get": _godot_js_rtc_datachannel_id_get,
 "godot_js_rtc_datachannel_is_negotiated": _godot_js_rtc_datachannel_is_negotiated,
 "godot_js_rtc_datachannel_is_ordered": _godot_js_rtc_datachannel_is_ordered,
 "godot_js_rtc_datachannel_label_get": _godot_js_rtc_datachannel_label_get,
 "godot_js_rtc_datachannel_max_packet_lifetime_get": _godot_js_rtc_datachannel_max_packet_lifetime_get,
 "godot_js_rtc_datachannel_max_retransmits_get": _godot_js_rtc_datachannel_max_retransmits_get,
 "godot_js_rtc_datachannel_protocol_get": _godot_js_rtc_datachannel_protocol_get,
 "godot_js_rtc_datachannel_ready_state_get": _godot_js_rtc_datachannel_ready_state_get,
 "godot_js_rtc_datachannel_send": _godot_js_rtc_datachannel_send,
 "godot_js_rtc_pc_close": _godot_js_rtc_pc_close,
 "godot_js_rtc_pc_create": _godot_js_rtc_pc_create,
 "godot_js_rtc_pc_datachannel_create": _godot_js_rtc_pc_datachannel_create,
 "godot_js_rtc_pc_destroy": _godot_js_rtc_pc_destroy,
 "godot_js_rtc_pc_ice_candidate_add": _godot_js_rtc_pc_ice_candidate_add,
 "godot_js_rtc_pc_local_description_set": _godot_js_rtc_pc_local_description_set,
 "godot_js_rtc_pc_offer_create": _godot_js_rtc_pc_offer_create,
 "godot_js_rtc_pc_remote_description_set": _godot_js_rtc_pc_remote_description_set,
 "godot_js_tts_get_voices": _godot_js_tts_get_voices,
 "godot_js_tts_is_paused": _godot_js_tts_is_paused,
 "godot_js_tts_is_speaking": _godot_js_tts_is_speaking,
 "godot_js_tts_pause": _godot_js_tts_pause,
 "godot_js_tts_resume": _godot_js_tts_resume,
 "godot_js_tts_speak": _godot_js_tts_speak,
 "godot_js_tts_stop": _godot_js_tts_stop,
 "godot_js_websocket_buffered_amount": _godot_js_websocket_buffered_amount,
 "godot_js_websocket_close": _godot_js_websocket_close,
 "godot_js_websocket_create": _godot_js_websocket_create,
 "godot_js_websocket_destroy": _godot_js_websocket_destroy,
 "godot_js_websocket_send": _godot_js_websocket_send,
 "godot_js_wrapper_create_cb": _godot_js_wrapper_create_cb,
 "godot_js_wrapper_create_object": _godot_js_wrapper_create_object,
 "godot_js_wrapper_interface_get": _godot_js_wrapper_interface_get,
 "godot_js_wrapper_object_call": _godot_js_wrapper_object_call,
 "godot_js_wrapper_object_get": _godot_js_wrapper_object_get,
 "godot_js_wrapper_object_getvar": _godot_js_wrapper_object_getvar,
 "godot_js_wrapper_object_set": _godot_js_wrapper_object_set,
 "godot_js_wrapper_object_set_cb_ret": _godot_js_wrapper_object_set_cb_ret,
 "godot_js_wrapper_object_setvar": _godot_js_wrapper_object_setvar,
 "godot_js_wrapper_object_unref": _godot_js_wrapper_object_unref,
 "godot_webgl2_glFramebufferTextureMultiviewOVR": _godot_webgl2_glFramebufferTextureMultiviewOVR,
 "godot_webxr_get_bounds_geometry": _godot_webxr_get_bounds_geometry,
 "godot_webxr_get_color_texture": _godot_webxr_get_color_texture,
 "godot_webxr_get_depth_texture": _godot_webxr_get_depth_texture,
 "godot_webxr_get_projection_for_view": _godot_webxr_get_projection_for_view,
 "godot_webxr_get_render_target_size": _godot_webxr_get_render_target_size,
 "godot_webxr_get_transform_for_view": _godot_webxr_get_transform_for_view,
 "godot_webxr_get_velocity_texture": _godot_webxr_get_velocity_texture,
 "godot_webxr_get_view_count": _godot_webxr_get_view_count,
 "godot_webxr_get_visibility_state": _godot_webxr_get_visibility_state,
 "godot_webxr_initialize": _godot_webxr_initialize,
 "godot_webxr_is_session_supported": _godot_webxr_is_session_supported,
 "godot_webxr_is_supported": _godot_webxr_is_supported,
 "godot_webxr_uninitialize": _godot_webxr_uninitialize,
 "godot_webxr_update_input_source": _godot_webxr_update_input_source,
 "initPthreadsJS": initPthreadsJS,
 "invoke_ii": invoke_ii,
 "invoke_iii": invoke_iii,
 "invoke_iiii": invoke_iiii,
 "invoke_iiiii": invoke_iiiii,
 "invoke_iiiiiii": invoke_iiiiiii,
 "invoke_iiiiiiiiii": invoke_iiiiiiiiii,
 "invoke_v": invoke_v,
 "invoke_vi": invoke_vi,
 "invoke_vii": invoke_vii,
 "invoke_viii": invoke_viii,
 "invoke_viiii": invoke_viiii,
 "localtime_r": _localtime_r,
 "memory": wasmMemory || Module["wasmMemory"],
 "setTempRet0": _setTempRet0,
 "strftime": _strftime,
 "strftime_l": _strftime_l,
 "time": _time
};

var asm = createWasm();

var ___wasm_call_ctors = Module["___wasm_call_ctors"] = createExportWrapper("__wasm_call_ctors");

var _emscripten_webgl_make_context_current = Module["_emscripten_webgl_make_context_current"] = createExportWrapper("emscripten_webgl_make_context_current");

var _emscripten_webgl_commit_frame = Module["_emscripten_webgl_commit_frame"] = createExportWrapper("emscripten_webgl_commit_frame");

var _free = Module["_free"] = createExportWrapper("free");

var __Z14godot_web_mainiPPc = Module["__Z14godot_web_mainiPPc"] = createExportWrapper("_Z14godot_web_mainiPPc");

var _main = Module["_main"] = createExportWrapper("main");

var _malloc = Module["_malloc"] = createExportWrapper("malloc");

var _htonl = Module["_htonl"] = createExportWrapper("htonl");

var _htons = Module["_htons"] = createExportWrapper("htons");

var _ntohs = Module["_ntohs"] = createExportWrapper("ntohs");

var _saveSetjmp = Module["_saveSetjmp"] = createExportWrapper("saveSetjmp");

var ___errno_location = Module["___errno_location"] = createExportWrapper("__errno_location");

var _fflush = Module["_fflush"] = createExportWrapper("fflush");

var _memalign = Module["_memalign"] = createExportWrapper("memalign");

var __emwebxr_on_input_event = Module["__emwebxr_on_input_event"] = createExportWrapper("_emwebxr_on_input_event");

var __emwebxr_on_simple_event = Module["__emwebxr_on_simple_event"] = createExportWrapper("_emwebxr_on_simple_event");

var _pthread_self = Module["_pthread_self"] = createExportWrapper("pthread_self");

var _emscripten_tls_init = Module["_emscripten_tls_init"] = createExportWrapper("emscripten_tls_init");

var _emscripten_webgl_get_current_context = Module["_emscripten_webgl_get_current_context"] = createExportWrapper("emscripten_webgl_get_current_context");

var __emscripten_call_on_thread = Module["__emscripten_call_on_thread"] = createExportWrapper("_emscripten_call_on_thread");

var _emscripten_current_thread_process_queued_calls = Module["_emscripten_current_thread_process_queued_calls"] = createExportWrapper("emscripten_current_thread_process_queued_calls");

var _emscripten_main_browser_thread_id = Module["_emscripten_main_browser_thread_id"] = createExportWrapper("emscripten_main_browser_thread_id");

var _emscripten_sync_run_in_main_thread_2 = Module["_emscripten_sync_run_in_main_thread_2"] = createExportWrapper("emscripten_sync_run_in_main_thread_2");

var _emscripten_sync_run_in_main_thread_4 = Module["_emscripten_sync_run_in_main_thread_4"] = createExportWrapper("emscripten_sync_run_in_main_thread_4");

var _emscripten_main_thread_process_queued_calls = Module["_emscripten_main_thread_process_queued_calls"] = createExportWrapper("emscripten_main_thread_process_queued_calls");

var _emscripten_run_in_main_runtime_thread_js = Module["_emscripten_run_in_main_runtime_thread_js"] = createExportWrapper("emscripten_run_in_main_runtime_thread_js");

var ___emscripten_pthread_data_constructor = Module["___emscripten_pthread_data_constructor"] = createExportWrapper("__emscripten_pthread_data_constructor");

var __emscripten_thread_exit = Module["__emscripten_thread_exit"] = createExportWrapper("_emscripten_thread_exit");

var ___pthread_tsd_run_dtors = Module["___pthread_tsd_run_dtors"] = createExportWrapper("__pthread_tsd_run_dtors");

var __emscripten_thread_init = Module["__emscripten_thread_init"] = createExportWrapper("_emscripten_thread_init");

var _pthread_testcancel = Module["_pthread_testcancel"] = createExportWrapper("pthread_testcancel");

var _emscripten_get_global_libc = Module["_emscripten_get_global_libc"] = createExportWrapper("emscripten_get_global_libc");

var __get_tzname = Module["__get_tzname"] = createExportWrapper("_get_tzname");

var __get_daylight = Module["__get_daylight"] = createExportWrapper("_get_daylight");

var __get_timezone = Module["__get_timezone"] = createExportWrapper("_get_timezone");

var _raise = Module["_raise"] = createExportWrapper("raise");

var stackSave = Module["stackSave"] = createExportWrapper("stackSave");

var stackRestore = Module["stackRestore"] = createExportWrapper("stackRestore");

var stackAlloc = Module["stackAlloc"] = createExportWrapper("stackAlloc");

var _emscripten_stack_init = Module["_emscripten_stack_init"] = function() {
 return (_emscripten_stack_init = Module["_emscripten_stack_init"] = Module["asm"]["emscripten_stack_init"]).apply(null, arguments);
};

var _emscripten_stack_set_limits = Module["_emscripten_stack_set_limits"] = function() {
 return (_emscripten_stack_set_limits = Module["_emscripten_stack_set_limits"] = Module["asm"]["emscripten_stack_set_limits"]).apply(null, arguments);
};

var _emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = function() {
 return (_emscripten_stack_get_free = Module["_emscripten_stack_get_free"] = Module["asm"]["emscripten_stack_get_free"]).apply(null, arguments);
};

var _emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = function() {
 return (_emscripten_stack_get_end = Module["_emscripten_stack_get_end"] = Module["asm"]["emscripten_stack_get_end"]).apply(null, arguments);
};

var _setThrew = Module["_setThrew"] = createExportWrapper("setThrew");

var dynCall_jiii = Module["dynCall_jiii"] = createExportWrapper("dynCall_jiii");

var dynCall_viji = Module["dynCall_viji"] = createExportWrapper("dynCall_viji");

var dynCall_jii = Module["dynCall_jii"] = createExportWrapper("dynCall_jii");

var dynCall_vij = Module["dynCall_vij"] = createExportWrapper("dynCall_vij");

var dynCall_ji = Module["dynCall_ji"] = createExportWrapper("dynCall_ji");

var dynCall_jiiiiiii = Module["dynCall_jiiiiiii"] = createExportWrapper("dynCall_jiiiiiii");

var dynCall_vijiiiiiiiii = Module["dynCall_vijiiiiiiiii"] = createExportWrapper("dynCall_vijiiiiiiiii");

var dynCall_vijj = Module["dynCall_vijj"] = createExportWrapper("dynCall_vijj");

var dynCall_vijiiiffi = Module["dynCall_vijiiiffi"] = createExportWrapper("dynCall_vijiiiffi");

var dynCall_vijiiifii = Module["dynCall_vijiiifii"] = createExportWrapper("dynCall_vijiiifii");

var dynCall_vijii = Module["dynCall_vijii"] = createExportWrapper("dynCall_vijii");

var dynCall_iij = Module["dynCall_iij"] = createExportWrapper("dynCall_iij");

var dynCall_vijif = Module["dynCall_vijif"] = createExportWrapper("dynCall_vijif");

var dynCall_vijifff = Module["dynCall_vijifff"] = createExportWrapper("dynCall_vijifff");

var dynCall_viij = Module["dynCall_viij"] = createExportWrapper("dynCall_viij");

var dynCall_fiji = Module["dynCall_fiji"] = createExportWrapper("dynCall_fiji");

var dynCall_jij = Module["dynCall_jij"] = createExportWrapper("dynCall_jij");

var dynCall_vijiiffifffi = Module["dynCall_vijiiffifffi"] = createExportWrapper("dynCall_vijiiffifffi");

var dynCall_vijf = Module["dynCall_vijf"] = createExportWrapper("dynCall_vijf");

var dynCall_fij = Module["dynCall_fij"] = createExportWrapper("dynCall_fij");

var dynCall_iijj = Module["dynCall_iijj"] = createExportWrapper("dynCall_iijj");

var dynCall_vijji = Module["dynCall_vijji"] = createExportWrapper("dynCall_vijji");

var dynCall_vijiiii = Module["dynCall_vijiiii"] = createExportWrapper("dynCall_vijiiii");

var dynCall_iijjfj = Module["dynCall_iijjfj"] = createExportWrapper("dynCall_iijjfj");

var dynCall_vijiii = Module["dynCall_vijiii"] = createExportWrapper("dynCall_vijiii");

var dynCall_vijiji = Module["dynCall_vijiji"] = createExportWrapper("dynCall_vijiji");

var dynCall_jijii = Module["dynCall_jijii"] = createExportWrapper("dynCall_jijii");

var dynCall_viiji = Module["dynCall_viiji"] = createExportWrapper("dynCall_viiji");

var dynCall_vijd = Module["dynCall_vijd"] = createExportWrapper("dynCall_vijd");

var dynCall_vijid = Module["dynCall_vijid"] = createExportWrapper("dynCall_vijid");

var dynCall_vijiiiii = Module["dynCall_vijiiiii"] = createExportWrapper("dynCall_vijiiiii");

var dynCall_vijij = Module["dynCall_vijij"] = createExportWrapper("dynCall_vijij");

var dynCall_jiji = Module["dynCall_jiji"] = createExportWrapper("dynCall_jiji");

var dynCall_vijiiiiiii = Module["dynCall_vijiiiiiii"] = createExportWrapper("dynCall_vijiiiiiii");

var dynCall_viijfii = Module["dynCall_viijfii"] = createExportWrapper("dynCall_viijfii");

var dynCall_viijii = Module["dynCall_viijii"] = createExportWrapper("dynCall_viijii");

var dynCall_viiiiiiiiiiijjjjjjifiiiiii = Module["dynCall_viiiiiiiiiiijjjjjjifiiiiii"] = createExportWrapper("dynCall_viiiiiiiiiiijjjjjjifiiiiii");

var dynCall_viiiiiji = Module["dynCall_viiiiiji"] = createExportWrapper("dynCall_viiiiiji");

var dynCall_viiij = Module["dynCall_viiij"] = createExportWrapper("dynCall_viiij");

var dynCall_viijd = Module["dynCall_viijd"] = createExportWrapper("dynCall_viijd");

var dynCall_diij = Module["dynCall_diij"] = createExportWrapper("dynCall_diij");

var dynCall_viiiji = Module["dynCall_viiiji"] = createExportWrapper("dynCall_viiiji");

var dynCall_viiiij = Module["dynCall_viiiij"] = createExportWrapper("dynCall_viiiij");

var dynCall_viiijj = Module["dynCall_viiijj"] = createExportWrapper("dynCall_viiijj");

var dynCall_viijji = Module["dynCall_viijji"] = createExportWrapper("dynCall_viijji");

var dynCall_jiiij = Module["dynCall_jiiij"] = createExportWrapper("dynCall_jiiij");

var dynCall_jiijjj = Module["dynCall_jiijjj"] = createExportWrapper("dynCall_jiijjj");

var dynCall_iiij = Module["dynCall_iiij"] = createExportWrapper("dynCall_iiij");

var dynCall_viiijiji = Module["dynCall_viiijiji"] = createExportWrapper("dynCall_viiijiji");

var dynCall_viiijjiji = Module["dynCall_viiijjiji"] = createExportWrapper("dynCall_viiijjiji");

var dynCall_viijj = Module["dynCall_viijj"] = createExportWrapper("dynCall_viijj");

var dynCall_viijiji = Module["dynCall_viijiji"] = createExportWrapper("dynCall_viijiji");

var dynCall_iiiiijiii = Module["dynCall_iiiiijiii"] = createExportWrapper("dynCall_iiiiijiii");

var dynCall_iiiiiijf = Module["dynCall_iiiiiijf"] = createExportWrapper("dynCall_iiiiiijf");

var dynCall_jiijj = Module["dynCall_jiijj"] = createExportWrapper("dynCall_jiijj");

var dynCall_diidj = Module["dynCall_diidj"] = createExportWrapper("dynCall_diidj");

var dynCall_viiiijij = Module["dynCall_viiiijij"] = createExportWrapper("dynCall_viiiijij");

var dynCall_viiidjj = Module["dynCall_viiidjj"] = createExportWrapper("dynCall_viiidjj");

var dynCall_viidj = Module["dynCall_viidj"] = createExportWrapper("dynCall_viidj");

var dynCall_iiijj = Module["dynCall_iiijj"] = createExportWrapper("dynCall_iiijj");

var dynCall_jiid = Module["dynCall_jiid"] = createExportWrapper("dynCall_jiid");

var dynCall_jiij = Module["dynCall_jiij"] = createExportWrapper("dynCall_jiij");

var dynCall_viiiiddji = Module["dynCall_viiiiddji"] = createExportWrapper("dynCall_viiiiddji");

var dynCall_iiiijf = Module["dynCall_iiiijf"] = createExportWrapper("dynCall_iiiijf");

var dynCall_iiiiiiji = Module["dynCall_iiiiiiji"] = createExportWrapper("dynCall_iiiiiiji");

var dynCall_viijiiii = Module["dynCall_viijiiii"] = createExportWrapper("dynCall_viijiiii");

var dynCall_viijiii = Module["dynCall_viijiii"] = createExportWrapper("dynCall_viijiii");

var dynCall_iiji = Module["dynCall_iiji"] = createExportWrapper("dynCall_iiji");

var dynCall_vijjii = Module["dynCall_vijjii"] = createExportWrapper("dynCall_vijjii");

var dynCall_vijjjii = Module["dynCall_vijjjii"] = createExportWrapper("dynCall_vijjjii");

var dynCall_jiiiii = Module["dynCall_jiiiii"] = createExportWrapper("dynCall_jiiiii");

var dynCall_vijiiffiiiii = Module["dynCall_vijiiffiiiii"] = createExportWrapper("dynCall_vijiiffiiiii");

var dynCall_vijiiiiii = Module["dynCall_vijiiiiii"] = createExportWrapper("dynCall_vijiiiiii");

var dynCall_vijiff = Module["dynCall_vijiff"] = createExportWrapper("dynCall_vijiff");

var dynCall_vijff = Module["dynCall_vijff"] = createExportWrapper("dynCall_vijff");

var dynCall_vijjjj = Module["dynCall_vijjjj"] = createExportWrapper("dynCall_vijjjj");

var dynCall_viiiiifiijii = Module["dynCall_viiiiifiijii"] = createExportWrapper("dynCall_viiiiifiijii");

var dynCall_viiiiifiiijjii = Module["dynCall_viiiiifiiijjii"] = createExportWrapper("dynCall_viiiiifiiijjii");

var dynCall_viiiiifiiijii = Module["dynCall_viiiiifiiijii"] = createExportWrapper("dynCall_viiiiifiiijii");

var dynCall_viiiiifiiiijjii = Module["dynCall_viiiiifiiiijjii"] = createExportWrapper("dynCall_viiiiifiiiijjii");

var dynCall_viiijii = Module["dynCall_viiijii"] = createExportWrapper("dynCall_viiijii");

var dynCall_iiiij = Module["dynCall_iiiij"] = createExportWrapper("dynCall_iiiij");

var dynCall_jiiifi = Module["dynCall_jiiifi"] = createExportWrapper("dynCall_jiiifi");

var dynCall_viiiifijii = Module["dynCall_viiiifijii"] = createExportWrapper("dynCall_viiiifijii");

var dynCall_viiiifiijjii = Module["dynCall_viiiifiijjii"] = createExportWrapper("dynCall_viiiifiijjii");

var dynCall_vijiiifiijii = Module["dynCall_vijiiifiijii"] = createExportWrapper("dynCall_vijiiifiijii");

var dynCall_vijiiifiiijjii = Module["dynCall_vijiiifiiijjii"] = createExportWrapper("dynCall_vijiiifiiijjii");

var dynCall_vijiiifiiijii = Module["dynCall_vijiiifiiijii"] = createExportWrapper("dynCall_vijiiifiiijii");

var dynCall_vijiiifiiiijjii = Module["dynCall_vijiiifiiiijjii"] = createExportWrapper("dynCall_vijiiifiiiijjii");

var dynCall_fijiiii = Module["dynCall_fijiiii"] = createExportWrapper("dynCall_fijiiii");

var dynCall_fijiiiii = Module["dynCall_fijiiiii"] = createExportWrapper("dynCall_fijiiiii");

var dynCall_iijii = Module["dynCall_iijii"] = createExportWrapper("dynCall_iijii");

var dynCall_iijiijiiiii = Module["dynCall_iijiijiiiii"] = createExportWrapper("dynCall_iijiijiiiii");

var dynCall_vijiif = Module["dynCall_vijiif"] = createExportWrapper("dynCall_vijiif");

var dynCall_iijijiiiii = Module["dynCall_iijijiiiii"] = createExportWrapper("dynCall_iijijiiiii");

var dynCall_vijijj = Module["dynCall_vijijj"] = createExportWrapper("dynCall_vijijj");

var dynCall_vijiiijj = Module["dynCall_vijiiijj"] = createExportWrapper("dynCall_vijiiijj");

var dynCall_vijiijj = Module["dynCall_vijiijj"] = createExportWrapper("dynCall_vijiijj");

var dynCall_vijjiji = Module["dynCall_vijjiji"] = createExportWrapper("dynCall_vijjiji");

var dynCall_vijjiijii = Module["dynCall_vijjiijii"] = createExportWrapper("dynCall_vijjiijii");

var dynCall_fijii = Module["dynCall_fijii"] = createExportWrapper("dynCall_fijii");

var dynCall_jijj = Module["dynCall_jijj"] = createExportWrapper("dynCall_jijj");

var dynCall_jiiif = Module["dynCall_jiiif"] = createExportWrapper("dynCall_jiiif");

var dynCall_vijiiiiiidddd = Module["dynCall_vijiiiiiidddd"] = createExportWrapper("dynCall_vijiiiiiidddd");

var dynCall_jiiii = Module["dynCall_jiiii"] = createExportWrapper("dynCall_jiiii");

var dynCall_jiijiiii = Module["dynCall_jiijiiii"] = createExportWrapper("dynCall_jiijiiii");

var dynCall_jiiji = Module["dynCall_jiiji"] = createExportWrapper("dynCall_jiiji");

var dynCall_jiiiji = Module["dynCall_jiiiji"] = createExportWrapper("dynCall_jiiiji");

var dynCall_jiijii = Module["dynCall_jiijii"] = createExportWrapper("dynCall_jiijii");

var dynCall_iijiiij = Module["dynCall_iijiiij"] = createExportWrapper("dynCall_iijiiij");

var dynCall_jijjjiiiiijii = Module["dynCall_jijjjiiiiijii"] = createExportWrapper("dynCall_jijjjiiiiijii");

var dynCall_viijiiiiiifiii = Module["dynCall_viijiiiiiifiii"] = createExportWrapper("dynCall_viijiiiiiifiii");

var dynCall_vijfff = Module["dynCall_vijfff"] = createExportWrapper("dynCall_vijfff");

var dynCall_vijfiff = Module["dynCall_vijfiff"] = createExportWrapper("dynCall_vijfiff");

var dynCall_vijfi = Module["dynCall_vijfi"] = createExportWrapper("dynCall_vijfi");

var dynCall_vijffffi = Module["dynCall_vijffffi"] = createExportWrapper("dynCall_vijffffi");

var dynCall_vijiiffi = Module["dynCall_vijiiffi"] = createExportWrapper("dynCall_vijiiffi");

var dynCall_vijiifffffff = Module["dynCall_vijiifffffff"] = createExportWrapper("dynCall_vijiifffffff");

var dynCall_vijifiifffffifff = Module["dynCall_vijifiifffffifff"] = createExportWrapper("dynCall_vijifiifffffifff");

var dynCall_vijiiffffiffffj = Module["dynCall_vijiiffffiffffj"] = createExportWrapper("dynCall_vijiiffffiffffj");

var dynCall_vijiifff = Module["dynCall_vijiifff"] = createExportWrapper("dynCall_vijiifff");

var dynCall_vijiffffffff = Module["dynCall_vijiffffffff"] = createExportWrapper("dynCall_vijiffffffff");

var dynCall_vijiffff = Module["dynCall_vijiffff"] = createExportWrapper("dynCall_vijiffff");

var dynCall_vijiifiififff = Module["dynCall_vijiifiififff"] = createExportWrapper("dynCall_vijiifiififff");

var dynCall_vijifffij = Module["dynCall_vijifffij"] = createExportWrapper("dynCall_vijifffij");

var dynCall_viijjjiifjii = Module["dynCall_viijjjiifjii"] = createExportWrapper("dynCall_viijjjiifjii");

var dynCall_vijiffifff = Module["dynCall_vijiffifff"] = createExportWrapper("dynCall_vijiffifff");

var dynCall_vijjf = Module["dynCall_vijjf"] = createExportWrapper("dynCall_vijjf");

var dynCall_vijiiifi = Module["dynCall_vijiiifi"] = createExportWrapper("dynCall_vijiiifi");

var dynCall_vijiifi = Module["dynCall_vijiifi"] = createExportWrapper("dynCall_vijiifi");

var dynCall_vijifi = Module["dynCall_vijifi"] = createExportWrapper("dynCall_vijifi");

var dynCall_vijijiii = Module["dynCall_vijijiii"] = createExportWrapper("dynCall_vijijiii");

var dynCall_vijijiiii = Module["dynCall_vijijiiii"] = createExportWrapper("dynCall_vijijiiii");

var dynCall_vijijiiiff = Module["dynCall_vijijiiiff"] = createExportWrapper("dynCall_vijijiiiff");

var dynCall_vijijii = Module["dynCall_vijijii"] = createExportWrapper("dynCall_vijijii");

var dynCall_vijiijiiiiii = Module["dynCall_vijiijiiiiii"] = createExportWrapper("dynCall_vijiijiiiiii");

var dynCall_vijiiijf = Module["dynCall_vijiiijf"] = createExportWrapper("dynCall_vijiiijf");

var dynCall_vijiiij = Module["dynCall_vijiiij"] = createExportWrapper("dynCall_vijiiij");

var dynCall_vijiiiiiiji = Module["dynCall_vijiiiiiiji"] = createExportWrapper("dynCall_vijiiiiiiji");

var dynCall_vijjj = Module["dynCall_vijjj"] = createExportWrapper("dynCall_vijjj");

var dynCall_vijdddd = Module["dynCall_vijdddd"] = createExportWrapper("dynCall_vijdddd");

var dynCall_vijififi = Module["dynCall_vijififi"] = createExportWrapper("dynCall_vijififi");

var dynCall_dij = Module["dynCall_dij"] = createExportWrapper("dynCall_dij");

var dynCall_iijji = Module["dynCall_iijji"] = createExportWrapper("dynCall_iijji");

var dynCall_fijj = Module["dynCall_fijj"] = createExportWrapper("dynCall_fijj");

var dynCall_viiiiji = Module["dynCall_viiiiji"] = createExportWrapper("dynCall_viiiiji");

var dynCall_ij = Module["dynCall_ij"] = createExportWrapper("dynCall_ij");

var dynCall_jiiiiii = Module["dynCall_jiiiiii"] = createExportWrapper("dynCall_jiiiiii");

var dynCall_iijjiii = Module["dynCall_iijjiii"] = createExportWrapper("dynCall_iijjiii");

var dynCall_iiiiij = Module["dynCall_iiiiij"] = createExportWrapper("dynCall_iiiiij");

var dynCall_iiiiijj = Module["dynCall_iiiiijj"] = createExportWrapper("dynCall_iiiiijj");

var dynCall_iiiiiijj = Module["dynCall_iiiiiijj"] = createExportWrapper("dynCall_iiiiiijj");

var __emscripten_allow_main_runtime_queued_calls = Module["__emscripten_allow_main_runtime_queued_calls"] = 4166460;

var __emscripten_main_thread_futex = Module["__emscripten_main_thread_futex"] = 5124228;

function invoke_vii(index, a1, a2) {
 var sp = stackSave();
 try {
  wasmTable.get(index)(a1, a2);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_vi(index, a1) {
 var sp = stackSave();
 try {
  wasmTable.get(index)(a1);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viii(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  wasmTable.get(index)(a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_ii(index, a1) {
 var sp = stackSave();
 try {
  return wasmTable.get(index)(a1);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_viiii(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  wasmTable.get(index)(a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iii(index, a1, a2) {
 var sp = stackSave();
 try {
  return wasmTable.get(index)(a1, a2);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiii(index, a1, a2, a3) {
 var sp = stackSave();
 try {
  return wasmTable.get(index)(a1, a2, a3);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_v(index) {
 var sp = stackSave();
 try {
  wasmTable.get(index)();
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiii(index, a1, a2, a3, a4) {
 var sp = stackSave();
 try {
  return wasmTable.get(index)(a1, a2, a3, a4);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiiiiiii(index, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
 var sp = stackSave();
 try {
  return wasmTable.get(index)(a1, a2, a3, a4, a5, a6, a7, a8, a9);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

function invoke_iiiiiii(index, a1, a2, a3, a4, a5, a6) {
 var sp = stackSave();
 try {
  return wasmTable.get(index)(a1, a2, a3, a4, a5, a6);
 } catch (e) {
  stackRestore(sp);
  if (e !== e + 0 && e !== "longjmp") throw e;
  _setThrew(1, 0);
 }
}

if (!Object.getOwnPropertyDescriptor(Module, "intArrayFromString")) Module["intArrayFromString"] = function() {
 abort("'intArrayFromString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "intArrayToString")) Module["intArrayToString"] = function() {
 abort("'intArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "ccall")) Module["ccall"] = function() {
 abort("'ccall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

Module["cwrap"] = cwrap;

if (!Object.getOwnPropertyDescriptor(Module, "setValue")) Module["setValue"] = function() {
 abort("'setValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getValue")) Module["getValue"] = function() {
 abort("'getValue' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "allocate")) Module["allocate"] = function() {
 abort("'allocate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "UTF8ArrayToString")) Module["UTF8ArrayToString"] = function() {
 abort("'UTF8ArrayToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "UTF8ToString")) Module["UTF8ToString"] = function() {
 abort("'UTF8ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8Array")) Module["stringToUTF8Array"] = function() {
 abort("'stringToUTF8Array' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF8")) Module["stringToUTF8"] = function() {
 abort("'stringToUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF8")) Module["lengthBytesUTF8"] = function() {
 abort("'lengthBytesUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() {
 abort("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "addOnPreRun")) Module["addOnPreRun"] = function() {
 abort("'addOnPreRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "addOnInit")) Module["addOnInit"] = function() {
 abort("'addOnInit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "addOnPreMain")) Module["addOnPreMain"] = function() {
 abort("'addOnPreMain' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "addOnExit")) Module["addOnExit"] = function() {
 abort("'addOnExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "addOnPostRun")) Module["addOnPostRun"] = function() {
 abort("'addOnPostRun' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeStringToMemory")) Module["writeStringToMemory"] = function() {
 abort("'writeStringToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeArrayToMemory")) Module["writeArrayToMemory"] = function() {
 abort("'writeArrayToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeAsciiToMemory")) Module["writeAsciiToMemory"] = function() {
 abort("'writeAsciiToMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "addRunDependency")) Module["addRunDependency"] = function() {
 abort("'addRunDependency' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
};

if (!Object.getOwnPropertyDescriptor(Module, "removeRunDependency")) Module["removeRunDependency"] = function() {
 abort("'removeRunDependency' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
};

if (!Object.getOwnPropertyDescriptor(Module, "FS_createFolder")) Module["FS_createFolder"] = function() {
 abort("'FS_createFolder' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "FS_createPath")) Module["FS_createPath"] = function() {
 abort("'FS_createPath' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
};

if (!Object.getOwnPropertyDescriptor(Module, "FS_createDataFile")) Module["FS_createDataFile"] = function() {
 abort("'FS_createDataFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
};

if (!Object.getOwnPropertyDescriptor(Module, "FS_createPreloadedFile")) Module["FS_createPreloadedFile"] = function() {
 abort("'FS_createPreloadedFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
};

if (!Object.getOwnPropertyDescriptor(Module, "FS_createLazyFile")) Module["FS_createLazyFile"] = function() {
 abort("'FS_createLazyFile' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
};

if (!Object.getOwnPropertyDescriptor(Module, "FS_createLink")) Module["FS_createLink"] = function() {
 abort("'FS_createLink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "FS_createDevice")) Module["FS_createDevice"] = function() {
 abort("'FS_createDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
};

if (!Object.getOwnPropertyDescriptor(Module, "FS_unlink")) Module["FS_unlink"] = function() {
 abort("'FS_unlink' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
};

if (!Object.getOwnPropertyDescriptor(Module, "getLEB")) Module["getLEB"] = function() {
 abort("'getLEB' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getFunctionTables")) Module["getFunctionTables"] = function() {
 abort("'getFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "alignFunctionTables")) Module["alignFunctionTables"] = function() {
 abort("'alignFunctionTables' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerFunctions")) Module["registerFunctions"] = function() {
 abort("'registerFunctions' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "addFunction")) Module["addFunction"] = function() {
 abort("'addFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "removeFunction")) Module["removeFunction"] = function() {
 abort("'removeFunction' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() {
 abort("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "prettyPrint")) Module["prettyPrint"] = function() {
 abort("'prettyPrint' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() {
 abort("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getCompilerSetting")) Module["getCompilerSetting"] = function() {
 abort("'getCompilerSetting' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "print")) Module["print"] = function() {
 abort("'print' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "printErr")) Module["printErr"] = function() {
 abort("'printErr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getTempRet0")) Module["getTempRet0"] = function() {
 abort("'getTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "setTempRet0")) Module["setTempRet0"] = function() {
 abort("'setTempRet0' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

Module["callMain"] = callMain;

if (!Object.getOwnPropertyDescriptor(Module, "abort")) Module["abort"] = function() {
 abort("'abort' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

Module["keepRuntimeAlive"] = keepRuntimeAlive;

if (!Object.getOwnPropertyDescriptor(Module, "zeroMemory")) Module["zeroMemory"] = function() {
 abort("'zeroMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stringToNewUTF8")) Module["stringToNewUTF8"] = function() {
 abort("'stringToNewUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "setFileTime")) Module["setFileTime"] = function() {
 abort("'setFileTime' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "emscripten_realloc_buffer")) Module["emscripten_realloc_buffer"] = function() {
 abort("'emscripten_realloc_buffer' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "ENV")) Module["ENV"] = function() {
 abort("'ENV' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_CODES")) Module["ERRNO_CODES"] = function() {
 abort("'ERRNO_CODES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "ERRNO_MESSAGES")) Module["ERRNO_MESSAGES"] = function() {
 abort("'ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "setErrNo")) Module["setErrNo"] = function() {
 abort("'setErrNo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "inetPton4")) Module["inetPton4"] = function() {
 abort("'inetPton4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "inetNtop4")) Module["inetNtop4"] = function() {
 abort("'inetNtop4' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "inetPton6")) Module["inetPton6"] = function() {
 abort("'inetPton6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "inetNtop6")) Module["inetNtop6"] = function() {
 abort("'inetNtop6' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "readSockaddr")) Module["readSockaddr"] = function() {
 abort("'readSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeSockaddr")) Module["writeSockaddr"] = function() {
 abort("'writeSockaddr' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "DNS")) Module["DNS"] = function() {
 abort("'DNS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getHostByName")) Module["getHostByName"] = function() {
 abort("'getHostByName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GAI_ERRNO_MESSAGES")) Module["GAI_ERRNO_MESSAGES"] = function() {
 abort("'GAI_ERRNO_MESSAGES' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "Protocols")) Module["Protocols"] = function() {
 abort("'Protocols' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "Sockets")) Module["Sockets"] = function() {
 abort("'Sockets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getRandomDevice")) Module["getRandomDevice"] = function() {
 abort("'getRandomDevice' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "traverseStack")) Module["traverseStack"] = function() {
 abort("'traverseStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "UNWIND_CACHE")) Module["UNWIND_CACHE"] = function() {
 abort("'UNWIND_CACHE' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "withBuiltinMalloc")) Module["withBuiltinMalloc"] = function() {
 abort("'withBuiltinMalloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgsArray")) Module["readAsmConstArgsArray"] = function() {
 abort("'readAsmConstArgsArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "readAsmConstArgs")) Module["readAsmConstArgs"] = function() {
 abort("'readAsmConstArgs' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "mainThreadEM_ASM")) Module["mainThreadEM_ASM"] = function() {
 abort("'mainThreadEM_ASM' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jstoi_q")) Module["jstoi_q"] = function() {
 abort("'jstoi_q' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jstoi_s")) Module["jstoi_s"] = function() {
 abort("'jstoi_s' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getExecutableName")) Module["getExecutableName"] = function() {
 abort("'getExecutableName' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "listenOnce")) Module["listenOnce"] = function() {
 abort("'listenOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "autoResumeAudioContext")) Module["autoResumeAudioContext"] = function() {
 abort("'autoResumeAudioContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "dynCallLegacy")) Module["dynCallLegacy"] = function() {
 abort("'dynCallLegacy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getDynCaller")) Module["getDynCaller"] = function() {
 abort("'getDynCaller' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "dynCall")) Module["dynCall"] = function() {
 abort("'dynCall' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "callRuntimeCallbacks")) Module["callRuntimeCallbacks"] = function() {
 abort("'callRuntimeCallbacks' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "handleException")) Module["handleException"] = function() {
 abort("'handleException' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepalivePush")) Module["runtimeKeepalivePush"] = function() {
 abort("'runtimeKeepalivePush' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "runtimeKeepalivePop")) Module["runtimeKeepalivePop"] = function() {
 abort("'runtimeKeepalivePop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "callUserCallback")) Module["callUserCallback"] = function() {
 abort("'callUserCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "maybeExit")) Module["maybeExit"] = function() {
 abort("'maybeExit' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "safeSetTimeout")) Module["safeSetTimeout"] = function() {
 abort("'safeSetTimeout' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "asmjsMangle")) Module["asmjsMangle"] = function() {
 abort("'asmjsMangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "asyncLoad")) Module["asyncLoad"] = function() {
 abort("'asyncLoad' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "alignMemory")) Module["alignMemory"] = function() {
 abort("'alignMemory' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "mmapAlloc")) Module["mmapAlloc"] = function() {
 abort("'mmapAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "reallyNegative")) Module["reallyNegative"] = function() {
 abort("'reallyNegative' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "unSign")) Module["unSign"] = function() {
 abort("'unSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "reSign")) Module["reSign"] = function() {
 abort("'reSign' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "formatString")) Module["formatString"] = function() {
 abort("'formatString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "PATH")) Module["PATH"] = function() {
 abort("'PATH' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "PATH_FS")) Module["PATH_FS"] = function() {
 abort("'PATH_FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "SYSCALLS")) Module["SYSCALLS"] = function() {
 abort("'SYSCALLS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "syscallMmap2")) Module["syscallMmap2"] = function() {
 abort("'syscallMmap2' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "syscallMunmap")) Module["syscallMunmap"] = function() {
 abort("'syscallMunmap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getSocketFromFD")) Module["getSocketFromFD"] = function() {
 abort("'getSocketFromFD' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getSocketAddress")) Module["getSocketAddress"] = function() {
 abort("'getSocketAddress' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "JSEvents")) Module["JSEvents"] = function() {
 abort("'JSEvents' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerKeyEventCallback")) Module["registerKeyEventCallback"] = function() {
 abort("'registerKeyEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "specialHTMLTargets")) Module["specialHTMLTargets"] = function() {
 abort("'specialHTMLTargets' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "maybeCStringToJsString")) Module["maybeCStringToJsString"] = function() {
 abort("'maybeCStringToJsString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "findEventTarget")) Module["findEventTarget"] = function() {
 abort("'findEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "findCanvasEventTarget")) Module["findCanvasEventTarget"] = function() {
 abort("'findCanvasEventTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getBoundingClientRect")) Module["getBoundingClientRect"] = function() {
 abort("'getBoundingClientRect' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillMouseEventData")) Module["fillMouseEventData"] = function() {
 abort("'fillMouseEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerMouseEventCallback")) Module["registerMouseEventCallback"] = function() {
 abort("'registerMouseEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerWheelEventCallback")) Module["registerWheelEventCallback"] = function() {
 abort("'registerWheelEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerUiEventCallback")) Module["registerUiEventCallback"] = function() {
 abort("'registerUiEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerFocusEventCallback")) Module["registerFocusEventCallback"] = function() {
 abort("'registerFocusEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillDeviceOrientationEventData")) Module["fillDeviceOrientationEventData"] = function() {
 abort("'fillDeviceOrientationEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerDeviceOrientationEventCallback")) Module["registerDeviceOrientationEventCallback"] = function() {
 abort("'registerDeviceOrientationEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillDeviceMotionEventData")) Module["fillDeviceMotionEventData"] = function() {
 abort("'fillDeviceMotionEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerDeviceMotionEventCallback")) Module["registerDeviceMotionEventCallback"] = function() {
 abort("'registerDeviceMotionEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "screenOrientation")) Module["screenOrientation"] = function() {
 abort("'screenOrientation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillOrientationChangeEventData")) Module["fillOrientationChangeEventData"] = function() {
 abort("'fillOrientationChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerOrientationChangeEventCallback")) Module["registerOrientationChangeEventCallback"] = function() {
 abort("'registerOrientationChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillFullscreenChangeEventData")) Module["fillFullscreenChangeEventData"] = function() {
 abort("'fillFullscreenChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerFullscreenChangeEventCallback")) Module["registerFullscreenChangeEventCallback"] = function() {
 abort("'registerFullscreenChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerRestoreOldStyle")) Module["registerRestoreOldStyle"] = function() {
 abort("'registerRestoreOldStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "hideEverythingExceptGivenElement")) Module["hideEverythingExceptGivenElement"] = function() {
 abort("'hideEverythingExceptGivenElement' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "restoreHiddenElements")) Module["restoreHiddenElements"] = function() {
 abort("'restoreHiddenElements' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "setLetterbox")) Module["setLetterbox"] = function() {
 abort("'setLetterbox' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "currentFullscreenStrategy")) Module["currentFullscreenStrategy"] = function() {
 abort("'currentFullscreenStrategy' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "restoreOldWindowedStyle")) Module["restoreOldWindowedStyle"] = function() {
 abort("'restoreOldWindowedStyle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "softFullscreenResizeWebGLRenderTarget")) Module["softFullscreenResizeWebGLRenderTarget"] = function() {
 abort("'softFullscreenResizeWebGLRenderTarget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "doRequestFullscreen")) Module["doRequestFullscreen"] = function() {
 abort("'doRequestFullscreen' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillPointerlockChangeEventData")) Module["fillPointerlockChangeEventData"] = function() {
 abort("'fillPointerlockChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerPointerlockChangeEventCallback")) Module["registerPointerlockChangeEventCallback"] = function() {
 abort("'registerPointerlockChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerPointerlockErrorEventCallback")) Module["registerPointerlockErrorEventCallback"] = function() {
 abort("'registerPointerlockErrorEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "requestPointerLock")) Module["requestPointerLock"] = function() {
 abort("'requestPointerLock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillVisibilityChangeEventData")) Module["fillVisibilityChangeEventData"] = function() {
 abort("'fillVisibilityChangeEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerVisibilityChangeEventCallback")) Module["registerVisibilityChangeEventCallback"] = function() {
 abort("'registerVisibilityChangeEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerTouchEventCallback")) Module["registerTouchEventCallback"] = function() {
 abort("'registerTouchEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillGamepadEventData")) Module["fillGamepadEventData"] = function() {
 abort("'fillGamepadEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerGamepadEventCallback")) Module["registerGamepadEventCallback"] = function() {
 abort("'registerGamepadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerBeforeUnloadEventCallback")) Module["registerBeforeUnloadEventCallback"] = function() {
 abort("'registerBeforeUnloadEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "fillBatteryEventData")) Module["fillBatteryEventData"] = function() {
 abort("'fillBatteryEventData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "battery")) Module["battery"] = function() {
 abort("'battery' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "registerBatteryEventCallback")) Module["registerBatteryEventCallback"] = function() {
 abort("'registerBatteryEventCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "setCanvasElementSize")) Module["setCanvasElementSize"] = function() {
 abort("'setCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getCanvasElementSize")) Module["getCanvasElementSize"] = function() {
 abort("'getCanvasElementSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "polyfillSetImmediate")) Module["polyfillSetImmediate"] = function() {
 abort("'polyfillSetImmediate' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "demangle")) Module["demangle"] = function() {
 abort("'demangle' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "demangleAll")) Module["demangleAll"] = function() {
 abort("'demangleAll' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "jsStackTrace")) Module["jsStackTrace"] = function() {
 abort("'jsStackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stackTrace")) Module["stackTrace"] = function() {
 abort("'stackTrace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getEnvStrings")) Module["getEnvStrings"] = function() {
 abort("'getEnvStrings' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "checkWasiClock")) Module["checkWasiClock"] = function() {
 abort("'checkWasiClock' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64")) Module["writeI53ToI64"] = function() {
 abort("'writeI53ToI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Clamped")) Module["writeI53ToI64Clamped"] = function() {
 abort("'writeI53ToI64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToI64Signaling")) Module["writeI53ToI64Signaling"] = function() {
 abort("'writeI53ToI64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Clamped")) Module["writeI53ToU64Clamped"] = function() {
 abort("'writeI53ToU64Clamped' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeI53ToU64Signaling")) Module["writeI53ToU64Signaling"] = function() {
 abort("'writeI53ToU64Signaling' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "readI53FromI64")) Module["readI53FromI64"] = function() {
 abort("'readI53FromI64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "readI53FromU64")) Module["readI53FromU64"] = function() {
 abort("'readI53FromU64' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "convertI32PairToI53")) Module["convertI32PairToI53"] = function() {
 abort("'convertI32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "convertU32PairToI53")) Module["convertU32PairToI53"] = function() {
 abort("'convertU32PairToI53' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "uncaughtExceptionCount")) Module["uncaughtExceptionCount"] = function() {
 abort("'uncaughtExceptionCount' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "exceptionLast")) Module["exceptionLast"] = function() {
 abort("'exceptionLast' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "exceptionCaught")) Module["exceptionCaught"] = function() {
 abort("'exceptionCaught' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "ExceptionInfo")) Module["ExceptionInfo"] = function() {
 abort("'ExceptionInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "CatchInfo")) Module["CatchInfo"] = function() {
 abort("'CatchInfo' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "exception_addRef")) Module["exception_addRef"] = function() {
 abort("'exception_addRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "exception_decRef")) Module["exception_decRef"] = function() {
 abort("'exception_decRef' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "Browser")) Module["Browser"] = function() {
 abort("'Browser' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "funcWrappers")) Module["funcWrappers"] = function() {
 abort("'funcWrappers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "getFuncWrapper")) Module["getFuncWrapper"] = function() {
 abort("'getFuncWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "setMainLoop")) Module["setMainLoop"] = function() {
 abort("'setMainLoop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "wget")) Module["wget"] = function() {
 abort("'wget' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "tempFixedLengthArray")) Module["tempFixedLengthArray"] = function() {
 abort("'tempFixedLengthArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "miniTempWebGLFloatBuffers")) Module["miniTempWebGLFloatBuffers"] = function() {
 abort("'miniTempWebGLFloatBuffers' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "heapObjectForWebGLType")) Module["heapObjectForWebGLType"] = function() {
 abort("'heapObjectForWebGLType' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "heapAccessShiftForWebGLHeap")) Module["heapAccessShiftForWebGLHeap"] = function() {
 abort("'heapAccessShiftForWebGLHeap' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GL")) Module["GL"] = function() {
 abort("'GL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGet")) Module["emscriptenWebGLGet"] = function() {
 abort("'emscriptenWebGLGet' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "computeUnpackAlignedImageSize")) Module["computeUnpackAlignedImageSize"] = function() {
 abort("'computeUnpackAlignedImageSize' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetTexPixelData")) Module["emscriptenWebGLGetTexPixelData"] = function() {
 abort("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetUniform")) Module["emscriptenWebGLGetUniform"] = function() {
 abort("'emscriptenWebGLGetUniform' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "webglGetUniformLocation")) Module["webglGetUniformLocation"] = function() {
 abort("'webglGetUniformLocation' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "webglPrepareUniformLocationsBeforeFirstUse")) Module["webglPrepareUniformLocationsBeforeFirstUse"] = function() {
 abort("'webglPrepareUniformLocationsBeforeFirstUse' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "webglGetLeftBracePos")) Module["webglGetLeftBracePos"] = function() {
 abort("'webglGetLeftBracePos' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetVertexAttrib")) Module["emscriptenWebGLGetVertexAttrib"] = function() {
 abort("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "writeGLArray")) Module["writeGLArray"] = function() {
 abort("'writeGLArray' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "FS")) Module["FS"] = function() {
 abort("'FS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "MEMFS")) Module["MEMFS"] = function() {
 abort("'MEMFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "TTY")) Module["TTY"] = function() {
 abort("'TTY' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "PIPEFS")) Module["PIPEFS"] = function() {
 abort("'PIPEFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "SOCKFS")) Module["SOCKFS"] = function() {
 abort("'SOCKFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "_setNetworkCallback")) Module["_setNetworkCallback"] = function() {
 abort("'_setNetworkCallback' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "AL")) Module["AL"] = function() {
 abort("'AL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "SDL_unicode")) Module["SDL_unicode"] = function() {
 abort("'SDL_unicode' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "SDL_ttfContext")) Module["SDL_ttfContext"] = function() {
 abort("'SDL_ttfContext' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "SDL_audio")) Module["SDL_audio"] = function() {
 abort("'SDL_audio' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "SDL")) Module["SDL"] = function() {
 abort("'SDL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "SDL_gfx")) Module["SDL_gfx"] = function() {
 abort("'SDL_gfx' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GLUT")) Module["GLUT"] = function() {
 abort("'GLUT' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "EGL")) Module["EGL"] = function() {
 abort("'EGL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GLFW_Window")) Module["GLFW_Window"] = function() {
 abort("'GLFW_Window' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GLFW")) Module["GLFW"] = function() {
 abort("'GLFW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GLEW")) Module["GLEW"] = function() {
 abort("'GLEW' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "IDBStore")) Module["IDBStore"] = function() {
 abort("'IDBStore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "runAndAbortIfError")) Module["runAndAbortIfError"] = function() {
 abort("'runAndAbortIfError' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

Module["PThread"] = PThread;

if (!Object.getOwnPropertyDescriptor(Module, "killThread")) Module["killThread"] = function() {
 abort("'killThread' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "cleanupThread")) Module["cleanupThread"] = function() {
 abort("'cleanupThread' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "cancelThread")) Module["cancelThread"] = function() {
 abort("'cancelThread' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "spawnThread")) Module["spawnThread"] = function() {
 abort("'spawnThread' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "establishStackSpace")) Module["establishStackSpace"] = function() {
 abort("'establishStackSpace' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "invokeEntryPoint")) Module["invokeEntryPoint"] = function() {
 abort("'invokeEntryPoint' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GodotWebXR")) Module["GodotWebXR"] = function() {
 abort("'GodotWebXR' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GodotWebSocket")) Module["GodotWebSocket"] = function() {
 abort("'GodotWebSocket' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GodotRTCDataChannel")) Module["GodotRTCDataChannel"] = function() {
 abort("'GodotRTCDataChannel' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GodotRTCPeerConnection")) Module["GodotRTCPeerConnection"] = function() {
 abort("'GodotRTCPeerConnection' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GodotAudio")) Module["GodotAudio"] = function() {
 abort("'GodotAudio' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GodotAudioWorklet")) Module["GodotAudioWorklet"] = function() {
 abort("'GodotAudioWorklet' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GodotAudioScript")) Module["GodotAudioScript"] = function() {
 abort("'GodotAudioScript' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GodotDisplayVK")) Module["GodotDisplayVK"] = function() {
 abort("'GodotDisplayVK' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GodotDisplayCursor")) Module["GodotDisplayCursor"] = function() {
 abort("'GodotDisplayCursor' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GodotDisplayScreen")) Module["GodotDisplayScreen"] = function() {
 abort("'GodotDisplayScreen' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GodotDisplay")) Module["GodotDisplay"] = function() {
 abort("'GodotDisplay' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GodotFetch")) Module["GodotFetch"] = function() {
 abort("'GodotFetch' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "IDHandler")) Module["IDHandler"] = function() {
 abort("'IDHandler' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GodotConfig")) Module["GodotConfig"] = function() {
 abort("'GodotConfig' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GodotFS")) Module["GodotFS"] = function() {
 abort("'GodotFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GodotOS")) Module["GodotOS"] = function() {
 abort("'GodotOS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GodotEventListeners")) Module["GodotEventListeners"] = function() {
 abort("'GodotEventListeners' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GodotPWA")) Module["GodotPWA"] = function() {
 abort("'GodotPWA' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GodotRuntime")) Module["GodotRuntime"] = function() {
 abort("'GodotRuntime' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GodotInputGamepads")) Module["GodotInputGamepads"] = function() {
 abort("'GodotInputGamepads' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GodotInputDragDrop")) Module["GodotInputDragDrop"] = function() {
 abort("'GodotInputDragDrop' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GodotInput")) Module["GodotInput"] = function() {
 abort("'GodotInput' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GodotWebGL2")) Module["GodotWebGL2"] = function() {
 abort("'GodotWebGL2' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "GodotJSWrapper")) Module["GodotJSWrapper"] = function() {
 abort("'GodotJSWrapper' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "IDBFS")) Module["IDBFS"] = function() {
 abort("'IDBFS' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "emscriptenWebGLGetIndexed")) Module["emscriptenWebGLGetIndexed"] = function() {
 abort("'emscriptenWebGLGetIndexed' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "warnOnce")) Module["warnOnce"] = function() {
 abort("'warnOnce' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stackSave")) Module["stackSave"] = function() {
 abort("'stackSave' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stackRestore")) Module["stackRestore"] = function() {
 abort("'stackRestore' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stackAlloc")) Module["stackAlloc"] = function() {
 abort("'stackAlloc' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "AsciiToString")) Module["AsciiToString"] = function() {
 abort("'AsciiToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stringToAscii")) Module["stringToAscii"] = function() {
 abort("'stringToAscii' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "UTF16ToString")) Module["UTF16ToString"] = function() {
 abort("'UTF16ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF16")) Module["stringToUTF16"] = function() {
 abort("'stringToUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF16")) Module["lengthBytesUTF16"] = function() {
 abort("'lengthBytesUTF16' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "UTF32ToString")) Module["UTF32ToString"] = function() {
 abort("'UTF32ToString' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "stringToUTF32")) Module["stringToUTF32"] = function() {
 abort("'stringToUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "lengthBytesUTF32")) Module["lengthBytesUTF32"] = function() {
 abort("'lengthBytesUTF32' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8")) Module["allocateUTF8"] = function() {
 abort("'allocateUTF8' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

if (!Object.getOwnPropertyDescriptor(Module, "allocateUTF8OnStack")) Module["allocateUTF8OnStack"] = function() {
 abort("'allocateUTF8OnStack' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
};

Module["writeStackCookie"] = writeStackCookie;

Module["checkStackCookie"] = checkStackCookie;

Module["PThread"] = PThread;

Module["wasmMemory"] = wasmMemory;

Module["ExitStatus"] = ExitStatus;

if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_NORMAL")) Object.defineProperty(Module, "ALLOC_NORMAL", {
 configurable: true,
 get: function() {
  abort("'ALLOC_NORMAL' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
 }
});

if (!Object.getOwnPropertyDescriptor(Module, "ALLOC_STACK")) Object.defineProperty(Module, "ALLOC_STACK", {
 configurable: true,
 get: function() {
  abort("'ALLOC_STACK' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the FAQ)");
 }
});

var calledRun;

function ExitStatus(status) {
 this.name = "ExitStatus";
 this.message = "Program terminated with exit(" + status + ")";
 this.status = status;
}

var calledMain = false;

dependenciesFulfilled = function runCaller() {
 if (!calledRun) run();
 if (!calledRun) dependenciesFulfilled = runCaller;
};

function callMain(args) {
 assert(runDependencies == 0, 'cannot call main when async dependencies remain! (listen on Module["onRuntimeInitialized"])');
 assert(__ATPRERUN__.length == 0, "cannot call main when preRun functions remain to be called");
 var entryFunction = Module["_main"];
 args = args || [];
 var argc = args.length + 1;
 var argv = stackAlloc((argc + 1) * 4);
 GROWABLE_HEAP_I32()[argv >> 2] = allocateUTF8OnStack(thisProgram);
 for (var i = 1; i < argc; i++) {
  GROWABLE_HEAP_I32()[(argv >> 2) + i] = allocateUTF8OnStack(args[i - 1]);
 }
 GROWABLE_HEAP_I32()[(argv >> 2) + argc] = 0;
 try {
  var ret = entryFunction(argc, argv);
  exit(ret, true);
  return ret;
 } catch (e) {
  return handleException(e);
 } finally {
  calledMain = true;
 }
}

function stackCheckInit() {
 _emscripten_stack_init();
 writeStackCookie();
}

function run(args) {
 args = args || arguments_;
 if (runDependencies > 0) {
  return;
 }
 stackCheckInit();
 if (ENVIRONMENT_IS_PTHREAD) {
  readyPromiseResolve(Module);
  initRuntime();
  postMessage({
   "cmd": "loaded"
  });
  return;
 }
 preRun();
 if (runDependencies > 0) {
  return;
 }
 function doRun() {
  if (calledRun) return;
  calledRun = true;
  Module["calledRun"] = true;
  if (ABORT) return;
  initRuntime();
  preMain();
  readyPromiseResolve(Module);
  if (Module["onRuntimeInitialized"]) Module["onRuntimeInitialized"]();
  if (shouldRunNow) callMain(args);
  postRun();
 }
 if (Module["setStatus"]) {
  Module["setStatus"]("Running...");
  setTimeout(function() {
   setTimeout(function() {
    Module["setStatus"]("");
   }, 1);
   doRun();
  }, 1);
 } else {
  doRun();
 }
 checkStackCookie();
}

Module["run"] = run;

function exit(status, implicit) {
 EXITSTATUS = status;
 if (!implicit) {
  if (ENVIRONMENT_IS_PTHREAD) {
   err("Pthread 0x" + _pthread_self().toString(16) + " called exit(), posting exitProcess.");
   postMessage({
    "cmd": "exitProcess",
    "returnCode": status
   });
   throw new ExitStatus(status);
  } else {
   err("main thread called exit: keepRuntimeAlive=" + keepRuntimeAlive() + " (counter=" + runtimeKeepaliveCounter + ")");
  }
 }
 if (keepRuntimeAlive()) {
  if (!implicit) {
   var msg = "program exited (with status: " + status + "), but keepRuntimeAlive() is set (counter=" + runtimeKeepaliveCounter + ") due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)";
   readyPromiseReject(msg);
   err(msg);
  }
 } else {
  PThread.terminateAllThreads();
  exitRuntime();
 }
 procExit(status);
}

function procExit(code) {
 EXITSTATUS = code;
 if (!keepRuntimeAlive()) {
  PThread.terminateAllThreads();
  if (Module["onExit"]) Module["onExit"](code);
  ABORT = true;
 }
 quit_(code, new ExitStatus(code));
}

if (Module["preInit"]) {
 if (typeof Module["preInit"] == "function") Module["preInit"] = [ Module["preInit"] ];
 while (Module["preInit"].length > 0) {
  Module["preInit"].pop()();
 }
}

var shouldRunNow = false;

if (Module["noInitialRun"]) shouldRunNow = false;

if (ENVIRONMENT_IS_PTHREAD) {
 noExitRuntime = false;
 PThread.initWorker();
}

run();


  return Godot.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = Godot;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return Godot; });
else if (typeof exports === 'object')
  exports["Godot"] = Godot;

const Features = { // eslint-disable-line no-unused-vars
	/**
	 * Check whether WebGL is available. Optionally, specify a particular version of WebGL to check for.
	 *
	 * @param {number=} [majorVersion=1] The major WebGL version to check for.
	 * @returns {boolean} If the given major version of WebGL is available.
	 * @function Engine.isWebGLAvailable
	 */
	isWebGLAvailable: function (majorVersion = 1) {
		try {
			return !!document.createElement('canvas').getContext(['webgl', 'webgl2'][majorVersion - 1]);
		} catch (e) { /* Not available */ }
		return false;
	},

	/**
	 * Check whether the Fetch API available and supports streaming responses.
	 *
	 * @returns {boolean} If the Fetch API is available and supports streaming responses.
	 * @function Engine.isFetchAvailable
	 */
	isFetchAvailable: function () {
		return 'fetch' in window && 'Response' in window && 'body' in window.Response.prototype;
	},

	/**
	 * Check whether the engine is running in a Secure Context.
	 *
	 * @returns {boolean} If the engine is running in a Secure Context.
	 * @function Engine.isSecureContext
	 */
	isSecureContext: function () {
		return window['isSecureContext'] === true;
	},

	/**
	 * Check whether the engine is cross origin isolated.
	 * This value is dependent on Cross-Origin-Opener-Policy and Cross-Origin-Embedder-Policy headers sent by the server.
	 *
	 * @returns {boolean} If the engine is running in a Secure Context.
	 * @function Engine.isSecureContext
	 */
	isCrossOriginIsolated: function () {
		return window['crossOriginIsolated'] === true;
	},

	/**
	 * Check whether SharedBufferArray is available.
	 *
	 * Most browsers require the page to be running in a secure context, and the
	 * the server to provide specific CORS headers for SharedArrayBuffer to be available.
	 *
	 * @returns {boolean} If SharedArrayBuffer is available.
	 * @function Engine.isSharedArrayBufferAvailable
	 */
	isSharedArrayBufferAvailable: function () {
		return 'SharedArrayBuffer' in window;
	},

	/**
	 * Check whether the AudioContext supports AudioWorkletNodes.
	 *
	 * @returns {boolean} If AudioWorkletNode is available.
	 * @function Engine.isAudioWorkletAvailable
	 */
	isAudioWorkletAvailable: function () {
		return 'AudioContext' in window && 'audioWorklet' in AudioContext.prototype;
	},

	/**
	 * Return an array of missing required features (as string).
	 *
	 * @returns {Array<string>} A list of human-readable missing features.
	 * @function Engine.getMissingFeatures
	 */
	getMissingFeatures: function () {
		const missing = [];
		if (!Features.isWebGLAvailable(2)) {
			missing.push('WebGL2 - Check web browser configuration and hardware support');
		}
		if (!Features.isFetchAvailable()) {
			missing.push('Fetch - Check web browser version');
		}
		if (!Features.isSecureContext()) {
			missing.push('Secure Context - Check web server configuration (use HTTPS)');
		}
		if (!Features.isCrossOriginIsolated()) {
			missing.push('Cross Origin Isolation - Check web server configuration (send correct headers)');
		}
		if (!Features.isSharedArrayBufferAvailable()) {
			missing.push('SharedArrayBuffer - Check web server configuration (send correct headers)');
		}
		// Audio is normally optional since we have a dummy fallback.
		return missing;
	},
};

const Preloader = /** @constructor */ function () { // eslint-disable-line no-unused-vars
	function getTrackedResponse(response, load_status) {
		function onloadprogress(reader, controller) {
			return reader.read().then(function (result) {
				if (load_status.done) {
					return Promise.resolve();
				}
				if (result.value) {
					controller.enqueue(result.value);
					load_status.loaded += result.value.length;
				}
				if (!result.done) {
					return onloadprogress(reader, controller);
				}
				load_status.done = true;
				return Promise.resolve();
			});
		}
		const reader = response.body.getReader();
		return new Response(new ReadableStream({
			start: function (controller) {
				onloadprogress(reader, controller).then(function () {
					controller.close();
				});
			},
		}), { headers: response.headers });
	}

	function loadFetch(file, tracker, fileSize, raw) {
		tracker[file] = {
			total: fileSize || 0,
			loaded: 0,
			done: false,
		};
		return fetch(file).then(function (response) {
			if (!response.ok) {
				return Promise.reject(new Error(`Failed loading file '${file}'`));
			}
			const tr = getTrackedResponse(response, tracker[file]);
			if (raw) {
				return Promise.resolve(tr);
			}
			return tr.arrayBuffer();
		});
	}

	function retry(func, attempts = 1) {
		function onerror(err) {
			if (attempts <= 1) {
				return Promise.reject(err);
			}
			return new Promise(function (resolve, reject) {
				setTimeout(function () {
					retry(func, attempts - 1).then(resolve).catch(reject);
				}, 1000);
			});
		}
		return func().catch(onerror);
	}

	const DOWNLOAD_ATTEMPTS_MAX = 4;
	const loadingFiles = {};
	const lastProgress = { loaded: 0, total: 0 };
	let progressFunc = null;

	const animateProgress = function () {
		let loaded = 0;
		let total = 0;
		let totalIsValid = true;
		let progressIsFinal = true;

		Object.keys(loadingFiles).forEach(function (file) {
			const stat = loadingFiles[file];
			if (!stat.done) {
				progressIsFinal = false;
			}
			if (!totalIsValid || stat.total === 0) {
				totalIsValid = false;
				total = 0;
			} else {
				total += stat.total;
			}
			loaded += stat.loaded;
		});
		if (loaded !== lastProgress.loaded || total !== lastProgress.total) {
			lastProgress.loaded = loaded;
			lastProgress.total = total;
			if (typeof progressFunc === 'function') {
				progressFunc(loaded, total);
			}
		}
		if (!progressIsFinal) {
			requestAnimationFrame(animateProgress);
		}
	};

	this.animateProgress = animateProgress;

	this.setProgressFunc = function (callback) {
		progressFunc = callback;
	};

	this.loadPromise = function (file, fileSize, raw = false) {
		return retry(loadFetch.bind(null, file, loadingFiles, fileSize, raw), DOWNLOAD_ATTEMPTS_MAX);
	};

	this.preloadedFiles = [];
	this.preload = function (pathOrBuffer, destPath, fileSize) {
		let buffer = null;
		if (typeof pathOrBuffer === 'string') {
			const me = this;
			return this.loadPromise(pathOrBuffer, fileSize).then(function (buf) {
				me.preloadedFiles.push({
					path: destPath || pathOrBuffer,
					buffer: buf,
				});
				return Promise.resolve();
			});
		} else if (pathOrBuffer instanceof ArrayBuffer) {
			buffer = new Uint8Array(pathOrBuffer);
		} else if (ArrayBuffer.isView(pathOrBuffer)) {
			buffer = new Uint8Array(pathOrBuffer.buffer);
		}
		if (buffer) {
			this.preloadedFiles.push({
				path: destPath,
				buffer: pathOrBuffer,
			});
			return Promise.resolve();
		}
		return Promise.reject(new Error('Invalid object for preloading'));
	};
};

/**
 * An object used to configure the Engine instance based on godot export options, and to override those in custom HTML
 * templates if needed.
 *
 * @header Engine configuration
 * @summary The Engine configuration object. This is just a typedef, create it like a regular object, e.g.:
 *
 * ``const MyConfig = { executable: 'godot', unloadAfterInit: false }``
 *
 * @typedef {Object} EngineConfig
 */
const EngineConfig = {}; // eslint-disable-line no-unused-vars

/**
 * @struct
 * @constructor
 * @ignore
 */
const InternalConfig = function (initConfig) { // eslint-disable-line no-unused-vars
	const cfg = /** @lends {InternalConfig.prototype} */ {
		/**
		 * Whether the unload the engine automatically after the instance is initialized.
		 *
		 * @memberof EngineConfig
		 * @default
		 * @type {boolean}
		 */
		unloadAfterInit: true,
		/**
		 * The HTML DOM Canvas object to use.
		 *
		 * By default, the first canvas element in the document will be used is none is specified.
		 *
		 * @memberof EngineConfig
		 * @default
		 * @type {?HTMLCanvasElement}
		 */
		canvas: null,
		/**
		 * The name of the WASM file without the extension. (Set by Godot Editor export process).
		 *
		 * @memberof EngineConfig
		 * @default
		 * @type {string}
		 */
		executable: '',
		/**
		 * An alternative name for the game pck to load. The executable name is used otherwise.
		 *
		 * @memberof EngineConfig
		 * @default
		 * @type {?string}
		 */
		mainPack: null,
		/**
		 * Specify a language code to select the proper localization for the game.
		 *
		 * The browser locale will be used if none is specified. See complete list of
		 * :ref:`supported locales <doc_locales>`.
		 *
		 * @memberof EngineConfig
		 * @type {?string}
		 * @default
		 */
		locale: null,
		/**
		 * The canvas resize policy determines how the canvas should be resized by Godot.
		 *
		 * ``0`` means Godot won't do any resizing. This is useful if you want to control the canvas size from
		 * javascript code in your template.
		 *
		 * ``1`` means Godot will resize the canvas on start, and when changing window size via engine functions.
		 *
		 * ``2`` means Godot will adapt the canvas size to match the whole browser window.
		 *
		 * @memberof EngineConfig
		 * @type {number}
		 * @default
		 */
		canvasResizePolicy: 2,
		/**
		 * The arguments to be passed as command line arguments on startup.
		 *
		 * See :ref:`command line tutorial <doc_command_line_tutorial>`.
		 *
		 * **Note**: :js:meth:`startGame <Engine.prototype.startGame>` will always add the ``--main-pack`` argument.
		 *
		 * @memberof EngineConfig
		 * @type {Array<string>}
		 * @default
		 */
		args: [],
		/**
		 * When enabled, the game canvas will automatically grab the focus when the engine starts.
		 *
		 * @memberof EngineConfig
		 * @type {boolean}
		 * @default
		 */
		focusCanvas: true,
		/**
		 * When enabled, this will turn on experimental virtual keyboard support on mobile.
		 *
		 * @memberof EngineConfig
		 * @type {boolean}
		 * @default
		 */
		experimentalVK: false,
		/**
		 * The progressive web app service worker to install.
		 * @memberof EngineConfig
		 * @default
		 * @type {string}
		 */
		serviceWorker: '',
		/**
		 * @ignore
		 * @type {Array.<string>}
		 */
		persistentPaths: ['/userfs'],
		/**
		 * @ignore
		 * @type {boolean}
		 */
		persistentDrops: false,
		/**
		 * @ignore
		 * @type {Array.<string>}
		 */
		gdextensionLibs: [],
		/**
		 * @ignore
		 * @type {Array.<string>}
		 */
		fileSizes: [],
		/**
		 * A callback function for handling Godot's ``OS.execute`` calls.
		 *
		 * This is for example used in the Web Editor template to switch between project manager and editor, and for running the game.
		 *
		 * @callback EngineConfig.onExecute
		 * @param {string} path The path that Godot's wants executed.
		 * @param {Array.<string>} args The arguments of the "command" to execute.
		 */
		/**
		 * @ignore
		 * @type {?function(string, Array.<string>)}
		 */
		onExecute: null,
		/**
		 * A callback function for being notified when the Godot instance quits.
		 *
		 * **Note**: This function will not be called if the engine crashes or become unresponsive.
		 *
		 * @callback EngineConfig.onExit
		 * @param {number} status_code The status code returned by Godot on exit.
		 */
		/**
		 * @ignore
		 * @type {?function(number)}
		 */
		onExit: null,
		/**
		 * A callback function for displaying download progress.
		 *
		 * The function is called once per frame while downloading files, so the usage of ``requestAnimationFrame()``
		 * is not necessary.
		 *
		 * If the callback function receives a total amount of bytes as 0, this means that it is impossible to calculate.
		 * Possible reasons include:
		 *
		 * -  Files are delivered with server-side chunked compression
		 * -  Files are delivered with server-side compression on Chromium
		 * -  Not all file downloads have started yet (usually on servers without multi-threading)
		 *
		 * @callback EngineConfig.onProgress
		 * @param {number} current The current amount of downloaded bytes so far.
		 * @param {number} total The total amount of bytes to be downloaded.
		 */
		/**
		 * @ignore
		 * @type {?function(number, number)}
		 */
		onProgress: null,
		/**
		 * A callback function for handling the standard output stream. This method should usually only be used in debug pages.
		 *
		 * By default, ``console.log()`` is used.
		 *
		 * @callback EngineConfig.onPrint
		 * @param {...*} [var_args] A variadic number of arguments to be printed.
		 */
		/**
		 * @ignore
		 * @type {?function(...*)}
		 */
		onPrint: function () {
			console.log.apply(console, Array.from(arguments)); // eslint-disable-line no-console
		},
		/**
		 * A callback function for handling the standard error stream. This method should usually only be used in debug pages.
		 *
		 * By default, ``console.error()`` is used.
		 *
		 * @callback EngineConfig.onPrintError
		 * @param {...*} [var_args] A variadic number of arguments to be printed as errors.
		*/
		/**
		 * @ignore
		 * @type {?function(...*)}
		 */
		onPrintError: function (var_args) {
			console.error.apply(console, Array.from(arguments)); // eslint-disable-line no-console
		},
	};

	/**
	 * @ignore
	 * @struct
	 * @constructor
	 * @param {EngineConfig} opts
	 */
	function Config(opts) {
		this.update(opts);
	}

	Config.prototype = cfg;

	/**
	 * @ignore
	 * @param {EngineConfig} opts
	 */
	Config.prototype.update = function (opts) {
		const config = opts || {};
		// NOTE: We must explicitly pass the default, accessing it via
		// the key will fail due to closure compiler renames.
		function parse(key, def) {
			if (typeof (config[key]) === 'undefined') {
				return def;
			}
			return config[key];
		}
		// Module config
		this.unloadAfterInit = parse('unloadAfterInit', this.unloadAfterInit);
		this.onPrintError = parse('onPrintError', this.onPrintError);
		this.onPrint = parse('onPrint', this.onPrint);
		this.onProgress = parse('onProgress', this.onProgress);

		// Godot config
		this.canvas = parse('canvas', this.canvas);
		this.executable = parse('executable', this.executable);
		this.mainPack = parse('mainPack', this.mainPack);
		this.locale = parse('locale', this.locale);
		this.canvasResizePolicy = parse('canvasResizePolicy', this.canvasResizePolicy);
		this.persistentPaths = parse('persistentPaths', this.persistentPaths);
		this.persistentDrops = parse('persistentDrops', this.persistentDrops);
		this.experimentalVK = parse('experimentalVK', this.experimentalVK);
		this.focusCanvas = parse('focusCanvas', this.focusCanvas);
		this.serviceWorker = parse('serviceWorker', this.serviceWorker);
		this.gdextensionLibs = parse('gdextensionLibs', this.gdextensionLibs);
		this.fileSizes = parse('fileSizes', this.fileSizes);
		this.args = parse('args', this.args);
		this.onExecute = parse('onExecute', this.onExecute);
		this.onExit = parse('onExit', this.onExit);
	};

	/**
	 * @ignore
	 * @param {string} loadPath
	 * @param {Response} response
	 */
	Config.prototype.getModuleConfig = function (loadPath, response) {
		let r = response;
		return {
			'print': this.onPrint,
			'printErr': this.onPrintError,
			'thisProgram': this.executable,
			'noExitRuntime': false,
			'dynamicLibraries': [`${loadPath}.side.wasm`],
			'instantiateWasm': function (imports, onSuccess) {
				function done(result) {
					onSuccess(result['instance'], result['module']);
				}
				if (typeof (WebAssembly.instantiateStreaming) !== 'undefined') {
					WebAssembly.instantiateStreaming(Promise.resolve(r), imports).then(done);
				} else {
					r.arrayBuffer().then(function (buffer) {
						WebAssembly.instantiate(buffer, imports).then(done);
					});
				}
				r = null;
				return {};
			},
			'locateFile': function (path) {
				if (path.endsWith('.worker.js')) {
					return `${loadPath}.worker.js`;
				} else if (path.endsWith('.audio.worklet.js')) {
					return `${loadPath}.audio.worklet.js`;
				} else if (path.endsWith('.js')) {
					return `${loadPath}.js`;
				} else if (path.endsWith('.side.wasm')) {
					return `${loadPath}.side.wasm`;
				} else if (path.endsWith('.wasm')) {
					return `${loadPath}.wasm`;
				}
				return path;
			},
		};
	};

	/**
	 * @ignore
	 * @param {function()} cleanup
	 */
	Config.prototype.getGodotConfig = function (cleanup) {
		// Try to find a canvas
		if (!(this.canvas instanceof HTMLCanvasElement)) {
			const nodes = document.getElementsByTagName('canvas');
			if (nodes.length && nodes[0] instanceof HTMLCanvasElement) {
				const first = nodes[0];
				this.canvas = /** @type {!HTMLCanvasElement} */ (first);
			}
			if (!this.canvas) {
				throw new Error('No canvas found in page');
			}
		}
		// Canvas can grab focus on click, or key events won't work.
		if (this.canvas.tabIndex < 0) {
			this.canvas.tabIndex = 0;
		}

		// Browser locale, or custom one if defined.
		let locale = this.locale;
		if (!locale) {
			locale = navigator.languages ? navigator.languages[0] : navigator.language;
			locale = locale.split('.')[0];
		}
		locale = locale.replace('-', '_');
		const onExit = this.onExit;

		// Godot configuration.
		return {
			'canvas': this.canvas,
			'canvasResizePolicy': this.canvasResizePolicy,
			'locale': locale,
			'persistentDrops': this.persistentDrops,
			'virtualKeyboard': this.experimentalVK,
			'focusCanvas': this.focusCanvas,
			'onExecute': this.onExecute,
			'onExit': function (p_code) {
				cleanup(); // We always need to call the cleanup callback to free memory.
				if (typeof (onExit) === 'function') {
					onExit(p_code);
				}
			},
		};
	};
	return new Config(initConfig);
};

/**
 * Projects exported for the Web expose the :js:class:`Engine` class to the JavaScript environment, that allows
 * fine control over the engine's start-up process.
 *
 * This API is built in an asynchronous manner and requires basic understanding
 * of `Promises <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises>`__.
 *
 * @module Engine
 * @header Web export JavaScript reference
 */
const Engine = (function () {
	const preloader = new Preloader();

	let loadPromise = null;
	let loadPath = '';
	let initPromise = null;

	/**
	 * @classdesc The ``Engine`` class provides methods for loading and starting exported projects on the Web. For default export
	 * settings, this is already part of the exported HTML page. To understand practical use of the ``Engine`` class,
	 * see :ref:`Custom HTML page for Web export <doc_customizing_html5_shell>`.
	 *
	 * @description Create a new Engine instance with the given configuration.
	 *
	 * @global
	 * @constructor
	 * @param {EngineConfig} initConfig The initial config for this instance.
	 */
	function Engine(initConfig) { // eslint-disable-line no-shadow
		this.config = new InternalConfig(initConfig);
		this.rtenv = null;
	}

	/**
	 * Load the engine from the specified base path.
	 *
	 * @param {string} basePath Base path of the engine to load.
	 * @param {number=} [size=0] The file size if known.
	 * @returns {Promise} A Promise that resolves once the engine is loaded.
	 *
	 * @function Engine.load
	 */
	Engine.load = function (basePath, size) {
		if (loadPromise == null) {
			loadPath = basePath;
			loadPromise = preloader.loadPromise(`${loadPath}.wasm`, size, true);
			requestAnimationFrame(preloader.animateProgress);
		}
		return loadPromise;
	};

	/**
	 * Unload the engine to free memory.
	 *
	 * This method will be called automatically depending on the configuration. See :js:attr:`unloadAfterInit`.
	 *
	 * @function Engine.unload
	 */
	Engine.unload = function () {
		loadPromise = null;
	};

	/**
	 * Safe Engine constructor, creates a new prototype for every new instance to avoid prototype pollution.
	 * @ignore
	 * @constructor
	 */
	function SafeEngine(initConfig) {
		const proto = /** @lends Engine.prototype */ {
			/**
			 * Initialize the engine instance. Optionally, pass the base path to the engine to load it,
			 * if it hasn't been loaded yet. See :js:meth:`Engine.load`.
			 *
			 * @param {string=} basePath Base path of the engine to load.
			 * @return {Promise} A ``Promise`` that resolves once the engine is loaded and initialized.
			 */
			init: function (basePath) {
				if (initPromise) {
					return initPromise;
				}
				if (loadPromise == null) {
					if (!basePath) {
						initPromise = Promise.reject(new Error('A base path must be provided when calling `init` and the engine is not loaded.'));
						return initPromise;
					}
					Engine.load(basePath, this.config.fileSizes[`${basePath}.wasm`]);
				}
				const me = this;
				function doInit(promise) {
					// Care! Promise chaining is bogus with old emscripten versions.
					// This caused a regression with the Mono build (which uses an older emscripten version).
					// Make sure to test that when refactoring.
					return new Promise(function (resolve, reject) {
						promise.then(function (response) {
							const cloned = new Response(response.clone().body, { 'headers': [['content-type', 'application/wasm']] });
							Godot(me.config.getModuleConfig(loadPath, cloned)).then(function (module) {
								const paths = me.config.persistentPaths;
								module['initFS'](paths).then(function (err) {
									me.rtenv = module;
									if (me.config.unloadAfterInit) {
										Engine.unload();
									}
									resolve();
								});
							});
						});
					});
				}
				preloader.setProgressFunc(this.config.onProgress);
				initPromise = doInit(loadPromise);
				return initPromise;
			},

			/**
			 * Load a file so it is available in the instance's file system once it runs. Must be called **before** starting the
			 * instance.
			 *
			 * If not provided, the ``path`` is derived from the URL of the loaded file.
			 *
			 * @param {string|ArrayBuffer} file The file to preload.
			 *
			 * If a ``string`` the file will be loaded from that path.
			 *
			 * If an ``ArrayBuffer`` or a view on one, the buffer will used as the content of the file.
			 *
			 * @param {string=} path Path by which the file will be accessible. Required, if ``file`` is not a string.
			 *
			 * @returns {Promise} A Promise that resolves once the file is loaded.
			 */
			preloadFile: function (file, path) {
				return preloader.preload(file, path, this.config.fileSizes[file]);
			},

			/**
			 * Start the engine instance using the given override configuration (if any).
			 * :js:meth:`startGame <Engine.prototype.startGame>` can be used in typical cases instead.
			 *
			 * This will initialize the instance if it is not initialized. For manual initialization, see :js:meth:`init <Engine.prototype.init>`.
			 * The engine must be loaded beforehand.
			 *
			 * Fails if a canvas cannot be found on the page, or not specified in the configuration.
			 *
			 * @param {EngineConfig} override An optional configuration override.
			 * @return {Promise} Promise that resolves once the engine started.
			 */
			start: function (override) {
				this.config.update(override);
				const me = this;
				return me.init().then(function () {
					if (!me.rtenv) {
						return Promise.reject(new Error('The engine must be initialized before it can be started'));
					}

					let config = {};
					try {
						config = me.config.getGodotConfig(function () {
							me.rtenv = null;
						});
					} catch (e) {
						return Promise.reject(e);
					}
					// Godot configuration.
					me.rtenv['initConfig'](config);

					// Preload GDExtension libraries.
					const libs = [];
					me.config.gdextensionLibs.forEach(function (lib) {
						libs.push(me.rtenv['loadDynamicLibrary'](lib, { 'loadAsync': true }));
					});
					return Promise.all(libs).then(function () {
						return new Promise(function (resolve, reject) {
							preloader.preloadedFiles.forEach(function (file) {
								me.rtenv['copyToFS'](file.path, file.buffer);
							});
							preloader.preloadedFiles.length = 0; // Clear memory
							me.rtenv['callMain'](me.config.args);
							initPromise = null;
							if (me.config.serviceWorker && 'serviceWorker' in navigator) {
								navigator.serviceWorker.register(me.config.serviceWorker);
							}
							resolve();
						});
					});
				});
			},

			/**
			 * Start the game instance using the given configuration override (if any).
			 *
			 * This will initialize the instance if it is not initialized. For manual initialization, see :js:meth:`init <Engine.prototype.init>`.
			 *
			 * This will load the engine if it is not loaded, and preload the main pck.
			 *
			 * This method expects the initial config (or the override) to have both the :js:attr:`executable` and :js:attr:`mainPack`
			 * properties set (normally done by the editor during export).
			 *
			 * @param {EngineConfig} override An optional configuration override.
			 * @return {Promise} Promise that resolves once the game started.
			 */
			startGame: function (override) {
				this.config.update(override);
				// Add main-pack argument.
				const exe = this.config.executable;
				const pack = this.config.mainPack || `${exe}.pck`;
				this.config.args = ['--main-pack', pack].concat(this.config.args);
				// Start and init with execName as loadPath if not inited.
				const me = this;
				return Promise.all([
					this.init(exe),
					this.preloadFile(pack, pack),
				]).then(function () {
					return me.start.apply(me);
				});
			},

			/**
			 * Create a file at the specified ``path`` with the passed as ``buffer`` in the instance's file system.
			 *
			 * @param {string} path The location where the file will be created.
			 * @param {ArrayBuffer} buffer The content of the file.
			 */
			copyToFS: function (path, buffer) {
				if (this.rtenv == null) {
					throw new Error('Engine must be inited before copying files');
				}
				this.rtenv['copyToFS'](path, buffer);
			},

			/**
			 * Request that the current instance quit.
			 *
			 * This is akin the user pressing the close button in the window manager, and will
			 * have no effect if the engine has crashed, or is stuck in a loop.
			 *
			 */
			requestQuit: function () {
				if (this.rtenv) {
					this.rtenv['request_quit']();
				}
			},
		};

		Engine.prototype = proto;
		// Closure compiler exported instance methods.
		Engine.prototype['init'] = Engine.prototype.init;
		Engine.prototype['preloadFile'] = Engine.prototype.preloadFile;
		Engine.prototype['start'] = Engine.prototype.start;
		Engine.prototype['startGame'] = Engine.prototype.startGame;
		Engine.prototype['copyToFS'] = Engine.prototype.copyToFS;
		Engine.prototype['requestQuit'] = Engine.prototype.requestQuit;
		// Also expose static methods as instance methods
		Engine.prototype['load'] = Engine.load;
		Engine.prototype['unload'] = Engine.unload;
		return new Engine(initConfig);
	}

	// Closure compiler exported static methods.
	SafeEngine['load'] = Engine.load;
	SafeEngine['unload'] = Engine.unload;

	// Feature-detection utilities.
	SafeEngine['isWebGLAvailable'] = Features.isWebGLAvailable;
	SafeEngine['isFetchAvailable'] = Features.isFetchAvailable;
	SafeEngine['isSecureContext'] = Features.isSecureContext;
	SafeEngine['isCrossOriginIsolated'] = Features.isCrossOriginIsolated;
	SafeEngine['isSharedArrayBufferAvailable'] = Features.isSharedArrayBufferAvailable;
	SafeEngine['isAudioWorkletAvailable'] = Features.isAudioWorkletAvailable;
	SafeEngine['getMissingFeatures'] = Features.getMissingFeatures;

	return SafeEngine;
}());
if (typeof window !== 'undefined') {
	window['Engine'] = Engine;
}
