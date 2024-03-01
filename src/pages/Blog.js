import React from "react";
import LogoARS from "../assets/images/logo_ars-removebg-preview.png";
import { Table } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Blog() {
  return (
    <>
      <Navbar />
      <div className="blog">
        <header>
          <div class="jumbotron">
            <h1 className="title-blog text-white">Work Order</h1>
            <p className="m-0">
              Sistem untuk mengelola permintaan pemeliharaan dan pemrosesan
              perintah kerja
            </p>
          </div>

          <nav>
            <ul className="my-auto">
              <li>
                <a href="#definisi">Definisi</a>
              </li>
              <li>
                <a href="#tujuan">Tujuan</a>
              </li>
              <li>
                <a href="#elemenworkorder">Elemen Work Order</a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="main-blog">
          <div id="content">
            <article id="sejarah" class="card-blog">
              <h2 className="label-blog">Sejarah</h2>
              <p>
                Pada tahun 1994 Yayasan Nirwana Nusantara mendirikan Lembaga
                Pendidikan dan Pelatihan Komputer (LPPK) Raharja yang diresmikan
                oleh Walikota Tangerang pada waktu itu Drs.H.Djakaria Machmud.
                Seiring berjalannya waktu lembaga pendidikan komputer ini
                semakin berkembang karena banyaknya masyarakat yang berminat
                mengikuti pelatihan komputer, sehingga pada tahun 2001
                Terbentuklah Sekolah Tinggi Manajemen dan Ilmu Komputer (STMIK)
                Raharja melalui Surat Keputusan Menteri Pendidikan Nasional
                Nomor: 74/D/O/2001,STMIK Raharja menjadi Perguruan Tinggi
                Komputer yang memiliki program studi terlengkap di Provinsi
                Banten. Akreditasi pada prodi Manajemen Informatika, Teknik
                Informatika Diploma Tiga (Akreditasi B), Akreditasi pada prodi
                Teknik Informatika-S2, Teknik Informatika-S1, Sistem
                Informasi-S1 (Akreditasi B), Akreditasi pada prodi Komputerisasi
                Akuntansi Diploma Tiga (Akreditasi B). Pada akhirnya tahun 2019
                Berdasarkan Surat Keputusan Menteri Riset, Teknologi dan
                Pendidikan Tinggi Republik Indonesia nomor: 254/KPT/I/2019
                tanggal 12 April 2019, Izin penggabungan Akademi Manajemen
                Informatika dan Sekolah Tinggi Manajemen dan Ilmu Komputer
                Raharja menjadi UNIVERSITAS RAHARJA.
              </p>
            </article>

            <article id="visidanmisi" class="card-blog">
              <h2 className="label-blog">Visi Dan Misi</h2>
              <p>
                Visi Universitas Raharja :<br />
                Dengan semangat perubahan Universitas Raharja pada tahun 2024
                siap melahirkan lulusan berkualitas, berintegritas, berdaya
                saing tinggi dan mampu meningkatkan kepercayaan masyarakat luas
                serta tercatat dalam kampus rangking Dunia.
              </p>
              <p>Misi Universitas Raharja :</p>
              <ol>
                <li>
                  Universitas Raharja (UR) akan melayani dengan hati secara
                  profesional kepada seluruh masyarakat yang ingin bergabung
                  berama Raharja dalam menjalankan Catur Dharma (Pembelajaran,
                  Penelitian, Pengembangan dan Pengabdian Masyarakat).
                </li>
                <li>
                  Universitas Raharja (UR) akan melaksanakan lifelong student
                  centered learning melalui atmosfer akademik yang kondusif,
                  berlandaskan Program Pendidikan Catur Dharma yang aktif dan
                  produktif menuju sukses yang berkelanjutan.
                </li>
                <li>
                  Universitas Raharja (UR) akan mendorong dan memfasilitasi pada
                  peserta didik yang memiliki inovasi dan presentasi unggul
                  menuju jenjang yang lebih tinggi.
                </li>
                <li>
                  Universitas akan membuka ruang kepada masyarakat yang memiliki
                  inovasi, gagasan dan keinginan untuk bersama-sama manajemen
                  kampus mengembangkan penelitian.
                </li>
                <li>
                  Universitas Raharja (UR) berkomitmen membantu Pemerintah dalam
                  melahirkan Sumber Daya Manusia yang handal, bardayasaing
                  tinggi dan berakhlak mulia.
                </li>
              </ol>
            </article>

            <article id="organisasimahasiswa" class="card-blog">
              <h2 className="label-blog">Organisasi Mahasiswa</h2>
              <p>
                Universitas Raharja mempunyai berbagai macam organisasi
                mahasiswa yang menarik dan bermanfaat bagi rekan mahasiswa
                Universitas Raharja. Di dalam organisasi tersebut mahasiswa
                dapat mengembangkan dirinya supaya menjadi kreatif,inovatif, dan
                loyalitas. Berikut ini macam-macam organisasi mahasiswa
                universitas raharja :
              </p>
              <ol>
                <li>
                  <a href="https://widuri.raharja.info/index.php?title=Badan_Eksekutif_Mahasiswa_(BEM)_Raharja">
                    Badan Eksekutif Mahasiswa (BEM)
                  </a>
                </li>
                <li>
                  <a href="https://widuri.raharja.info/index.php?title=Dewan_Mahasiswa_(DEMA)_Raharja">
                    Dewan Mahasiswa (DEMA)
                  </a>
                </li>
                <li>
                  <a href="https://komasi-rhj.blogspot.com/">
                    HMJ KOMASI (Himpunan Mahasiswa Jurusan Sistem Informasi)
                  </a>
                </li>
                <li>
                  <a href="https://himtif.org/">
                    HMJ HIMTIF (Himpunan Mahasiswa Jurusan Teknik Informatika)
                  </a>
                </li>
                <li>
                  <a href="#">
                    HMJ HIMASIKOM (Himpunan Mahasiswa Jurusan Sistem Komputer)
                  </a>
                </li>
                <li>
                  <a href="#">
                    HMJ IMMI (Himpunan Mahasiswa Manajemen Informatika)
                  </a>
                </li>
                <li>
                  <a href="#">UKM Raharja FC (Raharja Football Club)</a>
                </li>
                <li>
                  <a href="https://widuri.raharja.info/index.php?title=RIPALA">
                    UKM RIPALA (Raharja Pecinta Alam)
                  </a>
                </li>
                <li>
                  <a href="https://widuri.raharja.info/index.php?title=ABSTER">
                    UKM ABSTER (Anak Basket Komputer)
                  </a>
                </li>
                <li>
                  <a href="https://widuri.raharja.info/index.php?title=FUMMRI">
                    UKM FUMMRI (Forum Ukhuwah Mahasiswa Muslim Raharja
                    Informatika)
                  </a>
                </li>
                <li>
                  <a href="#">UKM MARANATA</a>
                </li>
                <li>
                  <a href="#">UKM PB Raharja (Persatuan Bulutangkis Raharja)</a>
                </li>
              </ol>
            </article>
          </div>
          <aside>
            <article class="card-blog">
              <header className="text-center">
                <h4 className="label">
                  PT. Arai Rubber Seal Indonesia
                </h4>
                <img class="profile-img" src={LogoARS} />
              </header>

              <section>
                <p className="info text-lg m-0" style={{textAlign: "justify"}}>
                  PT. ARAI RUBBER SEAL INDONESIA adalah sebuah perusahaan yang
                  bergerak di bidang manufaktur karet sintetis dan memproduksi
                  komponen otomotif seperti Oil Seal dan Valve Steam Seal,
                  O-Ring dan Rubber Part 12. Perusahaan ini terletak di Kawasan
                  Industri Manis, Jl. Manis II No. 2, Kabupaten Tangerang,
                  Banten, 15810 Indonesia.
                </p>
              </section>
            </article>
          </aside>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
