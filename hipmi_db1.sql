-- MySQL dump 10.13  Distrib 8.0.30, for Linux (x86_64)
--
-- Host: localhost    Database: hipmi_db
-- ------------------------------------------------------
-- Server version	8.0.30-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int NOT NULL,
  `username` varchar(225) NOT NULL,
  `password` varchar(225) NOT NULL,
  `type` varchar(255) NOT NULL,
  `umkm_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  KEY `partner` (`umkm_id`),
  CONSTRAINT `adminToUmkm` FOREIGN KEY (`umkm_id`) REFERENCES `umkm` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (7,'admin1','$2a$10$qLmVgW5iuyi1IyRnF590nupUcOyhVgr9ZRsPNsUlZtjA.oeskJf5y','super admin',NULL),(8,'partner1','$2a$10$5vX.liTltjZ/C4W9WhUlp.2En4NIdCB3svuPUCUFHBYcoDiBIZFfu','admin umkm',1),(23,'partner2','$2a$10$PIC17AJwhD1RrTdX9hDhROrp9ArmKpvtWCmLL1OC9rK.fP8SQUKUC','admin umkm',2);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `judul` varchar(225) NOT NULL,
  `deskripsi` text NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `input_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (35,'Wakili Kaum Muda, Deden Agustiar Sabran Siap Berkompetisi di Pemilu 2024 Menuju DPD RI','PALANGKARAYA, SUARAKALIMANTANMEMBANGUN.COM – Deden Wigustianto atau yang biasa disapa Deden Agustiar Sabran secara resmi menyerahkan syarat dukungannya kepada KPU Kalimantan Tengah sebagai bakal calon anggota DPD RI Dapil Kalimantan Tengah, Kamis (29/12/2022) sore.\n\nKetua Dewan Pimpinan Daerah (DPD) Himpunan Pengusaha Muda Indonesia (HIPMI) Kalimantan Tengah ini menyerahkan sebanyak 3.200 dukungan yang tersebar di 14 Kabupaten/Kota se-Kalteng ke KPU Kalteng.\n\n“Hari ini kami dari perwakilan Deden Agustiar Sabran menyerahkan dukungan persyaratan untuk menjadi peserta Pemilu perseorangan menjadi Bakal Calon anggota DPD RI untuk wilayah Kalimantan Tengah, hari ini kami datang ke KPU dengan menyertakan bukti dukungan otentik kepada Deden Agustiar Sabran berjumlah 3.200 dukungan,” ucap tim atau Liaison Officer (LO) Deden, yang diwakili oleh Sigit Wido.\n\nSigit menambahkan, semua syarat yang menjadi ketentuan Komisi Pemilihan Umum terkait dengan syarat pencalonan anggota DPD RI tersebut sudah dilengkapi oleh Deden Wigustianto. Dan sudah diverifikasi dan dinyatakan sesuai oleh KPU Kalteng.\n\n“Selanjutnya kami menunggu proses administrasi verifikasi dari KPU, kami mengucapkan terimakasih yang sebesar-besarnya kepada seluruh masyarakat yang sudah memberikan dukungan kepada Deden Agustiar Sabran untuk maju melangkah ke DPD RI mewakili Provinsi Kalimantan Tengah,” kata Sigit.\n\nDirinya menegaskan, bahwa amanah yang diberikan masyarakat kepada Deden yang juga merupakan anak dari Ketua DAD Provinsi Kalteng tersebut akan pihaknya lanjutkan, untuk bertarung di kontestasi Politik tahun 2024 mendatang.\n\n“Kepada masyarakat yang sudah memberikan dukungan, Insya Allah amanah ini akan terus kita lanjutkan dan kita jalankan dengan penuh rasa tanggungjawab. Insya Allah, Deden siap lahir bathin melangkah maju sebagai anggota DPD RI dan siap mewakili aspirasi anak muda di Provinsi Kalimantan Tengah.” tandasnya.\n\nAdapun kehadiran dari Deden, diharapkan dapat mewakili keterlibatan kaum milenial untuk bersama-sama membangun daerah khususnya Provinsi Kalteng, serta membangun citra positif generasi muda.','image_picker2142055005-1672469574609.jpg','2022-12-31 06:52:54'),(37,'Ketua HIPMI Kalteng Maju ke DPD RI, Serahkan 3.200 Dukungan','PALANGKA,PROKALTENG CO- Ketua Himpunan Pengusaha Muda Indonesia Provinsi Kalimantan Tengah (Kalteng), Deden Wigustianto menyerahkan dokumen  persyaratan dukungan Bakal Calon (Balon) Anggota Dewan Perwakilan Daerah (DPD) Republik Indonesia (RI) ke Kantor Komisi Pemilihan Umum (KPU) Provinsi Kalteng, Kamis sore (29/12). Namun demikian ia diwakili oleh tim Perwakilan dari Deden yang menyerahkan dokumen persyaratan ke Ketua KPU Kalteng,Harmain. Perwakilan dari Deden, Sigit Widodo, mengucapkan terimakasih kepada masyarakat yang telah memberikan dukungan kepada Deden untuk maju melangkah ke DPD RI mewakili Kalteng. Deden menyerahkan dukugan sebanyak 3.200 pemilih yang tersebar di 14 Kabupaten Kota. “Insya Allah amanah ini kita harus lanjutkan, kita jalankan dengan penuh rasa tanggung jawab,” ujar SW panggilan sapaan akrabnya, saat jumpa pers kepada awak media.\n\nIa mengungkapkan ketidakhadiran dari Deden yang juga anak Agustiar Sabran karena sedang acara keluarga yang tidak bisa ditinggalkan. \n\n“Deden intinya siap lahir batin atas dukungan seluruh keluarga besar, untuk maju melangkah ke DPD dengan perwakilan anak muda, karena Deden ini masih usia muda,  golongan generasi Z. Insya Allah dia akan mewakili generasi pemuda pemudi Kalteng, generasi milenial dan generasi z,dan 50 persen lebih penduduk Kalteng rata-rata anak muda, insya Allah Deden akan siap meluangkan amanah menyalurkan aspirasi di DPD hari ini,” imbuhnya. Sebelumnya, Istri Petahana DPD RI Perwakilan Kalteng,  Muhammad Rakhman,  Erni Daryanti juga menyerahkan dokumen dukungan dengan jumlah dukungan 2.022 pemilih, dan jumlah sebaran di sembilan Kabupaten Kota se-Kalteng. \n\nTerkait hal itu, Erni Daryanti menyampaikan, sambutan jajaran dari KPU Provinsi Kalteng begitu sangat luar biasa dan hangat, serta sudah seperti keluarga. \"Saya sudah menyerahkan berkas pencalonan diri untuk DPD RI untuk tahun 2024 - 2029 kepada KPU Provinsi Kalteng dan hasilnya berkas diterima dengan baik,\" ucapnya. \n\nSementara itu, Muhammad Rakhman menyampaikan alasan dirinya mencalonkan istrinya untuk maju DPD RI agar meneruskan perjuangannya, untuk Kalteng. \n\nDirinya menyampaikan, bahwa ia tidak mencalonkan kembali ke DPD pada 2024 karena memiliki pertimbangan maju ke Pileg atau Pemilihan Kepala Daerah (Pilkada). \n\nSaat ini, ada  7 orang yang telah menyerahkan syarat dukungan bakal calon DPD RI untuk pemilu 2024 antara lain Habib Said Abdurrahman, H Siti Aseanti. Kemudian Perdie M Yoseph, Amanto Surya Langka dan Hj Iswanti, Erni Daryanti dan Deden Wigustianto.','image_picker1099492041-1672470015713.jpg','2022-12-31 07:00:15'),(38,'Wakili Kaum Muda, Deden Serahkan Persyaratan Dukungan ke KPU Kalteng','PALANGKA RAYA - Mewakili kaum muda Kalimantan Tengah (Kalteng) Deden Wigustianto atau yang biasa disapa Deden Agustiar Sabran secara resmi telah menyerahkan syarat dukungannya kepada Komisi Pemilihan Umum (KPU) Kalteng sebagai bakal calon anggota DPD RI Dapil Kalteng, Kamis (29/12/2022) sore.\n\nKetua Dewan Pimpinan Daerah (DPD) Himpunan Pengusaha Muda Indonesia (HIPMI) Kalteng ini menyerahkan sebanyak 3.200 dukungan yang tersebar di 14 Kabupaten/Kota se-Kalteng ke KPU Kalteng. \n\n\"Hari ini kami dari perwakilan Deden Agustiar Sabran menyerahkan dukungan persyaratan untuk menjadi peserta Pemilu perseorangan menjadi Bakal Calon anggota DPD RI untuk wilayah Kalimantan Tengah, hari ini kami datang ke KPU dengan menyertakan bukti dukungan otentik kepada Deden Agustiar Sabran berjumlah 3.200 dukungan,\" ucap tim Deden, Sigit Wido.\n\nSigit menambahkan, semua syarat yang menjadi ketentuan Komisi Pemilihan Umum terkait dengan syarat pencalonan anggota DPD RI tersebut sudah dilengkapi oleh Deden Wigustianto. Serta sudah diverifikasi dan dinyatakan sesuai oleh KPU Kalteng.\n\n\"Selanjutnya kami menunggu proses administrasi verifikasi dari KPU, kami mengucapkan terimakasih yang sebesar-besarnya kepada seluruh masyarakat yang sudah memberikan dukungan kepada Deden Agustiar Sabran untuk maju melangkah ke DPD RI mewakili Provinsi Kalimantan Tengah,\" kata Sigit.\n\nDirinya menegaskan, bahwa amanah yang diberikan masyarakat kepada Deden yang juga merupakan anak dari Ketua DAD Provinsi Kalteng tersebut akan pihaknya lanjutkan, untuk bertarung di kontestasi Politik tahun 2024 mendatang.\n\n\"Kepada masyarakat yang sudah memberikan dukungan, Insya Allah amanah ini akan terus kita lanjutkan dan kita jalankan dengan penuh rasa tanggungjawab. Insya Allah, Deden siap lahir bathin melangkah maju sebagai anggota DPD RI dan siap mewakili aspirasi anak muda di Provinsi Kalimantan Tengah,\" pungkasnya. \n\nPewarta : Antonius Sepriyono | Liputan SBM ','image_picker93790651-1672470372202.jpg','2022-12-31 07:06:12'),(41,'Peluang Bisnis, Ketua HIPMI Kalteng Dorong Partisipasi Pengusaha Muda','PALANGKA RAYA - Badan Pengurus Daerah (BPD) Himpunan Pengusaha Muda Indonesia (HIPMI) Kalimantan Tengah (Kalteng) mendorong partisipasi pengusaha muda daerah memanfaatkan peluang bisnis dan solusi pembiayaan produktif.\n\nHal ditegaskan HIPMI Kalteng dalam Forum Business Opportunity di Palangka Raya, Selasa (27/9/2022) malam.\n\nMenurut Ketua Umum BPD HIPMI Kalteng, Deden Agustiar Sabran,  forum ini bertujuan untuk pengusaha muda daerah membuka peluang usaha.\n\n\"Pada intinya kami pengurus BPD  HIPMI Kalteng sangat senang dengan kegiatan ini yang membuka peluang usaha untuk pengusaha muda,\" tuturnya.\n\nIa mengatakan, kegiatan ini menambah wawasan untuk  membuka peluang usaha bisnis, serta melihat pembiayaan debit untuk pengusaha muda.\n\nPengusaha muda asal Kota Manis Pangkalan Bun ini melihat peluang bisnis di Kalteng sangat baik dan peluangnya sangat banyak. Pengusaha muda yang ada di Kalteng tentunya harus bisa memanfaatkan secara positif peluang bisnis itu.\n\n\"Saya berharap dengan adanya kegiatan ini bisa menambah wawasan buat pengusaha muda di Kalteng dan sekitarnya,\" harapnya.\n\nSelain Ketua Umum BPD HIPMI Kalteng, Deden Agustiar Sabran, juga hadir dalam kegiatan ini Sekretaris Umum BPD HIPMI Kalteng, Bendahara Umum BPD Kalteng, Chris Philip Allesandro, Ketua Bidang II BPP HIPMI, dan CEO Daun Argo dan Direktur Eksekutif AFPI.[deni]','image_picker1783661821-1672470812809.jpg','2022-12-31 07:13:32'),(42,'Ketua Umum BPP HIPMI Lantik Pengurus BPD HIPMI Kalteng Periode 2022-2025','MMCKalteng – Palangka Raya – Ketua Umum Badan Pengurus Pusat Himpunan Pengusaha Muda Indonesia (BPP HIPMI) Mardani H. Maming melantik Pengurus Badan Pengurus Daerah (BPD) Himpunan Pengusaha Muda Indonesia (HIPMI) Kalteng Periode 2022-2025. Pelantikan berlangsung di Swiss Belhotel Danum Palangka Raya, Minggu (6/3/2022) malam.\n\nMereka yang dilantik yaitu Ketua Umum BPD HIPMI Kalteng Periode 2022-2025 Deden Wigusto, Wakil Ketua Umum I Rusdi, Wakil Ketua Umum II Rio Kriswana, Wakil Ketua Umum III Rizky Aditya Putra serta 79 pengurus baru lainnya yang membawahi Bidang-Bidang Organisasi diantaranya Bidang Organisasi, Keanggotaan dan Kelembagaan serta Sekretaris dan Wakil Sekretaris Umum, Bendahara dan Wakil Bendahara Umum dan juga Kompartemen-Kompartemen. Pelantikan dilaksanakan berdasarkan Surat Keputusan Badan Pengurus Pusat HIPMI Nomor: 099/Kep/Sek/BPP/III/22 tanggal 6 Maret 2022 tentang Pengesahan Susunan Kepengurusan BPD HIPMi Prov. Kalteng Masa Bakti 2022-2025.\n\nKetua Umum BPP HIPMI Mardani H. Maming dalam arahannya menyampaikan HIPMI pada Bulan Juni mendatang sudah genap 50 Tahun, dimana HIPMI adalah organisasi yang melahirkan kader dan dalam kepengurusan HIPMI tidak boleh berlanjut 2 periode ataupun 3 periode, karena di HIPMI hanya boleh 1 periode masa tingkatan masing-masing.\n\nMardani mengatakan bahwa Kalimantan telah diputuskan menjadi Ibu Kota Negara (IKN). Hal ini baik bagi warga Kalimantan, yang berarti Presiden akan ada di Kalimantan termasuk MPR. Ia mengutarakan sudah saatnya Kalimantan bersatu mendukung IKN, karena IKN penting bagi Kalimantan untuk membangun peradaban baru.\n\n\"Kita harus mempersiapkan untuk membangun entrepreneur - entrepreneur muda dimana entrepreneur muda untuk mengukur kemajuan Negara itu butuh 12 persen. Di Indonesia, entrepreneur baru 34 persen, Malaysia 5 persen, Singapore 7 persen, kita jauh dari Negara-Negara Asia, dari Negara-Negara lain. Kalau kita mau menjadi Negara Maju kita harus berada di 12 persen”, tandas Mardani.\n\nSementara itu, Administrasi Umum Setda Prov. Kalteng Lies Fahimah saat membacakan sambutan tertulis Wakil Gubernur Kalteng H. Edy Pratowo, mengucapkan selamat kepada seluruh jajaran pengurus HIPMI periode 2022-2025 yang baru saja dilantik.\n\n“Saya, atas nama Pemerintah Provinsi Kalimantan Tengah, mengucapkan selamat kepada seluruh jajaran pengurus yang baru saja dilantik, untuk HIPMI periode 2022-2025. Khususnya kepada Saudara Deden Wigusto,S.E yang baru saja dilantik sebagai Ketua BPD HIPMI Kalteng Periode 2022-2025”, tutur Lies.\n\nLies Fahimah berharap, dengan dilantiknya pengurus BPD HIPMI Kalteng Periode 2022-2025, hal ini dapat berdampak positif terhadap bisnis dengan inovasi dan membangun kolaborasi, serta tugas dan tanggungjawab organisasi dapat berjalan dengan sebaik-baiknya. Hal tersebut salah satunya bisa didapatkan dengan berorganisasi seperti di HIPMI, sehingga perekonomian daerah dapat lebih produktif dan berdaya saing, bukan hanya skala daerah, tapi skala nasional bahkan internasional. Lies juga berharap Pengurus HIPMI Kaltenv yang baru dapat membawa kemajuan untuk organisasi dan memberikan sumbangsih nyata kepada masyarakat.\n\n“Saya harap BPD HIPMI Kalimantan Tengah dapat bersinergi dengan pemerintah dalam memajukan iklim usaha dan menggalakkan wirausaha untuk generasi muda dalam menciptakan lapangan kerja, dapat membuat model bisnis baru yang adaptif di era digital dan revolusi industri 4.0 seperti sekarang ini , yang berimbas pada proses pemulihan ekonomi di Kalimantan Tengah akibat Pandemi COVID-19 yang melanda”, imbuhnya.\n\nLebih lanjut disampaikan, kedepannya BPD HIPMI Kalteng dapat menjembatani apa yang menjadi aspirasi pengusaha di Kalimantan Tengah dan melakukan sosialisasi terkait kebijakan pemerintah pusat, daerah, maupun regulator perbankan kepada para pengusaha di Kalimantan Tengah.\n\n\"Kita secara bersama-sama harus berupaya membangun perekonomian daerah, karena kita tahu pemulihan ekonomi ini tidak bisa dikerjakan secara parsial oleh beberapa pihak saja”, pungkasnya.\n\nKetua Umum BPD HIPMI Kalteng Periode 2022-2025 Deden Wigusto, menyatakan bersyukur atas amanah yang besar baginya selaku Ketua Ketua Umum BPD HIPMI Kalteng. Deden menyampaikan menyambut era keemasan HIPMI, tentu ini akan menjadi tantangan tersendiri terkait dengan peran komitmen HIPMI dalam keikutsertaannya mendorong pemulihan pembangunan perekonomian Bangsa Indonesia terkhususnya untuk Kalteng.\n\nTerlebih pada masa pandemi Covid-19 ini, terdapat 2 hal utama yang harus dilakukan nantinya yakni sinergitas dan kolaborasi antara BPD HIPMI Kalteng dengan Pemprov. Kalteng untuk bersama-sama melakukan tindakan yang dapat mempercepat perekonomian di Kalteng. Terakhir yakni melakukan tindakan pendataan dan menginvertarisir seluruh kekayaan yang dimiliki HIPMI baik di Daerah maupun di Nasional untuk membantu masyarakat yang sedang menghadapi kesulitas di masa pandemi Covid-19 saat ini.\n\nPelantikan Pengurus BPD HIPMI Kalteng Periode 2022-2025 dihadiri oleh Anggota DPR RI Dapil Kalteng selaku Ketua DAD Prov. Kalteng H. Agustiar Sabran, Wali Kota Palangka Raya Fairid Naparin, Unsur Forkopimda Prov. Kalteng, Asisten Administrasi Umum Setda Prov. Kalteng Lies Fahimah, Kepala Perangkat Daerah Prov. Kalteng terkait, Ketua KADIN Kalteng H. Rahmat Nasution Hamka, Pengurus BPD HIPMI Kalteng Periode 2022-2025 serta Ketua BPC HIPMI se-Provinsi Kalteng.(wdy/Foto:Asef)','image_picker1593529956-1672470973150.jpg','2022-12-31 07:16:13'),(43,'HIPMI Kalteng Diharapkan Mampu Cetak Pengusaha Muda Tangguh','Gubernur Kalimantan Tengah (Kalteng) H. Sugianto Sabran mengharapkan Himpunan Pengusaha Muda Indonesia (HIPMI) dapat menjalankan peran strategisnya sebagai laboratorium kader untuk meningkatkan pengembangan wirausaha, terutama bagi generasi muda dan mampu mencetak para pengusaha tangguh.\n\nDemikian disampaikan Staf Ahli Bidang Kemasyarakatan dan Sumber Daya Manusia (Sahli KSDM) Suhaemi saat mewakili Gubernur untuk menghadiri dan sekaligus membuka Rapat Kerja Daerah (Rakerda) HIPMI Kalteng Tahun 2022, di Ruang Pertemuan Hotel Luwansa, Kota Palangka Raya, pada Senin, 15 Agustus 2022.\n\n\"Menjadi harapan kita bersama, melalui kegiatan Diklatda, Rakerda, dan Forbisda ini, apa yang menjadi tujuan HIPMI dapat tercapai guna mencetak pengusaha muda yang tangguh dan berwawasan kebangsaan serta cinta tanah air,\" ucap Gubernur Kalteng Sugianto Sabran dalam sambutan yang dibacakan Sahli KSDM.\n\nSelanjutnya, selaras dengan tema Rakerda “Pengusaha Muda Bangkit Pasca Pandemi Mewujudkan Kalteng Makin Berkah”, HIPMI diharapkan mampu berkontribusi dan bersinergi dengan para pemangku kepentingan, termasuk Pemerintah Daerah, dalam pembangunan dan pemulihan ekonomi.\n\n“HIPMI sebagai wadah berhimpun pengusaha muda di Indonesia, tidak terkecuali di Kalimantan Tengah, harus mampu memberikan kontribusi nyata dalam kehidupan bermasyarakat, terutama pada bidang perekonomian, terlebih di masa Pandemi COVID-19,\" kata Sahli KSDM.\n\n“Pengusaha muda harus pandai melihat momentum. Sekarang saatnya para pengusaha bangkit ikut serta dalam pemulihan ekonomi dan terciptanya pengusaha-pengusaha baru,\" imbuh Sahli KSDM Suhaemi.\n\nSelain itu, Sahli KSDM juga meminta dukungan para peserta Rakerda HIPMI untuk turut serta menyukseskan Kejuaraan Sepeda Kelas Dunia UCI MTB Eliminator World Cup 2022 yang digelar 28 Agustus mendatang di Kota Palangka Raya. “Untuk menyukseskan event tersebut tentunya perlu dukungan kepada semua pihak, termasuk HIPMI,\" pungkasnya.\n\nTurut hadir dalam acara ini, di antaranya mewakili Badan Pengurus Pusat HIPMI Axcel Arfriando Narang, Ketua Umum Badan Pengurus Daerah HIPMI Kalteng Deden Agustiar Sabran, Kepala Otoritas Jasa Keuangan (OJK) Kalteng Otto Fitriandy, dan Plt. Kepala Dinas Perkebunan Provinsi Rizky Badjuri.\n\n(Tulisan: REN; Foto: JP)\n\nBiro Administrasi Pimpinan Sekretariat Daerah Provinsi Kalimantan Tengah','image_picker212787238-1672471089659.jpg','2022-12-31 07:18:09');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_assets`
--

DROP TABLE IF EXISTS `article_assets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article_assets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `article` int NOT NULL,
  `foto` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `article` (`article`),
  CONSTRAINT `article_assets_ibfk_1` FOREIGN KEY (`article`) REFERENCES `article` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_assets`
--

LOCK TABLES `article_assets` WRITE;
/*!40000 ALTER TABLE `article_assets` DISABLE KEYS */;
/*!40000 ALTER TABLE `article_assets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(225) NOT NULL,
  `komen` text NOT NULL,
  `rating` double NOT NULL,
  `foto` varchar(225) NOT NULL,
  `input_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `umkm_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (8,'Chans','radio yang cukup baik di dengar.',2.5,'','2022-08-24 07:46:37',3),(9,'Chans','masih banyak yang perlu di perbaiki dari radio ini.masih banyak yang perlu di perbaiki dari radio ini.masih banyak yang perlu di perbaiki dari radio ini.masih banyak yang perlu di perbaiki dari radio ini.masih banyak yang per',2.5,'','2022-08-26 16:48:07',4),(61,'Komen umkm 1','Coba Komen umkm 1',0,'image_picker9016451050754309518-1672496437555.jpg','2022-12-31 14:20:37',1),(65,'asd','asd',4.5,'image_picker803523538653324480-1672584131532.jpg','2023-01-01 14:42:11',1),(67,'Komen umkm 1','Coba Komen umkm 1',3.5,'image_picker5290302617813436692-1672584715241.jpg','2023-01-01 14:51:55',2),(68,'Komen umkm 2','Coba Komen umkm 2',4.5,'image_picker4003861125243884423-1672584749309.jpg','2023-01-01 14:52:29',2),(76,' Komen umkm 3','Coba Komen umkm 3',3.5,'image_picker3180260900378712050-1672588674848.png','2023-01-01 15:57:54',85),(77,'Komen umkm 4','Coba Komen umkm 4',4.5,'image_picker7694232043035550768-1672588748845.jpg','2023-01-01 15:59:08',86);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment_article`
--

DROP TABLE IF EXISTS `comment_article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment_article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `komen` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` double NOT NULL,
  `foto` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `input_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `article` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `article` (`article`),
  CONSTRAINT `comment_article_ibfk_1` FOREIGN KEY (`article`) REFERENCES `article` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment_article`
--

LOCK TABLES `comment_article` WRITE;
/*!40000 ALTER TABLE `comment_article` DISABLE KEYS */;
INSERT INTO `comment_article` VALUES (38,'Komen berita 1','Coba Komen berita 1',2,'image_picker1611686545946344091-1672485578357.jpg','2022-12-31 11:19:38',35),(39,'Komen berita 11','Komen berita 11',2,'image_picker7626720685448929980-1672485679148.jpg','2022-12-31 11:21:19',35),(40,'Komen berita 2','Coba Komen berita 2',4.5,'image_picker4606613264794434095-1672485728204.jpg','2022-12-31 11:22:08',37),(41,'Komen berita 22','Coba Komen berita 22 Komen berita 22  Komen berita 22 Komen berita 22 Komen berita 22 Komen berita 22',4.5,'image_picker529450899270929869-1672485775522.jpg','2022-12-31 11:22:55',37);
/*!40000 ALTER TABLE `comment_article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lembaga`
--

DROP TABLE IF EXISTS `lembaga`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lembaga` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `foto` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `deskripsi` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lembaga`
--

LOCK TABLES `lembaga` WRITE;
/*!40000 ALTER TABLE `lembaga` DISABLE KEYS */;
INSERT INTO `lembaga` VALUES (1,'Lembaga Penyiaran Publik','scaled_image_picker9001752350951625088-1665626820109.jpg','Obrolan Angkring, Alternatif, Ketoprak, Jogja Week End, Video,\r\nGelar Budaya, Koes Plus, Pelangi Desa, Daerah, Membangun,\r\n\r\nDialog Publik, Jelajah Alam, Karaoke on TV, Keroncong, Jalan-Jalan,\r\n\r\nKarang Tumaritis, Pangkur Jenggleng, Konser Jawa, Dunia Anako,\r\n\r\nRuang Keluarga, Wayang Kulit, Cangkriman, Halo Dokter, Campur\r\n\r\nSari dan Taman Sari.'),(2,'Lembaga Penyiaran Swasta','scaled_image_picker3958269098875080953-1665626828141.jpg','Obrolan Angkring, Alternatif, Ketoprak, Jogja Week End, Video Kl p,\r\nGelar Budaya, Koes Plus, Pelangi Desa, Daerah, Membangun,\r\n\r\nDialog Publik, Jelajah Alam, Karaoke on TV, Keroncong, Jalan-Jalan,\r\n\r\nKarang Tumaritis, Pangkur Jenggleng, Konser Jawa, Dunia Anako,\r\n\r\nRuang Keluarga, Wayang Kulit, Cangkriman, Halo Dokter, Campur\r\n\r\nSari dan Taman Sari.'),(3,'Lembaga Penyiaran Komunitas','scaled_image_picker7785569439204783828-1665626838693.jpg','Obrolan Angkring, Alternatif, Ketoprak, Jogja Week End, Video Kl p,\r\nGelar Budaya, Koes Plus, Pelangi Desa, Daerah, Membangun,\r\n\r\nDialog Publik, Jelajah Alam, Karaoke on TV, Keroncong, Jalan-Jalan,\r\n\r\nKarang Tumaritis, Pangkur Jenggleng, Konser Jawa, Dunia Anako,\r\n\r\nRuang Keluarga, Wayang Kulit, Cangkriman, Halo Dokter, Campur\r\n\r\nSari dan Taman Sari.');
/*!40000 ALTER TABLE `lembaga` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loker`
--

