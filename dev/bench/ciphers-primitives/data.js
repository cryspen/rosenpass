window.BENCHMARK_DATA = {
  "lastUpdate": 1745933183859,
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
      }
    ]
  },
  "groupBy": [
    "os"
  ]
}