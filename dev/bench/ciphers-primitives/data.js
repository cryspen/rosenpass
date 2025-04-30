window.BENCHMARK_DATA = {
  "lastUpdate": 1746017548002,
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
          "id": "669415389f126e02d0969a2b6ee0fe0ad93a0ad2",
          "message": "enable workflow run on push (DROP BEFORE UPSTREAM!)",
          "timestamp": "2025-04-29T15:15:28+02:00",
          "tree_id": "4edcf6a5acbbf2a75b4e9e3b51cf3e5fa8bea560",
          "url": "https://github.com/cryspen/rosenpass/commit/669415389f126e02d0969a2b6ee0fe0ad93a0ad2"
        },
        "date": 1745933182600,
        "bigger_is_better": false,
        "benches": [
          {
            "name": "hash_32byte",
            "value": 309,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 0",
            "category": "rustcrypto keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_64byte",
            "value": 309,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 7",
            "category": "rustcrypto keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_128byte",
            "value": 306,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 5",
            "category": "rustcrypto keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_1024byte",
            "value": 1190,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 15",
            "category": "rustcrypto keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_32byte",
            "value": 546,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 1",
            "category": "libcrux keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_64byte",
            "value": 552,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 25",
            "category": "libcrux keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_128byte",
            "value": 552,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 2",
            "category": "libcrux keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_1024byte",
            "value": 1511,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 17",
            "category": "libcrux keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_32byte",
            "value": 828,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 4",
            "category": "rustcrypto keyedhash",
            "api": "shake256"
          },
          {
            "name": "hash_64byte",
            "value": 826,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 2",
            "category": "rustcrypto keyedhash",
            "api": "shake256"
          },
          {
            "name": "hash_128byte",
            "value": 1219,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 6",
            "category": "rustcrypto keyedhash",
            "api": "shake256"
          },
          {
            "name": "hash_1024byte",
            "value": 3579,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 19",
            "category": "rustcrypto keyedhash",
            "api": "shake256"
          },
          {
            "name": "encrypt_32byte",
            "value": 307,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 1",
            "category": "libcrux aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "decrypt_32byte",
            "value": 314,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 2",
            "category": "libcrux aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "encrypt_1024byte",
            "value": 2757,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 11",
            "category": "libcrux aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "decrypt_1024byte",
            "value": 2762,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 9",
            "category": "libcrux aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "encrypt_32byte",
            "value": 1436,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 3",
            "category": "rustcrypto aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "decrypt_32byte",
            "value": 1457,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 2",
            "category": "rustcrypto aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "encrypt_1024byte",
            "value": 2477,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 4",
            "category": "rustcrypto aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "decrypt_1024byte",
            "value": 2512,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 16",
            "category": "rustcrypto aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "encrypt_32byte",
            "value": 1681,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 3",
            "category": "rustcrypto aead",
            "api": "xchacha20poly1305"
          },
          {
            "name": "decrypt_32byte",
            "value": 1695,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 7",
            "category": "rustcrypto aead",
            "api": "xchacha20poly1305"
          },
          {
            "name": "encrypt_1024byte",
            "value": 2746,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 2",
            "category": "rustcrypto aead",
            "api": "xchacha20poly1305"
          },
          {
            "name": "decrypt_1024byte",
            "value": 2782,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 15",
            "category": "rustcrypto aead",
            "api": "xchacha20poly1305"
          },
          {
            "name": "keygen",
            "value": 15339,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 63",
            "category": "libcrux kem",
            "api": "kyber512"
          },
          {
            "name": "encaps",
            "value": 15016,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 51",
            "category": "libcrux kem",
            "api": "kyber512"
          },
          {
            "name": "decaps",
            "value": 19146,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 73",
            "category": "libcrux kem",
            "api": "kyber512"
          },
          {
            "name": "keygen",
            "value": 8892,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 21",
            "category": "oqs kem",
            "api": "kyber512"
          },
          {
            "name": "encaps",
            "value": 12051,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 110",
            "category": "oqs kem",
            "api": "kyber512"
          },
          {
            "name": "decaps",
            "value": 9095,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 196",
            "category": "oqs kem",
            "api": "kyber512"
          },
          {
            "name": "keygen",
            "value": 116622256,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 33996247",
            "category": "oqs kem",
            "api": "classicmceliece460896"
          },
          {
            "name": "encaps",
            "value": 34092,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 435",
            "category": "oqs kem",
            "api": "classicmceliece460896"
          },
          {
            "name": "decaps",
            "value": 92191,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 194",
            "category": "oqs kem",
            "api": "classicmceliece460896"
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
          "id": "669415389f126e02d0969a2b6ee0fe0ad93a0ad2",
          "message": "enable workflow run on push (DROP BEFORE UPSTREAM!)",
          "timestamp": "2025-04-29T15:15:28+02:00",
          "tree_id": "4edcf6a5acbbf2a75b4e9e3b51cf3e5fa8bea560",
          "url": "https://github.com/cryspen/rosenpass/commit/669415389f126e02d0969a2b6ee0fe0ad93a0ad2"
        },
        "date": 1745933513003,
        "bigger_is_better": false,
        "benches": [
          {
            "name": "hash_32byte",
            "value": 625,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 23",
            "category": "rustcrypto keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_64byte",
            "value": 593,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 16",
            "category": "rustcrypto keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_128byte",
            "value": 605,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 16",
            "category": "rustcrypto keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_1024byte",
            "value": 2407,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 84",
            "category": "rustcrypto keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_32byte",
            "value": 970,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 27",
            "category": "libcrux keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_64byte",
            "value": 955,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 23",
            "category": "libcrux keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_128byte",
            "value": 974,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 26",
            "category": "libcrux keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_1024byte",
            "value": 2865,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 97",
            "category": "libcrux keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_32byte",
            "value": 1441,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 37",
            "category": "rustcrypto keyedhash",
            "api": "shake256"
          },
          {
            "name": "hash_64byte",
            "value": 1434,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 34",
            "category": "rustcrypto keyedhash",
            "api": "shake256"
          },
          {
            "name": "hash_128byte",
            "value": 2208,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 51",
            "category": "rustcrypto keyedhash",
            "api": "shake256"
          },
          {
            "name": "hash_1024byte",
            "value": 6557,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 391",
            "category": "rustcrypto keyedhash",
            "api": "shake256"
          },
          {
            "name": "encrypt_32byte",
            "value": 450,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 8",
            "category": "libcrux aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "decrypt_32byte",
            "value": 459,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 10",
            "category": "libcrux aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "encrypt_1024byte",
            "value": 4398,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 65",
            "category": "libcrux aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "decrypt_1024byte",
            "value": 4445,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 168",
            "category": "libcrux aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "encrypt_32byte",
            "value": 1542,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 17",
            "category": "rustcrypto aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "decrypt_32byte",
            "value": 1554,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 3",
            "category": "rustcrypto aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "encrypt_1024byte",
            "value": 2982,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 62",
            "category": "rustcrypto aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "decrypt_1024byte",
            "value": 2930,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 61",
            "category": "rustcrypto aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "encrypt_32byte",
            "value": 1842,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 49",
            "category": "rustcrypto aead",
            "api": "xchacha20poly1305"
          },
          {
            "name": "decrypt_32byte",
            "value": 1935,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 36",
            "category": "rustcrypto aead",
            "api": "xchacha20poly1305"
          },
          {
            "name": "encrypt_1024byte",
            "value": 3289,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 80",
            "category": "rustcrypto aead",
            "api": "xchacha20poly1305"
          },
          {
            "name": "decrypt_1024byte",
            "value": 3344,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 56",
            "category": "rustcrypto aead",
            "api": "xchacha20poly1305"
          },
          {
            "name": "keygen",
            "value": 41278,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 98",
            "category": "libcrux kem",
            "api": "kyber512"
          },
          {
            "name": "encaps",
            "value": 48750,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 704",
            "category": "libcrux kem",
            "api": "kyber512"
          },
          {
            "name": "decaps",
            "value": 62930,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 1241",
            "category": "libcrux kem",
            "api": "kyber512"
          },
          {
            "name": "keygen",
            "value": 70575,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 1704",
            "category": "oqs kem",
            "api": "kyber512"
          },
          {
            "name": "encaps",
            "value": 92399,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 2257",
            "category": "oqs kem",
            "api": "kyber512"
          },
          {
            "name": "decaps",
            "value": 94186,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 2004",
            "category": "oqs kem",
            "api": "kyber512"
          },
          {
            "name": "keygen",
            "value": 598085341,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 593397260",
            "category": "oqs kem",
            "api": "classicmceliece460896"
          },
          {
            "name": "encaps",
            "value": 405531,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 10076",
            "category": "oqs kem",
            "api": "classicmceliece460896"
          },
          {
            "name": "decaps",
            "value": 87651646,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 1602078",
            "category": "oqs kem",
            "api": "classicmceliece460896"
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
          "id": "669415389f126e02d0969a2b6ee0fe0ad93a0ad2",
          "message": "enable workflow run on push (DROP BEFORE UPSTREAM!)",
          "timestamp": "2025-04-29T15:15:28+02:00",
          "tree_id": "4edcf6a5acbbf2a75b4e9e3b51cf3e5fa8bea560",
          "url": "https://github.com/cryspen/rosenpass/commit/669415389f126e02d0969a2b6ee0fe0ad93a0ad2"
        },
        "date": 1745934709785,
        "bigger_is_better": false,
        "benches": [
          {
            "name": "hash_32byte",
            "value": 311,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 1",
            "category": "rustcrypto keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_64byte",
            "value": 307,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 2",
            "category": "rustcrypto keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_128byte",
            "value": 305,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 8",
            "category": "rustcrypto keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_1024byte",
            "value": 1195,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 47",
            "category": "rustcrypto keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_32byte",
            "value": 550,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 30",
            "category": "libcrux keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_64byte",
            "value": 550,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 3",
            "category": "libcrux keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_128byte",
            "value": 548,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 2",
            "category": "libcrux keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_1024byte",
            "value": 1507,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 22",
            "category": "libcrux keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_32byte",
            "value": 826,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 6",
            "category": "rustcrypto keyedhash",
            "api": "shake256"
          },
          {
            "name": "hash_64byte",
            "value": 829,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 5",
            "category": "rustcrypto keyedhash",
            "api": "shake256"
          },
          {
            "name": "hash_128byte",
            "value": 1245,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 8",
            "category": "rustcrypto keyedhash",
            "api": "shake256"
          },
          {
            "name": "hash_1024byte",
            "value": 3576,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 74",
            "category": "rustcrypto keyedhash",
            "api": "shake256"
          },
          {
            "name": "encrypt_32byte",
            "value": 307,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 4",
            "category": "libcrux aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "decrypt_32byte",
            "value": 315,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 2",
            "category": "libcrux aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "encrypt_1024byte",
            "value": 2757,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 50",
            "category": "libcrux aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "decrypt_1024byte",
            "value": 2763,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 8",
            "category": "libcrux aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "encrypt_32byte",
            "value": 1438,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 2",
            "category": "rustcrypto aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "decrypt_32byte",
            "value": 1455,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 2",
            "category": "rustcrypto aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "encrypt_1024byte",
            "value": 2495,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 3",
            "category": "rustcrypto aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "decrypt_1024byte",
            "value": 2513,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 2",
            "category": "rustcrypto aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "encrypt_32byte",
            "value": 1685,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 5",
            "category": "rustcrypto aead",
            "api": "xchacha20poly1305"
          },
          {
            "name": "decrypt_32byte",
            "value": 1703,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 3",
            "category": "rustcrypto aead",
            "api": "xchacha20poly1305"
          },
          {
            "name": "encrypt_1024byte",
            "value": 2769,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 5",
            "category": "rustcrypto aead",
            "api": "xchacha20poly1305"
          },
          {
            "name": "decrypt_1024byte",
            "value": 2766,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 13",
            "category": "rustcrypto aead",
            "api": "xchacha20poly1305"
          },
          {
            "name": "keygen",
            "value": 15369,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 50",
            "category": "libcrux kem",
            "api": "kyber512"
          },
          {
            "name": "encaps",
            "value": 14884,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 79",
            "category": "libcrux kem",
            "api": "kyber512"
          },
          {
            "name": "decaps",
            "value": 18741,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 89",
            "category": "libcrux kem",
            "api": "kyber512"
          },
          {
            "name": "keygen",
            "value": 8874,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 27",
            "category": "oqs kem",
            "api": "kyber512"
          },
          {
            "name": "encaps",
            "value": 12014,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 150",
            "category": "oqs kem",
            "api": "kyber512"
          },
          {
            "name": "decaps",
            "value": 9065,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 104",
            "category": "oqs kem",
            "api": "kyber512"
          },
          {
            "name": "keygen",
            "value": 106358568,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 31913865",
            "category": "oqs kem",
            "api": "classicmceliece460896"
          },
          {
            "name": "encaps",
            "value": 33955,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 548",
            "category": "oqs kem",
            "api": "classicmceliece460896"
          },
          {
            "name": "decaps",
            "value": 91883,
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "range": "± 320",
            "category": "oqs kem",
            "api": "classicmceliece460896"
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
          "id": "669415389f126e02d0969a2b6ee0fe0ad93a0ad2",
          "message": "enable workflow run on push (DROP BEFORE UPSTREAM!)",
          "timestamp": "2025-04-29T15:15:28+02:00",
          "tree_id": "4edcf6a5acbbf2a75b4e9e3b51cf3e5fa8bea560",
          "url": "https://github.com/cryspen/rosenpass/commit/669415389f126e02d0969a2b6ee0fe0ad93a0ad2"
        },
        "date": 1745935058451,
        "bigger_is_better": false,
        "benches": [
          {
            "name": "hash_32byte",
            "value": 626,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 3",
            "category": "rustcrypto keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_64byte",
            "value": 630,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 7",
            "category": "rustcrypto keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_128byte",
            "value": 625,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 6",
            "category": "rustcrypto keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_1024byte",
            "value": 2535,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 5",
            "category": "rustcrypto keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_32byte",
            "value": 993,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 6",
            "category": "libcrux keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_64byte",
            "value": 1011,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 6",
            "category": "libcrux keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_128byte",
            "value": 1007,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 4",
            "category": "libcrux keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_1024byte",
            "value": 3023,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 5",
            "category": "libcrux keyedhash",
            "api": "blake2b"
          },
          {
            "name": "hash_32byte",
            "value": 1525,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 33",
            "category": "rustcrypto keyedhash",
            "api": "shake256"
          },
          {
            "name": "hash_64byte",
            "value": 1529,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 4",
            "category": "rustcrypto keyedhash",
            "api": "shake256"
          },
          {
            "name": "hash_128byte",
            "value": 2260,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 12",
            "category": "rustcrypto keyedhash",
            "api": "shake256"
          },
          {
            "name": "hash_1024byte",
            "value": 6635,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 55",
            "category": "rustcrypto keyedhash",
            "api": "shake256"
          },
          {
            "name": "encrypt_32byte",
            "value": 450,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 12",
            "category": "libcrux aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "decrypt_32byte",
            "value": 469,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 0",
            "category": "libcrux aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "encrypt_1024byte",
            "value": 4431,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 62",
            "category": "libcrux aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "decrypt_1024byte",
            "value": 4416,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 121",
            "category": "libcrux aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "encrypt_32byte",
            "value": 1530,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 2",
            "category": "rustcrypto aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "decrypt_32byte",
            "value": 1550,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 2",
            "category": "rustcrypto aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "encrypt_1024byte",
            "value": 3011,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 2",
            "category": "rustcrypto aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "decrypt_1024byte",
            "value": 2971,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 45",
            "category": "rustcrypto aead",
            "api": "chacha20poly1305"
          },
          {
            "name": "encrypt_32byte",
            "value": 1919,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 4",
            "category": "rustcrypto aead",
            "api": "xchacha20poly1305"
          },
          {
            "name": "decrypt_32byte",
            "value": 1934,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 4",
            "category": "rustcrypto aead",
            "api": "xchacha20poly1305"
          },
          {
            "name": "encrypt_1024byte",
            "value": 3378,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 7",
            "category": "rustcrypto aead",
            "api": "xchacha20poly1305"
          },
          {
            "name": "decrypt_1024byte",
            "value": 3366,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 8",
            "category": "rustcrypto aead",
            "api": "xchacha20poly1305"
          },
          {
            "name": "keygen",
            "value": 41252,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 252",
            "category": "libcrux kem",
            "api": "kyber512"
          },
          {
            "name": "encaps",
            "value": 48508,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 329",
            "category": "libcrux kem",
            "api": "kyber512"
          },
          {
            "name": "decaps",
            "value": 63060,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 423",
            "category": "libcrux kem",
            "api": "kyber512"
          },
          {
            "name": "keygen",
            "value": 72212,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 687",
            "category": "oqs kem",
            "api": "kyber512"
          },
          {
            "name": "encaps",
            "value": 92439,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 1394",
            "category": "oqs kem",
            "api": "kyber512"
          },
          {
            "name": "decaps",
            "value": 94081,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 706",
            "category": "oqs kem",
            "api": "kyber512"
          },
          {
            "name": "keygen",
            "value": 827384712,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 766429859",
            "category": "oqs kem",
            "api": "classicmceliece460896"
          },
          {
            "name": "encaps",
            "value": 412583,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 7890",
            "category": "oqs kem",
            "api": "classicmceliece460896"
          },
          {
            "name": "decaps",
            "value": 87969884,
            "unit": "ns/iter",
            "os": "ubuntu-latest_32",
            "range": "± 1880263",
            "category": "oqs kem",
            "api": "classicmceliece460896"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "clara@cryspen.com",
            "name": "wysiwys",
            "username": "wysiwys"
          },
          "committer": {
            "email": "clara@cryspen.com",
            "name": "wysiwys",
            "username": "wysiwys"
          },
          "distinct": true,
          "id": "a35faae3e44f211f3a58b7205ec31a68d9988460",
          "message": "update workflow with new action syntax",
          "timestamp": "2025-04-30T14:41:58+02:00",
          "tree_id": "a9155703fb048170975420eb3a64179803904170",
          "url": "https://github.com/cryspen/rosenpass/commit/a35faae3e44f211f3a58b7205ec31a68d9988460"
        },
        "date": 1746017547378,
        "bigger_is_better": false,
        "benches": [
          {
            "value": 309,
            "range": "± 0",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "rustcrypto keyedhash",
            "name": "hash_32byte",
            "api": "blake2b"
          },
          {
            "value": 308,
            "range": "± 3",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "rustcrypto keyedhash",
            "name": "hash_64byte",
            "api": "blake2b"
          },
          {
            "value": 305,
            "range": "± 8",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "rustcrypto keyedhash",
            "name": "hash_128byte",
            "api": "blake2b"
          },
          {
            "value": 1191,
            "range": "± 7",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "rustcrypto keyedhash",
            "name": "hash_1024byte",
            "api": "blake2b"
          },
          {
            "value": 554,
            "range": "± 46",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "libcrux keyedhash",
            "name": "hash_32byte",
            "api": "blake2b"
          },
          {
            "value": 533,
            "range": "± 4",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "libcrux keyedhash",
            "name": "hash_64byte",
            "api": "blake2b"
          },
          {
            "value": 508,
            "range": "± 3",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "libcrux keyedhash",
            "name": "hash_128byte",
            "api": "blake2b"
          },
          {
            "value": 1510,
            "range": "± 5",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "libcrux keyedhash",
            "name": "hash_1024byte",
            "api": "blake2b"
          },
          {
            "value": 822,
            "range": "± 3",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "rustcrypto keyedhash",
            "name": "hash_32byte",
            "api": "shake256"
          },
          {
            "value": 822,
            "range": "± 4",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "rustcrypto keyedhash",
            "name": "hash_64byte",
            "api": "shake256"
          },
          {
            "value": 1231,
            "range": "± 14",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "rustcrypto keyedhash",
            "name": "hash_128byte",
            "api": "shake256"
          },
          {
            "value": 3567,
            "range": "± 22",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "rustcrypto keyedhash",
            "name": "hash_1024byte",
            "api": "shake256"
          },
          {
            "value": 308,
            "range": "± 6",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "libcrux aead",
            "name": "encrypt_32byte",
            "api": "chacha20poly1305"
          },
          {
            "value": 314,
            "range": "± 2",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "libcrux aead",
            "name": "decrypt_32byte",
            "api": "chacha20poly1305"
          },
          {
            "value": 2762,
            "range": "± 4",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "libcrux aead",
            "name": "encrypt_1024byte",
            "api": "chacha20poly1305"
          },
          {
            "value": 2764,
            "range": "± 56",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "libcrux aead",
            "name": "decrypt_1024byte",
            "api": "chacha20poly1305"
          },
          {
            "value": 1438,
            "range": "± 3",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "rustcrypto aead",
            "name": "encrypt_32byte",
            "api": "chacha20poly1305"
          },
          {
            "value": 1455,
            "range": "± 2",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "rustcrypto aead",
            "name": "decrypt_32byte",
            "api": "chacha20poly1305"
          },
          {
            "value": 2488,
            "range": "± 3",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "rustcrypto aead",
            "name": "encrypt_1024byte",
            "api": "chacha20poly1305"
          },
          {
            "value": 2510,
            "range": "± 3",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "rustcrypto aead",
            "name": "decrypt_1024byte",
            "api": "chacha20poly1305"
          },
          {
            "value": 1695,
            "range": "± 2",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "rustcrypto aead",
            "name": "encrypt_32byte",
            "api": "xchacha20poly1305"
          },
          {
            "value": 1694,
            "range": "± 16",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "rustcrypto aead",
            "name": "decrypt_32byte",
            "api": "xchacha20poly1305"
          },
          {
            "value": 2755,
            "range": "± 5",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "rustcrypto aead",
            "name": "encrypt_1024byte",
            "api": "xchacha20poly1305"
          },
          {
            "value": 2766,
            "range": "± 2",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "rustcrypto aead",
            "name": "decrypt_1024byte",
            "api": "xchacha20poly1305"
          },
          {
            "value": 15317,
            "range": "± 68",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "libcrux kem",
            "name": "keygen",
            "api": "kyber512"
          },
          {
            "value": 14908,
            "range": "± 79",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "libcrux kem",
            "name": "encaps",
            "api": "kyber512"
          },
          {
            "value": 18886,
            "range": "± 103",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "libcrux kem",
            "name": "decaps",
            "api": "kyber512"
          },
          {
            "value": 8868,
            "range": "± 61",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "oqs kem",
            "name": "keygen",
            "api": "kyber512"
          },
          {
            "value": 12031,
            "range": "± 163",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "oqs kem",
            "name": "encaps",
            "api": "kyber512"
          },
          {
            "value": 9094,
            "range": "± 422",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "oqs kem",
            "name": "decaps",
            "api": "kyber512"
          },
          {
            "value": 116169737,
            "range": "± 26526163",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "oqs kem",
            "name": "keygen",
            "api": "classicmceliece460896"
          },
          {
            "value": 34541,
            "range": "± 671",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "oqs kem",
            "name": "encaps",
            "api": "classicmceliece460896"
          },
          {
            "value": 91929,
            "range": "± 248",
            "unit": "ns/iter",
            "os": "ubuntu-latest_64",
            "category": "oqs kem",
            "name": "decaps",
            "api": "classicmceliece460896"
          }
        ]
      }
    ]
  },
  "groupBy": [
    "os"
  ],
  "schema": [
    "name",
    "platform",
    "os",
    "keySize",
    "api",
    "category"
  ]
}