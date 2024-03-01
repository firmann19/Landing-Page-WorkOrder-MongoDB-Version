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
            <p>
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
                <a href="#elemenworkorder">Elemen</a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="main-blog">
          <div id="content">
            <article id="sejarah" class="card-blog">
              <h2 className="label-blog">Definisi</h2>
              <p>
                Work Order adalah Sistem yang di dalamnya berisi perintah suatu
                pekerjaan dalam ruang lingkup internal ataupun eksternal
                perusahaan pada pelaksana yang memang ditugaskan. Untuk industri
                perusahaan manufaktur, work order adalah suatu dokumen yang akan
                mendukung penanganan inspeksi untuk pembekalan suku cadang,
                material, dan keperluan layanan.
              </p>
            </article>

            <article id="visidanmisi" class="card-blog">
              <h2 className="label-blog">Tujuan</h2>
              <p>
                Tujuan dibuatnya work order adalah agar bisa membantu
                penjadwalan dan juga perencanaan dari suatu pekerjaan. Work
                order akan berisi informasi terkait batasan pekerjaan yang
                memang harus dilakukan dan terkait objek teknis berbentuk
                operasi, lokasi, jadwal mulai dan selesai, serta durasi kerja.
              </p>
            </article>

            <article id="organisasimahasiswa" class="card-blog">
              <h2 className="label-blog">Elemen</h2>
              <p>
                Di dalam industri perusahaan manufaktur, work order dibuat oleh
                mereka yang berada di bagian perencanaan produksi. Perintah
                kerja tersebut dibuat untuk lebih dari satu produksi atau bisa
                juga merupakan proses dari permintaan sales order atau pesanan
                penjualan.
              </p>
              <ol>
                <li>
                  <h5 className="text-2xl fw-semibold">Informasi Kerja</h5>
                  <p>
                    Pada bagian atas atau header berisi informasi umum
                    pekerjaan, yaitu User, Departemen, Nama Peralatan, Kode
                    Peralatan, Tanggal Work Order, Tanggal Pengerjaan.
                    <ol>
                      <li>User: Nama user untuk formulir Work Order</li>
                      <li>
                        Departemen: Departemen user untuk formulir Work Order
                      </li>
                      <li>
                        Nama Peralatan: Nama Peralatan yang ingin diperbaiki
                        atau diganti
                      </li>
                      <li>
                        Kode Peralatan: Kode Peralatan yang ingin diperbaiki
                        atau diganti
                      </li>
                      <li>
                        Tanggal Work Order: Tanggal Work Order untuk mengetahui
                        waktu pembuatan work order oleh user
                      </li>
                      <li>
                        Tanggal Pengerjaan: Tanggal Pengerjaan untuk mengetahui
                        waktu work order dikerjakan oleh divisi IT
                      </li>
                    </ol>
                  </p>
                </li>

                <br />

                <li>
                  <h5 className="text-2xl fw-semibold">Bagian Detail</h5>
                  <p>
                    Dalam bagian detail, akan terdapat beberapa poin penting,
                    yakni Permasalahan, Tindakan, Sparepart Yang Diganti,
                    Pemohon, Disetujui, Dikerjakan, Diketahui. Berikut ini
                    adalah penjelasannya:
                    <ol>
                      <li>
                        Permasalahan: Permasalahan yang terjadi pada peralatan
                        user
                      </li>
                      <li>
                        Tindakan: Hasil akhir dari divisi IT dalam menangani
                        work order yang diberikan user
                      </li>
                      <li>
                        Sparepart Yang Diganti: Form untuk memberikan penjelasan
                        apabila ada sparepart yang perlu diganti
                      </li>
                      <li>Pemohon: user yang melakukan request work order</li>
                      <li>
                        Disetujui: Kepala departemen yang bertanggung jawab atas
                        request work order yang dilakukan oleh user berdasarkan
                        departemennya
                      </li>
                      <li>
                        Dikerjakan: Staff departemen IT yang mengambil request
                        work order yang diajukan user
                      </li>
                      <li>
                        Diketahui: Manager divisi IT yang bertanggung jawab atas
                        laporan work order yang selesai dikerjakan oleh staff
                        departemen IT
                      </li>
                    </ol>
                  </p>
                </li>
              </ol>
            </article>
          </div>
          <aside>
            <article class="card-blog">
              <header className="text-center">
                <h4 className="label">PT. Arai Rubber Seal Indonesia</h4>
                <img class="profile-img" src={LogoARS} />
              </header>

              <section>
                <p
                  className="info text-lg m-0"
                  style={{ textAlign: "justify" }}
                >
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
