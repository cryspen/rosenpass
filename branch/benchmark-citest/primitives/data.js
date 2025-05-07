window.BENCHMARK_DATA = {
  "lastUpdate": 1746633836082,
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