DROP TABLE IF EXISTS `loker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loker` (
  `id` int NOT NULL AUTO_INCREMENT,
  `judul` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `admin_id` int NOT NULL,
  `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `loker_ibfk_1` (`admin_id`),
  CONSTRAINT `loker_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loker`
--

LOCK TABLES `loker` WRITE;
/*!40000 ALTER TABLE `loker` DISABLE KEYS */;
INSERT INTO `loker` VALUES (1,'Recruitment BUMN Terbaru, Palangkaraya','PT ASABRI (Persero)\nPalangkaraya, Palangka Raya City, Central Kalimantan\n\nLowongan Kerja BUMN Palangkaraya Terbaru – PT ASABRI (Persero) adalah Badan Usaha Milik Negara (BUMN) yang ditunjuk oleh pemerintah sebagai penyelenggara program jaminan sosial bagi prajurit TNI anggota Polri dan pegawai aparatur sipil negara (ASN)\n\ntermasuk pegawai negeri sipil kontrak ( PPPK) dan Pegawai Negeri Sipil (PNS) di Kementerian Pertahanan dan Keamanan Masyarakat\n\nLowongan Kerja BUMN PT ASABRI (Persero) Terbaru 2022\n\nSaat ini BUMN PT ASABRI (Persero) kembali membuka lowongan kerja melalui Program Rekrutmen Bersama BUMN Batch 2 pada tahun 2022,untuk dibutuhkan simak di bawah ini:\n\n1. Branch Office – Customer Services\n\nBidang :\n• Bisnis Niaga/Pemasaran\n\nJenjang :\n• Sarjana S1/Diploma IV\n\nJurusan :\n• Semua Jurusan\n\nPersyaratan :\n• Pendidikan minimal D4/S1 semua jurusan\n• Usia minimal 20 tahun dan maksimal 30 tahun di tahun 2022\n• Menguasai Microsoft Office\n• Memiliki kemampuan interpersonal skill\n• Memiliki digital mindset dan pengetahuan digital\n• Bersedia ditempatkan pada Unit Kerja Perusahaan di seluruh wilayah Indonesia\n• Diutamakan berdomisili di Balikpapan, Makassar, Lhokseumawe, Batam, Pekanbaru, Bengkulu, Kupang, Banjarmasin, Palangka Raya, Palu, Kendari, dan Ternate\n• Memiliki pengalaman di Perusahaan sejenis adalah nilai tambah\n\n2. Branch Office – Administration Staff\n\nBidang :\n• Bisnis Niaga/Pemasaran\n\nJenjang :\n• Sarjana S1/Diploma IV\n\nJurusan :\n• Semua Jurusan\n\n3. Corporate Social Responsibility (CSR) Staff\n\nBidang :\n• Operasi/Produksi/Proyek\n\nJenjang :\n• Sarjana S1/Diploma IV\n\nJurusan :\n• Public Relations\n• Manajemen\n• Keuangan\n• Ilmu Komunikasi\n• Administrasi\n\nPersyaratan :\n• Pendidikan minimal D4/S1 terakreditasi, jurusan Keuangan/Administrasi/Manajemen/Public Relation/Komunikasi\n• Usia minimal 20 tahun dan maksimal 30 tahun di tahun 2022\n• Menguasai Microsoft Office\n• Memiliki kemampuan interpersonal skill\n• Memiliki digital mindset dan pengetahuan digital\n• Bersedia ditempatkan pada Unit Kerja Perusahaan di seluruh wilayah Indonesia\n• Memiliki pengalaman Corporate Social Responsibility/Commercial Banking atau pengalaman di Perusahaan sejenis minimal 1 tahun\n\n4. Change Management Staff\n\nBidang :\n• Sistem Management and Safety\n\nJenjang :\n• Sarjana S1/Diploma IV\n\nJurusan :\n• Teknik Industri\n• Statistik\n• Sistem Teknologi Informasi\n• Manajemen\n\nPersyaratan :\n• Pendidikan minimal D4/S1 terakreditasi, jurusan Sistem Informasi/Sistem Informas/Statistik/Manajemen/Teknik Industri\n• Usia minimal 20 tahun dan maksimal 30 tahun di tahun 2022\n• Menguasai Microsoft Office\n• Memiliki kemampuan interpersonal skill\n• Memiliki digital mindset dan pengetahuan digital\n• Bersedia ditempatkan pada Unit Kerja Perusahaan di seluruh wilayah Indonesia\n• Memiliki pengalaman Business Process Management/Quality Management System/Change management/Research and Development atau pengalaman di Perusahaan sejenis minimal 1 tahun\n\n5. Data Management Staff\n\nBidang :\n• Digitalisasi and IT\n\nJenjang :\n• Sarjana S1/Diploma IV\n\nJurusan :\n• Statistik\n• Sistem Teknologi Informasi\n• Manajemen\n• Administrasi Bisnis\n\nPersyaratan :\n• Pendidikan minimal D4/S1 terakreditasi, jurusan Administrasi Bisnis/Manajemen/Statistik/Teknologi Informasi/Teknik Industri\n• Usia minimal 20 tahun dan maksimal 30 tahun di tahun 2022\n• Menguasai Microsoft Office\n• Memiliki kemampuan interpersonal skill\n• Memiliki digital mindset dan pengetahuan digital\n• Bersedia ditempatkan pada Unit Kerja Perusahaan di seluruh wilayah Indonesia\n• Memiliki pengalaman Data Collecting Management atau pengalaman di Perusahaan sejenis minimal 1 tahun\n\n6. Assets Management Staff\n\nBidang :\n• Logistic/Supply Chain/Asset/GA\n\nJenjang :\n• Sarjana S1/Diploma IV\n\nJurusan :\n• Teknik Sipil\n• Teknik Informatika\n• Sistem Teknologi Informasi\n• Manajemen\n• Ekonomi\n• Administrasi Bisnis\n\nPersyaratan :\n• Pendidikan minimal D4/S1 terakreditasi, jurusan Ekonomi/Manajemen/Administrasi Bisnis/Teknik Sipil/Teknologi Informasi/Teknik Informatika\n• Usia minimal 20 tahun dan maksimal 30 tahun di tahun 2022\n• Menguasai Microsoft Office\n• Memiliki kemampuan interpersonal skill\n• Memiliki digital mindset dan pengetahuan digital\n• Bersedia ditempatkan pada Unit Kerja Perusahaan di seluruh wilayah Indonesia\n• Memiliki pengalaman Assets Management atau pengalaman di Perusahaan sejenis minimal 1 tahun\n\n7. Compliance Staff\n\nBidang :\n• Legal and Compliance\n\nJenjang :\n• Sarjana S1/Diploma IV\n\nJurusan :\n• Manajemen\n• Ilmu Hukum\n\nPersyaratan :\n• Pendidikan minimal D4/S1 terakreditasi, jurusan Hukum/Manajemen\n• Usia minimal 20 tahun dan maksimal 30 tahun di tahun 2022\n• Menguasai Microsoft Office\n• Memiliki kemampuan interpersonal skill\n• Memiliki digital mindset dan pengetahuan digital\n• Bersedia ditempatkan pada Unit Kerja Perusahaan di seluruh wilayah Indonesia\n• Memiliki pengalaman Legal and Compliance atau pengalaman di Perusahaan sejenis minimal 1 tahun\n\n8. Finance Staff\n\nBidang :\n• Keuangan\n\nJenjang :\n• Sarjana S1/Diploma IV\n\nJurusan :\n• Perpajakan/Pajak\n• Keuangan\n• Ekonomi\n• Akuntansi\n\nPersyaratan :\n• Pendidikan minimal D4/S1 terakreditasi, jurusan Keuangan/Akuntansi/Perpajakan/Ekonomi\n• Usia minimal 20 tahun dan maksimal 30 tahun di tahun 2022\n• Menguasai Microsoft Office\n• Memiliki kemampuan interpersonal skill\n• Memiliki digital mindset dan pengetahuan digital\n• Bersedia ditempatkan pada Unit Kerja Perusahaan di seluruh wilayah Indonesia\n• Memiliki pengalaman Finance/Accounting atau pengalaman di Perusahaan sejenis minimal 1 tahun\n\nApabila anda berminat dan memenuhi kriteria diatas segera apply cv/lamaran melalui laman resmi yang sudah kami cantumkan yang tertera pada bagian apply.\n\ncatatan:\n\nSubjek : Posisi yg dilamar\n\n– Kuota dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu\n\n– Proses pendaftaran tidak dipungut biaya apapun',7,'2022-12-30 12:10:04','image_picker6174567252533321922-1672427720731.jpg'),(13,'Pos Indonesia Karir, Palangka Raya','Lowongan kerja Palangka Raya – Pos Indonesia merupakan sebuah Badan Usaha Milik Negara (BUMN) Indonesia yang bergerak di bidang layanan pos. Saat ini, bentuk badan usaha Pos Indonesia merupakan Perseroan Terbatas dan sering disebut dengan PT. Pos Indonesia.\n\nSaat ini PT. Pos Indonesia kembali membuka lowongan pekerjaan/kesempatan karir bersama perusahaan. Berikut adalah posisi dan kualifikasi yang dibutuhkan.\n\nO-Ranger Loket\n\nTugas pokok O-Ranger Loket adalah memberikan pelayanan kepada pelanggan yang bertransaksi di loket, melakukan aktivitas cross selling dan upselling serta penawaran dan edukasi layanan kepada pelanggan di loket.\n\nKualifikasi :\n• Laki-laki/Perempuan\n• Diutamakan belum menikah\n• Pendidikan S1\n• Berusia minimal 21 tahun\n• Berpenampilan menarik dan rapi\n\nO-Ranger Mobil\n\nBertugas untuk memasarkan produk Pos Indonesia dan melakukan layanan penjemputan barang (pick up service) di masing-masing area. Ruang lingkup penjualan O-Ranger yaitu pemasaran dan penjualan produk jasa kurir pada segmen ritel.\n\nKualifikasi :\n• Laki-laki/Perempuan\n• Berusia minimal 18 tahun\n• Memiliki HP Android minimal OS Nougat\n• Memiiki kemampuan bekomunikasi dengan baik\n• Mampu bekerjasama dalam tim dan individu\n• Target oriented\n\nO-Ranger Antaran\n\nMelakukan antaran kiriman surat dan paket kepada penerima kiriman di lokasi yang telah ditetapkan dengan tata cara sesuai dengan standard Perusahaan.\n\nKualifikasi :\n• Laki-laki\n• Berusia minimal 18 tahun\n• Memiliki HP Android\n• Memiiki kemampuan bekomunikasi dengan baik\n• Mampu bekerjasama dalam tim dan individu\n\nApabila berminat dan sesuai kualifikasi segera registrasi atau kirimkan CV lengkap Anda ke email/URL yang tertera pada bagian Apply.\n\nCatatan :\n• Seluruh Proses Rekrutmen dan/atau Registrasi Tidak Dikenakan Biaya Apapun\n• Panitia rekrutmen dapat menutup info lowongan sewaktu-waktu tanpa pemberitahuan terlebih dahulu apabila jumlah pelamar telah memenuhi kuota',7,'2022-12-30 15:46:03','image_picker6312852468283780235-1672427885017.png'),(15,'Apoteker K-24, Kota Palangka Raya','Loker terbaru Palangka Raya – PT K-24 Indonesia, perusahaan franchise Apotek K-24 yang sudah berkembang pesat dan saat ini telah membuka lebih dari 330 gerai di seluruh wilayah Indonesia memberikan kesempatan kepada kandidat potensial untuk mengisi posisi :\n\nApoteker\n\nTanggung Jawab :\n• Bertanggung jawab atas pengelolaan apotek\n• Melayani penjualan obat dan menerima resep\n• Memberikan konsultasi, informasi dan edukasi obat\n\nKualifikasi :\n• Minimal pendididkan lulus Profesi Apoteker\n• Memiliki STRA\n• Jujur, loyal, dinamis dan berjiwa muda\n• Bersedia bekerja dalam sistem shift dan masuk di hari libur umum/nasional',7,'2022-12-31 11:38:03','image_picker4595156016224780371-1672486683434.png'),(16,'Lowongan Kerja Staff Distribution PT Paragon Palangkaraya','Loker Paragon Palangkaraya – PT Paragon Technology and Innovation atau dikenal juga sebagai Paragon Technology and Innovation adalah salah satu perusahaan Fast Moving Consumer Goods (FMCG) bidang kosmetik terbesar di Indonesia.\n\nParagon sebagai perusahaan nasional kini telah menjadi market leader yang menaungi merek-merek unggulan seperti Wardah, Make Over, Emina, Kahf, Labore, Putri, Biodef, Instaperfect, Crystallure, dan Tavi.\n\nSaat ini PT Paragon sedang merekrut tenaga kerja baru untuk bergabung dan berkembang bersama perusahaan Paragon Technology and Innovation dengan kualifikasi sebagai berikut.\n\nPosisi\n• Penanggung Jawab Teknis\n\nTugas dan Tanggung Jawab\n• Menyusun, memastikan dan menerapkan sistem manajemen mutu sesuai standar usaha PBK\n• Fokus pada pengelolaan kegiatan yang menjadi kewenangannya serta menjaga dokumentasi mampu telusur;\n• Mengkoordinasikan dan melakukan dengan segera setiap kegiatan penarikan Kosmetika;\n• Memastikan bahwa keluhan pelanggan ditangani dengan efektif\n• Melakukan kualifikasi dan persetujuan terhadap pemasok dan pelanggan (Khusus untuk yang di plant, review bersama team Paragon)\n• Turut serta dalam pembuatan perjanjian antara pemberi kontrak dan penerima kontrak yang menjelaskan mengenai tanggung jawab masingmasing pihak yang berkaitan dengan distribusi/ penyaluran kosmetika;\n• Merangkap admin warehouse bagian retur untuk memproses lebih lanjut retur toko\n• Memastikan inspeksi diri dilakukan secara berkala sesuai program dan tersedia tindakan\n• Audit process (bersama tim audit)\n\nKualifikasi\n• Lulusan D3 farmasi atau S1 farmasi yang memiliki STRTTK aktif\n• Anggota aktif PAFI\n• Sertifikat sedang tidak digunakan dalam praktik bisnis kefarmasian apapun dan dimanapun\n• Memahami cara distribusi kosmetik (diutamakan CPKB dan CDOB)\n• Detail\n• Teliti\n• Terorganisir\n• Analitikal\n• Mempunyai disiplin tinggi\n• Bersedia ditempatkan di DC area dan mobile\n\nUntuk yang memenuhi kualifikasi bisa mendaftarkan diri di tombol yang sudah kami sediakan.\n\nCatatan\n• Lowongan kerja Paragon bersifat terbatas sesuai kuota yang dibutuhkan perusahaan.\n• Semua proses Rekrutmen Paragon secara online dan tenpa dipungut biaya',7,'2022-12-31 11:39:17','image_picker187731282480683806-1672486757100.jpg'),(17,'Lowongan Kerja BUMN PT Pertamina 2023 Palangkaraya','Lowongan Kerja BUMN 2023 Terbaru PT PERTAMINA (Persero) – PT Pertamina (Persero) kembali membuka Kesempatan kepada Putra-Putri Indonesia terbaik untuk bergabung dan berkembang bersama menjadi Karyawan PT Pertamina (Persero).\n\nPOSISI SEBAGAI BERIKUT :\n\n• Kepala Produksi\n\n• Operator Produksi\n\n• Account Executive\n\n• Accounting & Finance\n\n• Administrasi\n\n• Manager\n\n• Manager Operasional\n\n• Asisten Manager\n\n• Management\n\n• Asisten Management\n\n• Sekertaris\n\n• Human Resource\n\n• Keuangan\n\n• Supervisior\n\n• Heathcare & Medical\n\n• IT(InformasiTeknologi)\n\n• IT/Progammer\n\n• Customer Service\n\n• Call Center\n\n• Marketing & Sales\n\n• Statistika\n\n• Psikologi Dan Konseling\n\n• Hukum\n\n• Labotarium\n\n• SPG & SPB\n\n• Teknisi\n\n• Security\n\n• Drive\n\n• Teknik Industri\n\n• Teknik Sipil\n\n• Teknik Perminyakan\n\n• Teknik Mesin\n\n• Teknik Elektro\n\n• Teknik Pertambangan\n\n• Teknik Kimia\n\n• Teknik Lingkungan\n\nLowongan Kerja BUMN 2023 Terbaru PT PERTAMINA (Persero)\n\nPERSYARATAN UMUM :\n\n• Pria/wanita warga negara indonesia\n\n• Pendidikan Minimal SMA/SMK/Setara (semua jurusan)\n\n• Sehat jasmani dan rohani\n\n• Pengalaman dalam bidangnya\n\n• Mempunyai kemampuan analisa yang baik\n\n• Memiliki kemampuan dan dapat berkomunikasi dengan baik\n\n• Teliti,disiplin dan bertanggung jawab serta motivasi kerja tinggi\n\n• Dapat bekerja secara individu maupun dalam team\n\n• Bersedia ditempatkan di seluruh wilayah operasi PT PERTAMINA (persero).\n\nKELENGAKAPAN BERKAS LAMARAN :\n\n• Surat lamaran dan daftar riwayat hidup\n\n• Potocopy ijazah / surat keterangan lulus dan transkrip nilai\n\n• Potocopy ktp,kk dan pas poto ukuran 4×6 (2 lembar)\n\n• No telpon/hp dan alamat email yang valid\n\n• Kelengkapan berkas pendukung lainnya sepertisertifikat,skck,skbn dll.\n\nApabila kamu tertarik dan memenuhi kualifikasi, segera daftarkan diri melalui “Apply” dibawah ini.\n\nPT Pertamina (Persero)\n\nApply Lamaran\n\nPenting :\n\nHanya pelamar yang memenuhi kualifikasi yang nantinya akan dipanggil untuk mengikuti tahapan seleksi selanjutnya.\n\nHanya melalui web resmi https://www.pertamina.recruitmen.id\n\nProses seleksi ini dilaksanakan secara terbuka\n\nSeluruh tahapan seleksi ini tidak dipungut biaya.\n\nNOTE :\n\nSubjek diisi Nama Lengkap dan Nomor Handphone.\n\n+ Ikuti kami melalui akun IG Untuk update lowongan kerja setiap harinya\n\n⭐ Terimakasih telah berkunjung di Careers Recruitment, Semoga anda bisa berbagi kepada yang membutuhkan pekerjaan dengan kualifikasi yang ditentukan perusahaan',7,'2022-12-31 11:41:45','image_picker3744950261014883198-1672486905096.png');
/*!40000 ALTER TABLE `loker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partner`
--

DROP TABLE IF EXISTS `partner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partner` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `channel` varchar(255) DEFAULT NULL,
  `deskripsi` text,
  `alamat` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `youtube` varchar(255) DEFAULT NULL,
  `google_maps` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partner`
--

LOCK TABLES `partner` WRITE;
/*!40000 ALTER TABLE `partner` DISABLE KEYS */;
/*!40000 ALTER TABLE `partner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pengaduan`
--

DROP TABLE IF EXISTS `pengaduan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pengaduan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(225) NOT NULL,
  `email` varchar(255) NOT NULL,
  `saran` text NOT NULL,
  `input_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pengaduan`
--

LOCK TABLES `pengaduan` WRITE;
/*!40000 ALTER TABLE `pengaduan` DISABLE KEYS */;
INSERT INTO `pengaduan` VALUES (1,'Redo','redo@gmail.com','reload aplikasinya terkesan lambat untuk kedepannya semoga bisa lebih cepat.','2022-08-26 15:18:31'),(2,'Chandra Tirta','chandra@gmail.com','mudahan server nya bisa lebih cepat reload','2022-08-26 15:44:20'),(3,'Kiki','kiki@gmail.com','aplikasinya terkesan lambat padahal jaringan saya aman. mudahan bisa di perbaiki masalah ini.','2022-08-27 19:20:02'),(4,'Yaya Ariadi','yaya@gmail.com','ada sedikit bug dibagian home. artikelnya tidak muncul.','2022-08-27 19:20:02'),(50,'virgi','virgiawan. sk@gmail.com','ada siaran TV ilegal yg menayangkan gambar yg kurang baik bagi anak-anak','2022-09-08 05:22:54');
/*!40000 ALTER TABLE `pengaduan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profil`
--

DROP TABLE IF EXISTS `profil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profil` (
  `id` int NOT NULL AUTO_INCREMENT,
  `visi` text NOT NULL,
  `misi` text NOT NULL,
  `struktur_organisasi` varchar(225) NOT NULL,
  `latar_belakang` text NOT NULL,
  `wilayah_kerja` text NOT NULL,
  `program_unggulan` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profil`
--

LOCK TABLES `profil` WRITE;
/*!40000 ALTER TABLE `profil` DISABLE KEYS */;
INSERT INTO `profil` VALUES (1,'Mewujudkan Penyiaran Sehat berbasis Pelayanan Terintegrasi Secara Elektronik guna Kemajuan, Kemandirian dan Keadilan bagi Kesejahteraan Masyarakat Kalimantan Tengah menuju Kalteng MAKIN BERKAH.','Dalam rangka mencapai visi yang telah dicanangkan, KPID Kalteng akan menjalankan beberapa misi, yaitu:\n\n1. Mendorong program siaran/konten siaran yang inspiratif, edukatif, informatif dan bermanfaat bagi kemajuan, keadilan dan kesejahteraan masyarakat.\n\n2. Menciptakan siaran yang sehat dan ekonomi finansial lembaga penyiaran yang sehat.\n\n3. Meningkatkan peran masyarakat dalam dunia penyiaran sebagai kontrol sosial media sehingga terjaga integritas kebangsaan yang utuh dalam bingkai NKRI.\n\n4. Mengimplementasikan nilai “huma betang” sebagai perekat sosial dalam keberagaman siaran dan mengangkat konten lokal/kearifan lokal di Provinsi Kalimantan Tengah.\n\n5. Meningkatkan pelayanan publik berbasis IT dan pengembangan SDM yang profesional.\n\n6. Kawal Proses Analog Switch-Off (ASO) dan Siaran Digital di Kalimantan Tengah.\n\n7. Akuntabel dan transparan dalam penggunaan Anggaran Belanja Hibah KPID Kalteng.','scaled_image_picker2329661589150443621-1665626788380.jpg','Komisi Penyiaran Indonesia Daerah Kalimantan Tengah (KPID Kalteng) merupakan Lembaga Negara yang lahir berdasarkan Undang-undang No.32 Tahun 2002 tentang Penyiaran dan mengemban amanah untuk mewadahi aspirasi serta mewakili kepentingan masyarakt akan penyiaran.\n\nSecara umum, tugas pokok KPID Kalteng adalah mengatur hal-hal mengenai penyiaran. Secara khusus, tugas/kewajiban KPID KALTENG adalah :\n1. Menjamin masyarakat untuk memperoleh informasi yang layak dan benar sesuai dengan hak asasi manusia.\n\n2. Turut membangun infrastruktur dibidang penyiaran.\n\n3. Turut membangun iklim persaingan yang sehat antar lembaga penyiaran dan industri terkait.\n\n4. Memelihara tatanan informasi nasional yang adil, merata dan seimbang.\n\n5. Menampung, meneliti dan menindaklanjuti aduan, sanggahan, serta kritik dan apresiasi masyarakat terhadap penyelenggaraan penyiaran.\n\n6. Menyusun perencanaan pengembangan sumber daya manusia yang menjamin profesionalitas dibidang penyiaran.\n\n7. Untuk dapat melaksanakan tugas tersebut, secara atributif KPID Kalteng diberikan beberapa kewenangan, yaitu :\na. Menetapkan standar program siaran (SPS);\nb. Menyusun peraturan dan menetapkan pedoman perilaku penyiaran (P3);\nc. Mengawasi pelaksanaan peraturan dan pedoman perilaku penyiaran serta standar program siaran (P3&SPS);\nd. Memberikan sanksi terhadap pelanggaran peraturan dan p3sps;\ne. Melakukan koordinasi dan /atau kerjasama dengan pemerintah, lembaga penyiaran dan masyarakat.\n\nPelaksanaan tugas dan wewenang KPID Kalteng, dalam operasionalisasinya dibagi kedalam 3 (tiga) kelompok kerja yaitu :\n1. Bidang pengelolaan struktur dan sistem penyiaran;\n2. Bidang pengawasan dan isi siaran;\n3. Bidang kelembagaan.\nKetiga bidang tersebut dalam melaksanakan tugasnya dibantu oleh sebuah sekretariat yang dibiayai oleh APBD.\n','Wilayah Kerja dan Pelayanan Publik KPID Kalteng di 13 (tiga belas) Kabupaten dan 1 (satu) Kota, antara lain : \n1. Kota Palangka Raya \n2. Kabupaten Pulang Pisau\n3. Kabupaten Kapuas \n4. Kabupaten Murung Raya\n5. Kabupaten Barito Utara \n6. Kabupaten Barito Timur \n7. Kabupaten Barito Selatan\n8. Kabupaten Katingan \n9.Kabupaten Gunung Mas \n10. Kabupaten Kotawaringin Timur\n11. Kabupaten Kotawaringin Barat\n12. Kabupaten Seruyan \n13. Kabupaten Lamandau \n14. Kabupaten Sukamara \n\nLembaga Penyiaran di Kalimantan Tengah berjumlah 15 TV Analog, 21 TV Kabel dan 34 Radio.','1. Pelayanan Publik\nPelayanan Publik di Bidang Infrastruktur dan Perizinan, serta tata kelola lembaga penyiaran di Kalimantan Tengah.\n\n2. Literasi Media\nProgram ini adalah upaya KPI untuk membentuk masyarakat agar mampu berpikir kritis dan mendorong media sehat. Di dalam program ini KPI bersama pemerintah dan Lembaga-lembaga lain yang bekerjasama dengan KPI, membangun kesadaran masyarakat terhadap fungsi dan efek dari media penyiaran. Tujuannya agar dunia penyiaran bisa mengoptimalkan fungsi penyiaran untuk membangun masyarakat dan meminimalisir efek negative HOAX (ujaran kebencian, radikalisme, berita bohong dan lain sebagainya) dari media dan penyiaran.\n\n3. Membangun Kerjasama dengan Masyarakat, Lembaga Penyiaran dan Pemerintah KPID Kalteng membangun kerjasama dengan lembaga0lembaga melalui nota kesepahaman (MoU) lembaga-lembaga yang telah bekerjsama adalah :\na. KPUD Provinsi Kalimantan Tengah;\nb. Bawaslu Provinsi Kalimantan Tengah;\nc. Kepolisian Daerah Provinsi Kalimantan Tengah;\nd. Dinas Pendidikan Provinsi Kalimantan Tengah;\ne. Dinas Pemberdayaan Perempuan, Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana Provinsi Provinsi Kalimantan Tengah;\nf. Kantor Wilayah Kementerian Agama Provinsi Kalimantan Tengah;\ng. Dewan Adat Dayak Provinsi Kalimantan Tengah;\nh. Forum Kerukunan Umat Beragama Provinsi Kalimantan Tengah;\ni. Majelis Ulama Indonesia Provinsi Kalimantan Tengah;\nj. Perguruan Tinggi yang ada di Kota Palangka Raya;\n\n4. Pengawasan Isi siaran\nKPID Kalteng mengawasi isi siaran seluruh lembaga penyiaran Radio dan Televisi secara langsung dan menindaklanjuti pengaduan masyarakat melalui call center, sms, whatsapp, surat atau email.\n\nAdapun untuk pengaduan, dapat disampaikan kepada kami melalui surat resmi, tujuan Kantor KPID Kalteng; Jl. Tjilik Riwut No. 02, Telp. 0536-3242805, Palangka Raya 73112 Provinsi Kalimantan Tengah. Bisa juga melalui SMS/WhatsApp ke nomor 0811522909, atau melalui Email: kpidkalteng7.1@gmail.com.\\\\n');
/*!40000 ALTER TABLE `profil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profiles`
--

DROP TABLE IF EXISTS `profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profiles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `jabatan` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `foto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `history` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `instagram` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `facebook` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `twitter` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `youtube` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profiles`
--

LOCK TABLES `profiles` WRITE;
/*!40000 ALTER TABLE `profiles` DISABLE KEYS */;
INSERT INTO `profiles` VALUES (12,'Deden Agustiar Sabran','Ketua Umum','image_picker806533754-1672472551071.jpg',' ','https://www.instagram.com/dedenagustiarr/?hl=en','','',''),(13,'Chandra Ardinata','Sekretaris Umum','image_picker1132743004-1672472591923.jpg',' ','https://www.instagram.com/chandraardinata/?hl=en','','',''),(17,'Chris Philip Alesandro','Bendahara Umum','image_picker1488178955-1672472615083.jpg','\"Selalu ada HARAPAN bagi mereka yang mau mencoba\"','https://www.instagram.com/chrisphilipalessandro/?hl=en','https://www.facebook.com/people/Chris-Philip-Alessandro/100078890947565/','https://twitter.com/chrisphilip1992','');
/*!40000 ALTER TABLE `profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reply_pengaduan`
--

DROP TABLE IF EXISTS `reply_pengaduan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reply_pengaduan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `reply` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pengaduan` int NOT NULL,
  `input_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `pengaduan` (`pengaduan`),
  CONSTRAINT `reply_pengaduan_ibfk_1` FOREIGN KEY (`pengaduan`) REFERENCES `pengaduan` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reply_pengaduan`
--

LOCK TABLES `reply_pengaduan` WRITE;
/*!40000 ALTER TABLE `reply_pengaduan` DISABLE KEYS */;
INSERT INTO `reply_pengaduan` VALUES (5,'Chandra','chandra@gmail.com','Semoga nnti bisa di percepat ya',1,'2022-09-18 14:51:42'),(7,'Admin','admin@gmail.com','Nanti akan kami perbaiki secepatnya',1,'2022-09-18 15:16:10');
/*!40000 ALTER TABLE `reply_pengaduan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `umkm`
--

DROP TABLE IF EXISTS `umkm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `umkm` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(225) NOT NULL,
  `nama` varchar(225) NOT NULL,
  `channel` varchar(255) NOT NULL,
  `deskripsi` text NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `instagram` varchar(255) NOT NULL,
  `facebook` varchar(255) NOT NULL,
  `youtube` varchar(255) NOT NULL,
  `google_maps` varchar(255) NOT NULL,
  `owner_name` varchar(255) NOT NULL,
  `owner_image` varchar(255) NOT NULL,
  `twitter` varchar(255) NOT NULL,
  `qr_code` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `umkm`
--

LOCK TABLES `umkm` WRITE;
/*!40000 ALTER TABLE `umkm` DISABLE KEYS */;
INSERT INTO `umkm` VALUES (1,'life_style','EIGHT POINT STORE','PT. DAYAK MEDIA TELEVISI','Semakin berkembangnya jaman kebutuhan akan fashionpun kian meningkat, Eight Point Store  merupakan satu-satunya authorized dealer resmi untuk beberapa brand clothing local. Menjual produk pakaian yang ekslusif dan selalu up to the cocok untuk selera remaja. Buka setiap hari dari pukul 09.00 - 21.00 WIB, harga mulai dari Rp. 50.000 hingga Rp. 800.000 kalian udah bisa belanja disini dan dapatkan produk fashion yang kalian butuhkan.','Jl. Sisingamangaraja Induk, Kelurahan Menteng, Kecamatan Jekan Raya','https://www.instagram.com/eightpointstore/','https://web.facebook.com/eightpointstore-102305108021705','','https://goo.gl/maps/P5dzqaQFDXhhpY5q9','photoLogo1.png','213412download.jpg','',''),(2,'digital','VINTAGE','Visi Media Asia','Berawal dari keresahan kurangnya spot foto di Palanga Raya, VINTAGE memberikan hal yang baru dengan membuka studio foto dengan konsep suasana klasik. Buka setiap Hari dari pukul 08.00-20.00 WIB untuk harga mulai dari Rp. 200.000 Kalian bisa datang untuk photoshoot personal, prawedding atau rame-rame bersama teman dan keluarga. Abadikan momen bahagiamu bersama VINTAGE studio. Info selengkapnya follow aja Instagram @vintagepky','Jl. Rajawali V No 12','https://www.instagram.com/vintagepky/','','','https://www.google.com/maps/place/Hotel+Triana/@-2.1894811,113.888971,17z/data=!3m1!4b1!4m8!3m7!1s0x2dfcb3c6a62bb283:0x8866b6b2a0da266!5m2!4m1!1i2!8m2!3d-2.1894614!4d113.891184','photoLogo2.png','213412download.jpg','',''),(84,'f&b','MAN A KOPI','','Tempat ngopi yang minimalis satu ini punya kopi andelannya kopi susu skuy, dan klepon latte wajib kalian coba. Ngga cuma minuman Mana Kopi juga menyediakan chicken katsu, cireng, hingga tela-tela. Buka setiap hari dari pukul 10.00-22.00 WIB, harga mulai Rp. 15.000 jangan lupa mampir kesini ya. Jangan lupa follow instagramnya @manakopi','Jl. Putri Junjung Buih','https://www.instagram.com/manakopiii/','','','https://goo.gl/maps/jrEqbR338d1bGHn96','riki','213412download.jpg','',''),(85,'digital','LUNUK RAMBA PRODUCTION','','LUNUK RAMBA PRODUCTION menerima jasa pembuatan berbagai alat musik tradisional kalimantan. LUNUK RAMBA PRODUCTION ingin melestarikan serta mengembangkan alat musik dan properti/furniture khas Kalimantan diantaranya Alat musik : Kecapi, Rebab , Gong , Kenong , Gendang , Beduk dan untuk Properti atau furniture : Gerbang sakepeng, talawang,mandau kayu. Buka dari Senin - Jumat pukul 08.00 s.d 17.00 WIB. Untuk harga tergantung alat/furniture yang dipesan, mulai dari Rp. 150.000 untuk Properti Tari ( Giring-giring) hingga Rp. 6.500.000 (Gerbang Sakepeng). Info selengkapnya follow aja Instagram @lunukramba_production','Jln Delly Bangkan , Gg Lunuk Ramba No 1','https://www.instagram.com/lunukramba_production/','','','https://goo.gl/maps/YeTetSUBK22peM7u9','adit','213412download.jpg','',''),(86,'culture&art','DM PHOTOSTUDIO','','Buat foto terbaik untuk setiap momen berharga dalam hidup Anda bersama DM PHOTOSTUDIO. Debby Motret atau yang dikenal dengan DM photostudio memebrikan layanan jasa fotografi & videography terbaik dikelasnya. Buka setiap hari dari pukul 08.00-20.00 WIB. Untuk harga mulai dari Rp. 300.000 s/d Rp. Rp. 13.000.000 tergantung jasa layanan yang diberikan. Studiophotonya juga keren rasakan sensasi yang nyaman dengan suasana yang sangat menyenangkan untuk foto sendiri maupun bareng pasangan, teman dan keluarga. Kepoin aja Instagramnya @dm_studiophoto','JL. KERINCI BELAKANG TRUBUS CAKE','https://www.instagram.com/dm_studiophoto/','','','https://goo.gl/maps/2EgupFCgaFb4vhRW6','agus','213412download.jpg','',''),(87,'f&b','PONDOK MAKAN BOGA RASA INDAH ','','Boga Rasa Indah adalah pondok makan dan kolam pemancingan yang menyediakan berbagai menu ikan bakar. Seperti gurame bakar, patin asam manis, sup udang galah, lengkap dengan aneka menu sayuran yang lezat. Boga Rasa Indah juga melayani kotakan, paket ulang tahun, arisan dan reuni. Tempatnya yang nyaman cocok untuk dijadikan untuk bersantai bersama keluarga tercinta. Buka dari selasa-minggu (senin libur) dari pukul 09.00-20.30 WIB. Jangan lupa follow instagramnya @Bogarasaindah','Jl. G.OBOS VII, Gang 6','https://www.instagram.com/bogarasaindah/','https://web.facebook.com/Pondok-Makan-dan-Kolam-Boga-Rasa-Indah-229663411726658','','https://goo.gl/maps/DNNcRj9eDkgzmWRc7','badrun','213412download.jpg','',''),(88,'life_style','JUNAYRONEY BARBERSHOP','','Konsultasikan style rambutmu dengan barberman di JUNAYRONEY BARBERSHOP , dapatkan potongan rambut yang cocok bnget buat kamu.  Datang dan nikmati berbagai treatment di JUNAYRONEY BARBERSHOP untuk dewasa dan anak-anak. Di JUNAYRONEY BARBERSHOP Ngga cuma melayani potong rambut, tapi juga colouring. Buka setiap hari 7.30-21.30 WIB, Tempatnya full AC dan Potong bayar sesuai umur, Untuk biaya mulai dari Rp. 20.000 s/d Rp. 70.000 tergantung treatment yang diberikan. ','JL. SETH ADJI NO.62','https://www.instagram.com/junayrooney/','','','https://goo.gl/maps/8Ea96N5ETeQNrUNz6','akif','213412download.jpg','',''),(89,'culture&art','TEKSTUR PLK','','Mungkin ini yang disebut hobi yang jadi penghasilan. Tekstur PLK menghasilkan berbagai karyanya dari kegemarannya akan kerajinan kayu dengan berbagai design kekinian yang terlihat natural namun tetap berkualitas seperti gantungan kunci, figura, cobek, pajangan, dan berbagai bentuk wadah yang bisa digunakan untuk keperluan rumah tangga, sekolah/kampus hingga perkantoran. Untuk harga produk mulai Rp.15.000 – Rp.8.000.000. Oya, Tekstur PLK pernah berkompetisi diajang CraftingWood loh. Jadi sudah ngga usah diragukan lagi deh karya-karyanya.','Jl. Nyai Balau No. 50B','https://www.instagram.com/tekstur_tks/','','','https://www.google.com/maps/place/6P9MQWJJ%2BJH/@-2.2184321,113.9292488,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-2.2184375!4d113.9314375','nita','213412download.jpg','',''),(90,'f&b','CERITA IO','','Salah satu tempat nongkrong tapi bukan coffeeshop melainkan TeaShop dengan konsep space working, memiliki spot indoor ac dan outdoor rooftop, yakin bisa membuat kamu nyaman berada disini, selain bisa menikmati minuman yang ada di menu kamu juga bisa meracik atau blend tea sendiri sesuai selera kamu. Yang paling dabest dicerita itu ada tea yg basic nya dari bunga telang dan lemon. Wajib coba mocktail tea yang ada disini juga soalnya beda dari mocktail lainnya. Cerita.io buka setiap hari dari pukul 10.00 – 22.00 WIB. Jangan lupa cerita dan jangan lupa ceritain temanmu disini. ','Jln Bukit Keminting Induk','https://www.instagram.com/cerita.io/','','','https://goo.gl/maps/oT3vxHftYjHJhhdL7','ika','213412download.jpg','',''),(91,'f&b','ROTI PKY','','ROTI PKY menjual berbagai macam roti aneka rasa, rotinya fresh setiap harinya pas banget buat dijadikan menu sarapan ataupun cemilan diantaranya Roti sariwangi, Roti jordan, Roti aoka, Roti gepeng, Roti tawar, Roti sisir mentega, Roti kering gula. Buka setiap hari 08.00-17.00 WIB. Untuk harga mulai dari Rp. 2500 untuk roti sariwangi meses coklat - Rp. 10.000 untuk roti tawar. Kepoin aja instagramnya untuk liat berbagai roti yang ready @rotipky','jl mangga gg belimbing no 07','https://www.instagram.com/rotipky/','','','https://goo.gl/maps/rn6s5h5jP2zopnR27','risa','213412download.jpg','','');
/*!40000 ALTER TABLE `umkm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `umkm_assets`
--

DROP TABLE IF EXISTS `umkm_assets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `umkm_assets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `umkm_id` int NOT NULL,
  `foto` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `partner` (`umkm_id`),
  CONSTRAINT `umkm_assets_ibfk_1` FOREIGN KEY (`umkm_id`) REFERENCES `umkm` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `umkm_assets`
--

LOCK TABLES `umkm_assets` WRITE;
/*!40000 ALTER TABLE `umkm_assets` DISABLE KEYS */;
INSERT INTO `umkm_assets` VALUES (34,84,'2_228018-1672428329640.jpg'),(35,85,'2_545867-1672428354614.jpg'),(36,86,'3_156344-1672428375084.jpg'),(37,87,'2_345741-1672428386662.jpg'),(38,88,'2_212802-1672428400701.jpg'),(39,89,'2_124972-1672428413138.jpg'),(40,90,'5_828397-1672428439369.jpg'),(41,91,'4_725579-1672428452987.jpg'),(42,1,'image_picker1759623113661310104-1672496062808.jpg'),(43,1,'image_picker7938331291752983735-1672496126468.jpg'),(45,1,'image_picker1709203310315725693-1672496140854.jpg'),(46,1,'image_picker2289417291049373043-1672496147441.jpg'),(47,1,'image_picker8394583901353055827-1672496156452.jpg'),(51,2,'image_picker2460060191340607301-1672497377523.jpg'),(54,2,'image_picker3762045833447087842-1672497398539.jpg'),(56,2,'image_picker7128070548794200627-1672497423488.jpg');
/*!40000 ALTER TABLE `umkm_assets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video`
--

DROP TABLE IF EXISTS `video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `video` (
  `id` int NOT NULL AUTO_INCREMENT,
  `judul` varchar(225) NOT NULL,
  `video` varchar(225) NOT NULL,
  `input_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video`
--

LOCK TABLES `video` WRITE;
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
INSERT INTO `video` VALUES (1,'ILM KPID Kalteng | UCI MTB Eliminator World Cup 2022','https://www.youtube.com/watch?v=Mhh2uDPV2QA','2022-08-26 15:01:57'),(2,'Anugerah Penyiaran Ramah Anak 2022 | Bangga Budaya Cinta Indonesia | Media Center KPI Pusat','https://www.youtube.com/watch?v=TBhspwFo108','2022-08-26 15:58:51');
/*!40000 ALTER TABLE `video` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-02  7:51:44
