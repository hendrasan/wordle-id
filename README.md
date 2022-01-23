[Wordle](https://www.powerlanguage.co.uk/wordle/) adalah permainan tebak kata harian yang sangat populer sekarang. Tapi karena kosakata yang dipakai Wordle adalah bahasa Inggris, timbul rasa penasaran bagaimana kalau ada Wordle bahasa Indonesia. Itulah awal mula repo ini lahir.

Berawal dari repo [hannahcode](https://github.com/hannahcode/wordle), setelah melihat keseluruhan code, sepertinya cocok untuk jadi bahan belajar Next.js.

Langkah selanjutnya adalah mencari daftar kata bahasa Indonesia. Setelah membandingkan beberapa repo, akhirnya pilihan ada di [sastrawi](https://github.com/sastrawi/sastrawi) karena isinya adalah kata dasar saja, tanpa tanda "-" atau spasi.

Dari list kata tersebut (ada sekitar 24 ribu), saya menggunakan bantuan Sublime Text untuk mengambil hanya kata yang panjangnya 5 huruf, hasilnya ada sekitar 6500 kata. Kemudian menggunakan bash command berikut:

```bash
shuf -n 2000 fiveletterwords.txt > puzzles.txt
grep -Fvxf puzzles.txt fiveletterwords.txt > validguesses.txt
```

`shuf` untuk mengambil 2000 kata acak dari fiveletterwords.txt kemudian disimpan ke puzzles.txt.  
`grep` untuk membuang 2000 kata yang ada di puzzles.txt dari fiveletterwords.txt kemudian disimpan ke validguesses.txt

puzzles.txt dan validguesses.txt kemudian di-copy ke `constants/wordlist.ts` dan menjadi database game ini dan dipakai untuk memvalidasi jawaban dari user.

Secara gameplay, secara keseluruhan mirip Wordle. Tapi karena fokus pembelajaran saya adalah fungsi utamanya saja, saya tidak menyertakan fitur-fitur seperti statistik dan setting hard mode/dark mode.

Adapun saya menambahkan mode Endless supaya user bisa memainkan game ini terus-terusan tanpa harus menunggu hari berikutnya.

Beberapa fitur yang bisa dikembangkan (jika kamu tertarik untuk membuat Wordle versi kamu), seperti:

1. Buat tebakan dengan 6 huruf atau lebih
2. Buat jumlah tebakan supaya lebih atau kurang dari 6 kali
3. Tambah fitur hint untuk membantu mengisi 1 huruf di board (hanya bisa dipakai sekali, tapi dengan konsekuensi user tidak bisa share hasilnya)
4. Buat mode time attack. Jadi user diberikan misal 5 tebakan dan harus menebak 5 kata itu secepatnya.
5. Buat leaderboard dari mode time attack.
6. Dan masih banyak lagi.

---

Jika ingin menjalankan repo ini di local kamu, lakukan langkah-langkah berikut:

1. Clone repo ini

2. Jalankan perintah berikut untuk install dependencies

```bash
npm install
# atau
yarn
```

3. Jalankan perintah berikut untuk menjalankan aplikasi

```bash
npm run dev
# atau
yarn dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser.

5. Jika ingin menggunakan list kata versi kamu, silakan ganti list di `constants/wordlist.ts`

---

PS: Kunjungi juga [Katla](https://katla.vercel.app/) buatan [Fatih Kalifa](https://github.com/pveyes) rilis. Katla memiliki fitur yang lebih mendekati Wordle (ada statistik permainan dll) dan fitur tambahan lain (definisi kata). Repo ini mungkin akan di-update dengan ~~contekan~~ adaptasi fitur dari Katla (atau tidak, tergantung mood penulis 😆)
