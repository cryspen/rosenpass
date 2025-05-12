window.BENCHMARK_DATA = {
  "lastUpdate": 1747064193981,
  "repoUrl": "https://github.com/cryspen/rosenpass",
  "entries": {
    "rosenpass-ciphers primitives benchmarks": [
      {
        "commit": {
          "author": {
            "email": "jan@cryspen.com",
            "name": "Jan Winkelmann (keks)",
            "username": "keks"
          },
          "committer": {
            "email": "jan@cryspen.com",
            "name": "Jan Winkelmann (keks)",
            "username": "keks"
          },
          "distinct": true,
          "id": "5b0e37899c140d0b49240624afcd9cfd67d5f709",
          "message": "cargo bench doesn't like the mix of -p and -F",
          "timestamp": "2025-05-07T17:51:54+02:00",
          "tree_id": "32e796354426f036b31873d711a99be6396d00a7",
          "url": "https://github.com/cryspen/rosenpass/commit/5b0e37899c140d0b49240624afcd9cfd67d5f709"
        },
        "date": 1746633835347,
        "bigger_is_better": false,
        "benches": [
          {
            "value": 312,
            "range": "± 7",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "32byte"
          },
          {
            "value": 304,
            "range": "± 0",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "64byte"
          },
          {
            "value": 303,
            "range": "± 1",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "128byte"
          },
          {
            "value": 1187,
            "range": "± 5",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "1024byte"
          },
          {
            "value": 519,
            "range": "± 1",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "libcrux",
            "operation": "hash",
            "length": "32byte"
          },
          {
            "value": 516,
            "range": "± 14",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "libcrux",
            "operation": "hash",
            "length": "64byte"
          },
          {
            "value": 508,
            "range": "± 2",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "libcrux",
            "operation": "hash",
            "length": "128byte"
          },
          {
            "value": 1494,
            "range": "± 3",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "libcrux",
            "operation": "hash",
            "length": "1024byte"
          },
          {
            "value": 826,
            "range": "± 2",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "keyedhash",
            "algorithm": "shake256",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "32byte"
          },
          {
            "value": 825,
            "range": "± 3",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "keyedhash",
            "algorithm": "shake256",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "64byte"
          },
          {
            "value": 1217,
            "range": "± 7",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "keyedhash",
            "algorithm": "shake256",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "128byte"
          },
          {
            "value": 3575,
            "range": "± 10",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "keyedhash",
            "algorithm": "shake256",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "1024byte"
          },
          {
            "value": 305,
            "range": "± 2",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "libcrux",
            "operation": "encrypt",
            "length": "32byte"
          },
          {
            "value": 315,
            "range": "± 1",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "libcrux",
            "operation": "decrypt",
            "length": "32byte"
          },
          {
            "value": 2763,
            "range": "± 3",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "libcrux",
            "operation": "encrypt",
            "length": "1024byte"
          },
          {
            "value": 2765,
            "range": "± 66",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "libcrux",
            "operation": "decrypt",
            "length": "1024byte"
          },
          {
            "value": 1414,
            "range": "± 1",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "encrypt",
            "length": "32byte"
          },
          {
            "value": 1426,
            "range": "± 7",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "decrypt",
            "length": "32byte"
          },
          {
            "value": 2455,
            "range": "± 2",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "encrypt",
            "length": "1024byt..."
          },
          {
            "value": 2499,
            "range": "± 2",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "decrypt",
            "length": "1024byt..."
          },
          {
            "value": 1681,
            "range": "± 2",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "aead",
            "algorithm": "xchacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "encrypt",
            "length": "32byte"
          },
          {
            "value": 1699,
            "range": "± 2",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "aead",
            "algorithm": "xchacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "decrypt",
            "length": "32byte"
          },
          {
            "value": 2762,
            "range": "± 12",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "aead",
            "algorithm": "xchacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "encrypt",
            "length": "1024by..."
          },
          {
            "value": 2775,
            "range": "± 5",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "aead",
            "algorithm": "xchacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "decrypt",
            "length": "1024by..."
          },
          {
            "value": 15347,
            "range": "± 67",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "kem",
            "algorithm": "kyber512",
            "implementation": "libcrux",
            "length": "-1",
            "operation": "keygen"
          },
          {
            "value": 14746,
            "range": "± 150",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "kem",
            "algorithm": "kyber512",
            "implementation": "libcrux",
            "length": "-1",
            "operation": "encaps"
          },
          {
            "value": 18270,
            "range": "± 385",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "kem",
            "algorithm": "kyber512",
            "implementation": "libcrux",
            "length": "-1",
            "operation": "decaps"
          },
          {
            "value": 8724,
            "range": "± 24",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "kem",
            "algorithm": "kyber512",
            "implementation": "oqs",
            "length": "-1",
            "operation": "keygen"
          },
          {
            "value": 11868,
            "range": "± 158",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "kem",
            "algorithm": "kyber512",
            "implementation": "oqs",
            "length": "-1",
            "operation": "encaps"
          },
          {
            "value": 8957,
            "range": "± 162",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "kem",
            "algorithm": "kyber512",
            "implementation": "oqs",
            "length": "-1",
            "operation": "decaps"
          },
          {
            "value": 106443990,
            "range": "± 30895881",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "kem",
            "algorithm": "classicmceliece460896",
            "implementation": "oqs",
            "length": "-1",
            "operation": "keygen"
          },
          {
            "value": 33735,
            "range": "± 433",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "kem",
            "algorithm": "classicmceliece460896",
            "implementation": "oqs",
            "length": "-1",
            "operation": "encaps"
          },
          {
            "value": 95199,
            "range": "± 279",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "kem",
            "algorithm": "classicmceliece460896",
            "implementation": "oqs",
            "length": "-1",
            "operation": "decaps"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@cryspen.com",
            "name": "Jan Winkelmann (keks)",
            "username": "keks"
          },
          "committer": {
            "email": "jan@cryspen.com",
            "name": "Jan Winkelmann (keks)",
            "username": "keks"
          },
          "distinct": true,
          "id": "5b0e37899c140d0b49240624afcd9cfd67d5f709",
          "message": "cargo bench doesn't like the mix of -p and -F",
          "timestamp": "2025-05-07T17:51:54+02:00",
          "tree_id": "32e796354426f036b31873d711a99be6396d00a7",
          "url": "https://github.com/cryspen/rosenpass/commit/5b0e37899c140d0b49240624afcd9cfd67d5f709"
        },
        "date": 1746634247826,
        "bigger_is_better": false,
        "benches": [
          {
            "value": 627,
            "range": "± 0",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "32byte"
          },
          {
            "value": 630,
            "range": "± 9",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "64byte"
          },
          {
            "value": 625,
            "range": "± 0",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "128byte"
          },
          {
            "value": 2535,
            "range": "± 4",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "1024byte"
          },
          {
            "value": 1003,
            "range": "± 27",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "libcrux",
            "operation": "hash",
            "length": "32byte"
          },
          {
            "value": 1010,
            "range": "± 7",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "libcrux",
            "operation": "hash",
            "length": "64byte"
          },
          {
            "value": 1010,
            "range": "± 55",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "libcrux",
            "operation": "hash",
            "length": "128byte"
          },
          {
            "value": 3047,
            "range": "± 13",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "libcrux",
            "operation": "hash",
            "length": "1024byte"
          },
          {
            "value": 1511,
            "range": "± 9",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "keyedhash",
            "algorithm": "shake256",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "32byte"
          },
          {
            "value": 1520,
            "range": "± 6",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "keyedhash",
            "algorithm": "shake256",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "64byte"
          },
          {
            "value": 2248,
            "range": "± 7",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "keyedhash",
            "algorithm": "shake256",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "128byte"
          },
          {
            "value": 6616,
            "range": "± 18",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "keyedhash",
            "algorithm": "shake256",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "1024byte"
          },
          {
            "value": 456,
            "range": "± 0",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "libcrux",
            "operation": "encrypt",
            "length": "32byte"
          },
          {
            "value": 475,
            "range": "± 0",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "libcrux",
            "operation": "decrypt",
            "length": "32byte"
          },
          {
            "value": 4434,
            "range": "± 13",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "libcrux",
            "operation": "encrypt",
            "length": "1024byte"
          },
          {
            "value": 4450,
            "range": "± 10",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "libcrux",
            "operation": "decrypt",
            "length": "1024byte"
          },
          {
            "value": 1530,
            "range": "± 3",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "encrypt",
            "length": "32byte"
          },
          {
            "value": 1552,
            "range": "± 6",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "decrypt",
            "length": "32byte"
          },
          {
            "value": 2992,
            "range": "± 15",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "encrypt",
            "length": "1024byt..."
          },
          {
            "value": 2956,
            "range": "± 124",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "decrypt",
            "length": "1024byt..."
          },
          {
            "value": 1922,
            "range": "± 15",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "aead",
            "algorithm": "xchacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "encrypt",
            "length": "32byte"
          },
          {
            "value": 1943,
            "range": "± 3",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "aead",
            "algorithm": "xchacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "decrypt",
            "length": "32byte"
          },
          {
            "value": 3395,
            "range": "± 5",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "aead",
            "algorithm": "xchacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "encrypt",
            "length": "1024by..."
          },
          {
            "value": 3336,
            "range": "± 6",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "aead",
            "algorithm": "xchacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "decrypt",
            "length": "1024by..."
          },
          {
            "value": 41277,
            "range": "± 184",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "kem",
            "algorithm": "kyber512",
            "implementation": "libcrux",
            "length": "-1",
            "operation": "keygen"
          },
          {
            "value": 48469,
            "range": "± 498",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "kem",
            "algorithm": "kyber512",
            "implementation": "libcrux",
            "length": "-1",
            "operation": "encaps"
          },
          {
            "value": 65593,
            "range": "± 467",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "kem",
            "algorithm": "kyber512",
            "implementation": "libcrux",
            "length": "-1",
            "operation": "decaps"
          },
          {
            "value": 72161,
            "range": "± 1001",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "kem",
            "algorithm": "kyber512",
            "implementation": "oqs",
            "length": "-1",
            "operation": "keygen"
          },
          {
            "value": 92793,
            "range": "± 928",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "kem",
            "algorithm": "kyber512",
            "implementation": "oqs",
            "length": "-1",
            "operation": "encaps"
          },
          {
            "value": 94860,
            "range": "± 15888",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "kem",
            "algorithm": "kyber512",
            "implementation": "oqs",
            "length": "-1",
            "operation": "decaps"
          },
          {
            "value": 595768777,
            "range": "± 467149866",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "kem",
            "algorithm": "classicmceliece460896",
            "implementation": "oqs",
            "length": "-1",
            "operation": "keygen"
          },
          {
            "value": 383887,
            "range": "± 50126",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "kem",
            "algorithm": "classicmceliece460896",
            "implementation": "oqs",
            "length": "-1",
            "operation": "encaps"
          },
          {
            "value": 87891840,
            "range": "± 1363664",
            "unit": "ns/iter",
            "os": "i686-linux",
            "primitive": "kem",
            "algorithm": "classicmceliece460896",
            "implementation": "oqs",
            "length": "-1",
            "operation": "decaps"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@cryspen.com",
            "name": "Jan Winkelmann (keks)",
            "username": "keks"
          },
          "committer": {
            "email": "jan@cryspen.com",
            "name": "Jan Winkelmann (keks)",
            "username": "keks"
          },
          "distinct": true,
          "id": "fa9589859c657651cb9f7bc8cba7c4ce2dfe1805",
          "message": "update names in protocol benchmarks workflow",
          "timestamp": "2025-05-12T17:23:55+02:00",
          "tree_id": "a0a8eedb29133f6a5d29e30e707e95862d4a1196",
          "url": "https://github.com/cryspen/rosenpass/commit/fa9589859c657651cb9f7bc8cba7c4ce2dfe1805"
        },
        "date": 1747064193445,
        "bigger_is_better": false,
        "benches": [
          {
            "value": 317,
            "range": "± 2",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "32byte"
          },
          {
            "value": 305,
            "range": "± 2",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "64byte"
          },
          {
            "value": 302,
            "range": "± 1",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "128byte"
          },
          {
            "value": 1186,
            "range": "± 11",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "1024byte"
          },
          {
            "value": 518,
            "range": "± 4",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "libcrux",
            "operation": "hash",
            "length": "32byte"
          },
          {
            "value": 544,
            "range": "± 1",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "libcrux",
            "operation": "hash",
            "length": "64byte"
          },
          {
            "value": 508,
            "range": "± 2",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "libcrux",
            "operation": "hash",
            "length": "128byte"
          },
          {
            "value": 1494,
            "range": "± 3",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "libcrux",
            "operation": "hash",
            "length": "1024byte"
          },
          {
            "value": 836,
            "range": "± 3",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "keyedhash",
            "algorithm": "shake256",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "32byte"
          },
          {
            "value": 826,
            "range": "± 3",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "keyedhash",
            "algorithm": "shake256",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "64byte"
          },
          {
            "value": 1218,
            "range": "± 4",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "keyedhash",
            "algorithm": "shake256",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "128byte"
          },
          {
            "value": 3582,
            "range": "± 22",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "keyedhash",
            "algorithm": "shake256",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "1024byte"
          },
          {
            "value": 305,
            "range": "± 3",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "libcrux",
            "operation": "encrypt",
            "length": "32byte"
          },
          {
            "value": 315,
            "range": "± 1",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "libcrux",
            "operation": "decrypt",
            "length": "32byte"
          },
          {
            "value": 2763,
            "range": "± 9",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "libcrux",
            "operation": "encrypt",
            "length": "1024byte"
          },
          {
            "value": 2765,
            "range": "± 10",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "libcrux",
            "operation": "decrypt",
            "length": "1024byte"
          },
          {
            "value": 1413,
            "range": "± 27",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "encrypt",
            "length": "32byte"
          },
          {
            "value": 1426,
            "range": "± 2",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "decrypt",
            "length": "32byte"
          },
          {
            "value": 2455,
            "range": "± 2",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "encrypt",
            "length": "1024byt..."
          },
          {
            "value": 2508,
            "range": "± 4",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "decrypt",
            "length": "1024byt..."
          },
          {
            "value": 1682,
            "range": "± 3",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "aead",
            "algorithm": "xchacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "encrypt",
            "length": "32byte"
          },
          {
            "value": 1702,
            "range": "± 3",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "aead",
            "algorithm": "xchacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "decrypt",
            "length": "32byte"
          },
          {
            "value": 2746,
            "range": "± 6",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "aead",
            "algorithm": "xchacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "encrypt",
            "length": "1024by..."
          },
          {
            "value": 2782,
            "range": "± 4",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "aead",
            "algorithm": "xchacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "decrypt",
            "length": "1024by..."
          },
          {
            "value": 15310,
            "range": "± 45",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "kem",
            "algorithm": "kyber512",
            "implementation": "libcrux",
            "length": "-1",
            "operation": "keygen"
          },
          {
            "value": 14825,
            "range": "± 265",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "kem",
            "algorithm": "kyber512",
            "implementation": "libcrux",
            "length": "-1",
            "operation": "encaps"
          },
          {
            "value": 18344,
            "range": "± 103",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "kem",
            "algorithm": "kyber512",
            "implementation": "libcrux",
            "length": "-1",
            "operation": "decaps"
          },
          {
            "value": 8717,
            "range": "± 31",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "kem",
            "algorithm": "kyber512",
            "implementation": "oqs",
            "length": "-1",
            "operation": "keygen"
          },
          {
            "value": 11873,
            "range": "± 159",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "kem",
            "algorithm": "kyber512",
            "implementation": "oqs",
            "length": "-1",
            "operation": "encaps"
          },
          {
            "value": 8956,
            "range": "± 110",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "kem",
            "algorithm": "kyber512",
            "implementation": "oqs",
            "length": "-1",
            "operation": "decaps"
          },
          {
            "value": 108739705,
            "range": "± 29833440",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "kem",
            "algorithm": "classicmceliece460896",
            "implementation": "oqs",
            "length": "-1",
            "operation": "keygen"
          },
          {
            "value": 33863,
            "range": "± 516",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "kem",
            "algorithm": "classicmceliece460896",
            "implementation": "oqs",
            "length": "-1",
            "operation": "encaps"
          },
          {
            "value": 95048,
            "range": "± 157",
            "unit": "ns/iter",
            "os": "x86_64-linux",
            "primitive": "kem",
            "algorithm": "classicmceliece460896",
            "implementation": "oqs",
            "length": "-1",
            "operation": "decaps"
          }
        ]
      }
    ]
  },
  "groupBy": [
    "os",
    "primitive",
    "algorithm"
  ],
  "schema": [
    "os",
    "primitive",
    "algorithm",
    "implementation",
    "operation",
    "length"
  ]
}