window.BENCHMARK_DATA = {
  "lastUpdate": 1746437609929,
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
          "id": "4c6b1fc8dd5a19d2b65ce7736d2b21f65452f080",
          "message": "actions: use extrace-transform v2 for primitive benchmarks",
          "timestamp": "2025-05-05T11:22:51+02:00",
          "tree_id": "d8716b714394a75e5ef10199d473a0b0da8b0166",
          "url": "https://github.com/cryspen/rosenpass/commit/4c6b1fc8dd5a19d2b65ce7736d2b21f65452f080"
        },
        "date": 1746437608854,
        "bigger_is_better": false,
        "benches": [
          {
            "value": 316,
            "range": "± 5",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "32byte"
          },
          {
            "value": 316,
            "range": "± 5",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "64byte"
          },
          {
            "value": 307,
            "range": "± 1",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "128byte"
          },
          {
            "value": 1191,
            "range": "± 33",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "1024byte"
          },
          {
            "value": 536,
            "range": "± 1",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "libcrux",
            "operation": "hash",
            "length": "32byte"
          },
          {
            "value": 548,
            "range": "± 2",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "libcrux",
            "operation": "hash",
            "length": "64byte"
          },
          {
            "value": 528,
            "range": "± 0",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "libcrux",
            "operation": "hash",
            "length": "128byte"
          },
          {
            "value": 1506,
            "range": "± 5",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "keyedhash",
            "algorithm": "blake2b",
            "implementation": "libcrux",
            "operation": "hash",
            "length": "1024byte"
          },
          {
            "value": 827,
            "range": "± 2",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "keyedhash",
            "algorithm": "shake256",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "32byte"
          },
          {
            "value": 828,
            "range": "± 13",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "keyedhash",
            "algorithm": "shake256",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "64byte"
          },
          {
            "value": 1222,
            "range": "± 3",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "keyedhash",
            "algorithm": "shake256",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "128byte"
          },
          {
            "value": 3576,
            "range": "± 63",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "keyedhash",
            "algorithm": "shake256",
            "implementation": "rustcrypto",
            "operation": "hash",
            "length": "1024byte"
          },
          {
            "value": 308,
            "range": "± 1",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "libcrux",
            "operation": "encrypt",
            "length": "32byte"
          },
          {
            "value": 314,
            "range": "± 6",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "libcrux",
            "operation": "decrypt",
            "length": "32byte"
          },
          {
            "value": 2761,
            "range": "± 7",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "libcrux",
            "operation": "encrypt",
            "length": "1024byte"
          },
          {
            "value": 2767,
            "range": "± 11",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "libcrux",
            "operation": "decrypt",
            "length": "1024byte"
          },
          {
            "value": 1434,
            "range": "± 1",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "encrypt",
            "length": "32byte"
          },
          {
            "value": 1456,
            "range": "± 1",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "decrypt",
            "length": "32byte"
          },
          {
            "value": 2479,
            "range": "± 3",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "encrypt",
            "length": "1024byt..."
          },
          {
            "value": 2508,
            "range": "± 9",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "aead",
            "algorithm": "chacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "decrypt",
            "length": "1024byt..."
          },
          {
            "value": 1681,
            "range": "± 6",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "aead",
            "algorithm": "xchacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "encrypt",
            "length": "32byte"
          },
          {
            "value": 1697,
            "range": "± 4",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "aead",
            "algorithm": "xchacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "decrypt",
            "length": "32byte"
          },
          {
            "value": 2744,
            "range": "± 3",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "aead",
            "algorithm": "xchacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "encrypt",
            "length": "1024by..."
          },
          {
            "value": 2764,
            "range": "± 3",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "aead",
            "algorithm": "xchacha20poly1305",
            "implementation": "rustcrypto",
            "operation": "decrypt",
            "length": "1024by..."
          },
          {
            "value": 15363,
            "range": "± 50",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "kem",
            "algorithm": "kyber512",
            "implementation": "libcrux",
            "length": "-1",
            "operation": "keygen"
          },
          {
            "value": 14863,
            "range": "± 139",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "kem",
            "algorithm": "kyber512",
            "implementation": "libcrux",
            "length": "-1",
            "operation": "encaps"
          },
          {
            "value": 18289,
            "range": "± 100",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "kem",
            "algorithm": "kyber512",
            "implementation": "libcrux",
            "length": "-1",
            "operation": "decaps"
          },
          {
            "value": 8871,
            "range": "± 28",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "kem",
            "algorithm": "kyber512",
            "implementation": "oqs",
            "length": "-1",
            "operation": "keygen"
          },
          {
            "value": 12001,
            "range": "± 166",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "kem",
            "algorithm": "kyber512",
            "implementation": "oqs",
            "length": "-1",
            "operation": "encaps"
          },
          {
            "value": 9060,
            "range": "± 129",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "kem",
            "algorithm": "kyber512",
            "implementation": "oqs",
            "length": "-1",
            "operation": "decaps"
          },
          {
            "value": 105783822,
            "range": "± 29672115",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "kem",
            "algorithm": "classicmceliece460896",
            "implementation": "oqs",
            "length": "-1",
            "operation": "keygen"
          },
          {
            "value": 33818,
            "range": "± 424",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "primitive": "kem",
            "algorithm": "classicmceliece460896",
            "implementation": "oqs",
            "length": "-1",
            "operation": "encaps"
          },
          {
            "value": 91856,
            "range": "± 931",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
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