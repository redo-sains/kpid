-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 30, 2022 at 08:04 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hipmi_kalteng`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` varchar(225) NOT NULL,
  `password` varchar(225) NOT NULL,
  `type` varchar(255) NOT NULL,
  `umkm_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`, `type`, `umkm_id`) VALUES
(7, 'admin1', '$2a$10$kdllfLOsKDZJQRmXoQMjou8sbb7qgJkqNuT1nMPbJSoYZs59H0pnm', 'super admin', NULL),
(8, 'partner1', '$2a$10$1CyMrTCi43YqHu1Z5U4IIe5LAA53HhYQtORYCKGuzPA65tTqL.Fl6', 'admin umkm', 1),
(23, 'partner2', '$2a$10$PIC17AJwhD1RrTdX9hDhROrp9ArmKpvtWCmLL1OC9rK.fP8SQUKUC', 'admin umkm', 2);

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `judul` varchar(225) NOT NULL,
  `deskripsi` text NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `input_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`id`, `judul`, `deskripsi`, `gambar`, `input_at`) VALUES
(1, 'Podcast Bareng Kadis Kominfo, Komisioner KPID Kaltim Ajak Masyarakat Tangkal Hoax', 'SAMARINDA – Komisi Penyiaran Indonesia Daerah (KPID) Provinsi Kaltim bersama dengan Diskominfo Kaltim, Gerakan Anti Hoax Kaltim, Forum Jurnalis Perempuan Indonesia (FJPI) Kaltim dan BusamID gelar diskusi bertemakan Hoax pada Sabtu (09/04) bertempat di Kantor Diskominfo Kaltim, Jalan Basuki Rahmat No 41 Ruang WEIK.\nHadir pada kegiatan tersebut Komisioner KPID Kaltim yakni Ketua KPID Kaltim, Irwansyah, Komisioner KPID Kaltim sekaligus Koordinator Bidang Pengawasan Isi Siaran yakni Adji Novita Wida Vantina, Komisioner sekaligus Koordinator Bidang Kelembagaan KPID Kaltim, Dedy Pratama dan Komisioner sekalgus anggota Bidang Kelembagaan KPID Kaltim, Hendro Prasetyo.\n\nDipandu oleh Ketua FJPI Kaltim, Tri Wahyuni, dialog berlangsung interaktif dengan masing-masing narasumber menyampaikan pemahaman serta menekankan fungsi dan peran dalam memberantas hoax atau informasi palsu yang hingga kini masih saja dapat dijumpai baik di media konvensional hingga media baru.\n\nSebagai Lembaga yang menjalankan fungsi Pengawasan Khususnya TV dan Radio, KPID mengajak Lembaga Penyiaran (LP) agar tidak memproduksi hoax dan memaksimalkan verifikasi berita sebelum dipublikasikan.\n\nKomisioner KPID Kaltim pun mengimbau kepada LP untuk terus menjaga kualitas isi siarannya sebab dengan berkualitasnya konten siaran maka masyarakat diharapkan dapat memperoleh manfaat. Pada dialog tersebut KPID menambahkan masyarakat juga harus cerdas dalam memilah dan memilih informasi yang didapat terlebih informasi yang sedang viral, dengan melihat sumber dan kredibilitas lembaga penyiaran atau media yang memberitakan.\n\n“Sebagai Lembaga, KPID Kaltim akan terus mengawal juga mendampingi LP, dan terus berupaya menjaga iklim penyiaran yang baik, serta mengedukasi masyarakat untuk bijak dalam menerima informasi dari media khususnya media penyiaran baik itu dalam sektor ekonomi, politik, pemerintahan, dan sektor lainnya” jelas Adji Novita\n\nDalam kesempatan tersebut Ketua Gerakan Anti Hoax Kaltim, Charles menyampaikan semangat memberantas Hoax tidak boleh luntur, terlebih tidak lama lagi kita akan menghadapi pesta politik dimana momentum tersebut kerap dimanfaatkan okmun penyebar informasi palsu. Disinilah peran seluruh pihak sangat dibutuhkan.\n\n“Seluruh pihak terutama yang berada di ekosistem informasi dan komunikasi harapannya dapat terus mengawal Lembaga Penyiaran dan Media khususnya pada Konten yang diproduksi agar tidak dijumpai lagi hoax. Karena hoax sangat berbahaya, terlebih sebentar lagi kita akan menghadapi Pemilu, sehingga hal ini menjadi perhatian kita bersama” ujar Charles.\n\nSeperti diketahui, saat ini hoax menjadi isu yang terus diperangi oleh seluruh pemangku kepentingan, karena dapat mengganggu keamanan dan ketertiban masyarakat. Pasalnya, hoax kerap berisi kabar yang menyesatkan dan menggiring opini masyarakat terhadap hal tertentu.\n\nsw-rrd/hms-kpid', 'photo1.jpeg', '2022-08-23 08:17:59'),
(3, 'KPID Kaltim terima Konsultasi Izin Penyiaran LPK Radio Kodam Mulawarman', 'SAMARINDA – Jum’at (08/04) Komisi Penyiaran Indonesia Daerah (KPID) Provinsi Kalimantan Timur menerima kunjungan dari Kodam Mulawarman yang berkoordinasi perihal proses permohonan izin bersiaran untuk Lembaga Penyiaran Komunitas (LPK) Radio. Konsultasi tersebut diterima dengan terbuka oleh KPID Provinsi Kaltim, bertempat di Kantor KPID Provinsi Kaltim, Jalan Jendral Sudirman, Kantor Gubernur Kaltim Gedung B Lantai 3.  Rencana pendirian LPK Radio tersebut cukup lama menjadi keinginan bagi Kodam Mulawarman. Radio Komunitas sendiri difungsikan untuk memenuhi kebutuhan hingga kepentingan komunitas, yakni sebagai media informasi dan juga hiburan. KPID Provinsi Kaltim sangat mendukung langkah-langkah yang tengah dilakukan oleh Kodam Mulawarman, dan bersedia mendampingi, serta memberikan masukan dan saran dalam keseluruhan proses perizinan.  Dengan diberlakukannya sistem pelayanan berbasis online pada seluruh aktivitas penyelenggaraan penyiaran bagi para LP, terkadang memang masih memunculkan adanya kendala. Meski demikian, KPID berharap para LP atau masyarakat yang berkeinginan untuk mendirikan izin bersiaran lembaganya, tidak patah semangat dan aktif menggali informasi, sebagai upaya mendapatkan legalitas.  “KPID Kaltim sangat menyambut baik konsultasi oleh Kodam Mulawarman Balikpapan terkait proses permohonan perizinan penyelenggaraan penyiaran yang tengah mereka urus. KPID akan terus mendukung, mendampingi, hingga terbitnya izin bagi Lembaga Penyiaran” jelas Wakil Ketua KPID Kalltim, Ali Yamin Ishak, S.Sos  Di dunia penyiaran, legalitas menjadi hal yang teramat penting, terutama untuk memperoleh nilai kepercayaan dari para pendengar yakni masyarakat.  sw/hms-kpid', 'photo2.jpeg', '2022-08-23 08:18:38'),
(4, 'Usai Dilantik Komisioner KPID Kaltim Silaturahmi Dengan Kadiskominfo Kaltim', 'Usai resmi dilantik oleh Gubernur KPID Kaltim pada Selasa (05/04) , Hari ini Kamis (07/04) 6 dari 7 Komisioner KPID Kaltim yakni Irwansyah, Ali Yamin Ishak, Dedy Pratama, Adji Novita Wida Vantina, Hajaturamsyah, dan Tri Heriyanto bersilaturahmi ke Dinas Komunikasi dan Informatika (Diskominfo) Provinsi Kaltim.  Kunjungan disambut langsung oleh Kepala Diskominfo Provinsi Kaltim, H.M Faisal di kantor Diskominfo Provinsi Kaltim, Jl Basuki Rahmat No 41, Samarinda.  Ucapan Selamat dan Apresiasi diberikan oleh Faisal kepada seluruh Komisioner, dilanjutkan dengan dialog santai terkait dunia Penyiaran di Kalimantan Timur dan terkait fungsi hingga rencana kerja KPID Kaltim sebagai Lembaga yang aktif melaksanakan pengawasan terhadap penyiaran di Bumi Etam.  “Saya amat mengapresiasi KPID Kaltim yang telah gerak cepat, sudah membuat strukturnya, kemudian bersilaturahmi dan berkoordinasi. Sebuah langkah maju, mudah-mudahan kedepannya dapat menjalankan fungsi dan berbagai program kerja yang realistis, tegas, sesuai dengan amanat negara yang telah diberikan kepada KPID, serta terus bersinergi dengan Diskominfo Kaltim.” Ujar Faisal.  Dalam kesempatan tersebut Ketua KPID Kaltim, Irwansyah berterima kasih kepada Kepala Diskominfo Kaltim atas perhatian dan masukan serta saran yang diberikan, kedepannya KPID Kaltim berharap dapat selalu berkoordinasi dan saling dukung dengan Diskominfo Kaltim.  “Kami sangat berterima kasih kepada Diskominfo Kaltim. Dalam melaksanakan tugasnya 1 periode kedepan KPID Kaltim akan terus berkonsultasi dan berkoordinasi tentunya, dengan seluruh pihak termasuk Diskominfo Kaltim, saling mendukung untuk terciptanya harmonisasi dan kemajuan penyiaran” jelas Irwan  sw-rrd/hms-kpid', 'photo3.jpeg', '2022-08-23 08:18:39'),
(5, 'Jaga Kekompakan dan Kerjasama, Komisioner KPID Kaltim Gelar Pertemuan Perdana', 'Kamis (07/04) Sebanyak 28 TAD KPID Kaltim yang terdiri dari TAD Asisten Komisioner, Keuangan, Administrasi, Pemantauan Siaran, dan Humas memadati ruang rapat Tepian 1 Kantor Gubernur Kaltim dalah kegiatan Temu Silaturahmi dengan Komisioner KPID Kaltim Periode tahun 2022-2025.  Dalam pertemuan tersebut hadir 6 dari 7 Komisioner yakni Irwansyah, Ali Yamin Ishak, Dedy Pratama, Adji Novita Wida Vantina, Hajaturamsyah, dan Tri Heriyanto. Kegiatan ini dipimpin langsung oleh Ketua KPID Kaltim, Irwansyah  Mengawali sebuah perjumpaan dan berupaya membangun komitmen untuk bekerjasama, seluruh Komisioner berpesan kepada para TAD untuk menjaga kekompakan dan kualitas kerja di lingkungan kantor KPID Kaltim.  Harapannya, Komisioner beserta seluruh TAD KPID Kaltim mampu mewujudkan target bersama tanpa adanya kecanggungan dalam bekerja kedepan.  “KPID Kaltim sebagai satu kesatuan yang utuh tidak dapat dipisahkan antar satu dengan yang lainnya. KPID ibaratnya bagian tubuh semuanya memiliki peran. Pada kegiatan hari ini ayo kita awal pertemuan di kepengurusan baru. Mari kita Upgrade lagi untuk tahun-tahun kedepan yang lebih baik” tegas Irwansyah.  sw/hms-kpid', 'photo4.jpeg', '2022-08-23 08:18:40');

-- --------------------------------------------------------

--
-- Table structure for table `article_assets`
--

CREATE TABLE `article_assets` (
  `id` int(11) NOT NULL,
  `article` int(11) NOT NULL,
  `foto` varchar(225) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `article_assets`
--

INSERT INTO `article_assets` (`id`, `article`, `foto`) VALUES
(42, 1, 'struktur_organisasi-1663410477706.png'),
(44, 1, 'photo1-1663411238141.jpeg'),
(48, 3, 'scaled_image_picker7394786902566053462-1664455660622.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `nama` varchar(225) NOT NULL,
  `komen` text NOT NULL,
  `rating` double NOT NULL,
  `foto` varchar(225) NOT NULL,
  `input_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `umkm_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id`, `nama`, `komen`, `rating`, `foto`, `input_at`, `umkm_id`) VALUES
(6, 'Chans', 'channel nya sangat edukatif.', 4.5, '', '2022-08-24 07:38:42', 1),
(7, 'Chans', 'channel yang bisa direkomendasikan ke teman-teman.', 2.5, '', '2022-08-24 07:39:34', 2),
(8, 'Chans', 'radio yang cukup baik di dengar.', 2.5, '', '2022-08-24 07:46:37', 3),
(9, 'Chans', 'masih banyak yang perlu di perbaiki dari radio ini.masih banyak yang perlu di perbaiki dari radio ini.masih banyak yang perlu di perbaiki dari radio ini.masih banyak yang perlu di perbaiki dari radio ini.masih banyak yang per', 2.5, '', '2022-08-26 16:48:07', 4),
(45, 'Admin Dayak TV', 'Terima kasih banyak', 5, 'comment1.jpg', '2022-09-20 03:23:12', 1),
(59, 'text', 'text\n', 4.8, '', '2022-10-13 03:05:52', 1),
(60, 'text', 'text\n', 4.8, '', '2022-10-13 03:06:17', 1);

-- --------------------------------------------------------

--
-- Table structure for table `comment_article`
--

CREATE TABLE `comment_article` (
  `id` int(11) NOT NULL,
  `nama` varchar(225) COLLATE utf8mb4_unicode_ci NOT NULL,
  `komen` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` double NOT NULL,
  `foto` varchar(225) COLLATE utf8mb4_unicode_ci NOT NULL,
  `input_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `article` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `comment_article`
--

INSERT INTO `comment_article` (`id`, `nama`, `komen`, `rating`, `foto`, `input_at`, `article`) VALUES
(8, 'diyos alfiksan', 'baru tau saya informasi sepreti ini.', 4, '', '2022-08-27 19:17:43', 1),
(10, 'gilang', 'baru tau saya info ini.', 4, '', '2022-08-27 19:17:29', 4),
(11, 'bagus prasetyo', 'wih jadi begitu ya.', 5, '', '2022-08-27 19:17:13', 5),
(17, 'Chandra', 'Saya coba komen', 5, 'comment1.jpg', '2022-09-24 00:10:59', 3),
(21, 'hhh', 'Yyy', 4, 'image_picker3349146369689267843-1672403738570.jpg', '2022-12-30 12:35:39', 5),
(22, 'ddr', '333', 3, '', '2022-12-30 12:48:16', 5),
(23, 'ddd', 'Dde', 3, '', '2022-12-30 12:49:30', 5),
(24, 'ddg', 'Fdf', 2, '', '2022-12-30 12:49:51', 5),
(27, 'xxff', 'Rddd', 2, '', '2022-12-30 12:56:05', 5),
(28, 'dddddd', 'Gk ada yg bisa diajak jlan yuk hehe selamat malam kmi panitia PKKMB UPR 2021 selamat malam ', 4, 'image_picker7982808955673192303-1672405364460.jpg', '2022-12-30 13:02:44', 5),
(33, 'xxxfff', 'ddgg', 1.5, '', '2022-12-30 13:32:45', 1),
(34, 'gk ada yg ', 'Gk ada yg ', 3.5, 'image_picker4287625079336876336-1672407179524.jpg', '2022-12-30 13:32:59', 1),
(35, 'dddd', 'Tyy', 3, '', '2022-12-30 13:33:10', 1);

-- --------------------------------------------------------

--
-- Table structure for table `lembaga`
--

CREATE TABLE `lembaga` (
  `id` int(11) NOT NULL,
  `nama` varchar(225) COLLATE utf8mb4_unicode_ci NOT NULL,
  `foto` varchar(225) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deskripsi` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `lembaga`
--

INSERT INTO `lembaga` (`id`, `nama`, `foto`, `deskripsi`) VALUES
(1, 'Lembaga Penyiaran Publik', 'scaled_image_picker9001752350951625088-1665626820109.jpg', 'Obrolan Angkring, Alternatif, Ketoprak, Jogja Week End, Video,\r\nGelar Budaya, Koes Plus, Pelangi Desa, Daerah, Membangun,\r\n\r\nDialog Publik, Jelajah Alam, Karaoke on TV, Keroncong, Jalan-Jalan,\r\n\r\nKarang Tumaritis, Pangkur Jenggleng, Konser Jawa, Dunia Anako,\r\n\r\nRuang Keluarga, Wayang Kulit, Cangkriman, Halo Dokter, Campur\r\n\r\nSari dan Taman Sari.'),
(2, 'Lembaga Penyiaran Swasta', 'scaled_image_picker3958269098875080953-1665626828141.jpg', 'Obrolan Angkring, Alternatif, Ketoprak, Jogja Week End, Video Kl p,\r\nGelar Budaya, Koes Plus, Pelangi Desa, Daerah, Membangun,\r\n\r\nDialog Publik, Jelajah Alam, Karaoke on TV, Keroncong, Jalan-Jalan,\r\n\r\nKarang Tumaritis, Pangkur Jenggleng, Konser Jawa, Dunia Anako,\r\n\r\nRuang Keluarga, Wayang Kulit, Cangkriman, Halo Dokter, Campur\r\n\r\nSari dan Taman Sari.'),
(3, 'Lembaga Penyiaran Komunitas', 'scaled_image_picker7785569439204783828-1665626838693.jpg', 'Obrolan Angkring, Alternatif, Ketoprak, Jogja Week End, Video Kl p,\r\nGelar Budaya, Koes Plus, Pelangi Desa, Daerah, Membangun,\r\n\r\nDialog Publik, Jelajah Alam, Karaoke on TV, Keroncong, Jalan-Jalan,\r\n\r\nKarang Tumaritis, Pangkur Jenggleng, Konser Jawa, Dunia Anako,\r\n\r\nRuang Keluarga, Wayang Kulit, Cangkriman, Halo Dokter, Campur\r\n\r\nSari dan Taman Sari.');

-- --------------------------------------------------------

--
-- Table structure for table `loker`
--

CREATE TABLE `loker` (
  `id` int(11) NOT NULL,
  `judul` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `admin_id` int(11) NOT NULL,
  `create_at` datetime NOT NULL DEFAULT current_timestamp(),
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `loker`
--

INSERT INTO `loker` (`id`, `judul`, `description`, `admin_id`, `create_at`, `image`) VALUES
(1, 'test', 'desc', 7, '2022-12-30 12:10:04', 'image_picker1786062863250945676-1672414111783.jpg'),
(13, 'gk ada yg bisa diajak jlan yuk hehe selamat malam kmi panitia PKKMB UPR ', 'Gk ada yg bisa diajak jlan yuk hehe selamat malam ', 7, '2022-12-30 15:46:03', 'image_picker1740028431492106584-1672415163186.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `partner`
--

CREATE TABLE `partner` (
  `id` int(11) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `channel` varchar(255) DEFAULT NULL,
  `deskripsi` text DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `youtube` varchar(255) DEFAULT NULL,
  `google_maps` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `pengaduan`
--

CREATE TABLE `pengaduan` (
  `id` int(11) NOT NULL,
  `nama` varchar(225) NOT NULL,
  `email` varchar(255) NOT NULL,
  `saran` text NOT NULL,
  `input_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pengaduan`
--

INSERT INTO `pengaduan` (`id`, `nama`, `email`, `saran`, `input_at`) VALUES
(1, 'Redo', 'redo@gmail.com', 'reload aplikasinya terkesan lambat untuk kedepannya semoga bisa lebih cepat.', '2022-08-26 15:18:31'),
(2, 'Chandra Tirta', 'chandra@gmail.com', 'mudahan server nya bisa lebih cepat reload', '2022-08-26 15:44:20'),
(3, 'Kiki', 'kiki@gmail.com', 'aplikasinya terkesan lambat padahal jaringan saya aman. mudahan bisa di perbaiki masalah ini.', '2022-08-27 19:20:02'),
(4, 'Yaya Ariadi', 'yaya@gmail.com', 'ada sedikit bug dibagian home. artikelnya tidak muncul.', '2022-08-27 19:20:02'),
(50, 'virgi', 'virgiawan. sk@gmail.com', 'ada siaran TV ilegal yg menayangkan gambar yg kurang baik bagi anak-anak', '2022-09-08 05:22:54');

-- --------------------------------------------------------

--
-- Table structure for table `profil`
--

CREATE TABLE `profil` (
  `id` int(11) NOT NULL,
  `visi` text NOT NULL,
  `misi` text NOT NULL,
  `struktur_organisasi` varchar(225) NOT NULL,
  `latar_belakang` text NOT NULL,
  `wilayah_kerja` text NOT NULL,
  `program_unggulan` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `profil`
--

INSERT INTO `profil` (`id`, `visi`, `misi`, `struktur_organisasi`, `latar_belakang`, `wilayah_kerja`, `program_unggulan`) VALUES
(1, 'Mewujudkan Penyiaran Sehat berbasis Pelayanan Terintegrasi Secara Elektronik guna Kemajuan, Kemandirian dan Keadilan bagi Kesejahteraan Masyarakat Kalimantan Tengah menuju Kalteng MAKIN BERKAH.', 'Dalam rangka mencapai visi yang telah dicanangkan, KPID Kalteng akan menjalankan beberapa misi, yaitu:\n\n1. Mendorong program siaran/konten siaran yang inspiratif, edukatif, informatif dan bermanfaat bagi kemajuan, keadilan dan kesejahteraan masyarakat.\n\n2. Menciptakan siaran yang sehat dan ekonomi finansial lembaga penyiaran yang sehat.\n\n3. Meningkatkan peran masyarakat dalam dunia penyiaran sebagai kontrol sosial media sehingga terjaga integritas kebangsaan yang utuh dalam bingkai NKRI.\n\n4. Mengimplementasikan nilai “huma betang” sebagai perekat sosial dalam keberagaman siaran dan mengangkat konten lokal/kearifan lokal di Provinsi Kalimantan Tengah.\n\n5. Meningkatkan pelayanan publik berbasis IT dan pengembangan SDM yang profesional.\n\n6. Kawal Proses Analog Switch-Off (ASO) dan Siaran Digital di Kalimantan Tengah.\n\n7. Akuntabel dan transparan dalam penggunaan Anggaran Belanja Hibah KPID Kalteng.', 'scaled_image_picker2329661589150443621-1665626788380.jpg', 'Komisi Penyiaran Indonesia Daerah Kalimantan Tengah (KPID Kalteng) merupakan Lembaga Negara yang lahir berdasarkan Undang-undang No.32 Tahun 2002 tentang Penyiaran dan mengemban amanah untuk mewadahi aspirasi serta mewakili kepentingan masyarakt akan penyiaran.\n\nSecara umum, tugas pokok KPID Kalteng adalah mengatur hal-hal mengenai penyiaran. Secara khusus, tugas/kewajiban KPID KALTENG adalah :\n1. Menjamin masyarakat untuk memperoleh informasi yang layak dan benar sesuai dengan hak asasi manusia.\n\n2. Turut membangun infrastruktur dibidang penyiaran.\n\n3. Turut membangun iklim persaingan yang sehat antar lembaga penyiaran dan industri terkait.\n\n4. Memelihara tatanan informasi nasional yang adil, merata dan seimbang.\n\n5. Menampung, meneliti dan menindaklanjuti aduan, sanggahan, serta kritik dan apresiasi masyarakat terhadap penyelenggaraan penyiaran.\n\n6. Menyusun perencanaan pengembangan sumber daya manusia yang menjamin profesionalitas dibidang penyiaran.\n\n7. Untuk dapat melaksanakan tugas tersebut, secara atributif KPID Kalteng diberikan beberapa kewenangan, yaitu :\na. Menetapkan standar program siaran (SPS);\nb. Menyusun peraturan dan menetapkan pedoman perilaku penyiaran (P3);\nc. Mengawasi pelaksanaan peraturan dan pedoman perilaku penyiaran serta standar program siaran (P3&SPS);\nd. Memberikan sanksi terhadap pelanggaran peraturan dan p3sps;\ne. Melakukan koordinasi dan /atau kerjasama dengan pemerintah, lembaga penyiaran dan masyarakat.\n\nPelaksanaan tugas dan wewenang KPID Kalteng, dalam operasionalisasinya dibagi kedalam 3 (tiga) kelompok kerja yaitu :\n1. Bidang pengelolaan struktur dan sistem penyiaran;\n2. Bidang pengawasan dan isi siaran;\n3. Bidang kelembagaan.\nKetiga bidang tersebut dalam melaksanakan tugasnya dibantu oleh sebuah sekretariat yang dibiayai oleh APBD.\n', 'Wilayah Kerja dan Pelayanan Publik KPID Kalteng di 13 (tiga belas) Kabupaten dan 1 (satu) Kota, antara lain : \n1. Kota Palangka Raya \n2. Kabupaten Pulang Pisau\n3. Kabupaten Kapuas \n4. Kabupaten Murung Raya\n5. Kabupaten Barito Utara \n6. Kabupaten Barito Timur \n7. Kabupaten Barito Selatan\n8. Kabupaten Katingan \n9.Kabupaten Gunung Mas \n10. Kabupaten Kotawaringin Timur\n11. Kabupaten Kotawaringin Barat\n12. Kabupaten Seruyan \n13. Kabupaten Lamandau \n14. Kabupaten Sukamara \n\nLembaga Penyiaran di Kalimantan Tengah berjumlah 15 TV Analog, 21 TV Kabel dan 34 Radio.', '1. Pelayanan Publik\nPelayanan Publik di Bidang Infrastruktur dan Perizinan, serta tata kelola lembaga penyiaran di Kalimantan Tengah.\n\n2. Literasi Media\nProgram ini adalah upaya KPI untuk membentuk masyarakat agar mampu berpikir kritis dan mendorong media sehat. Di dalam program ini KPI bersama pemerintah dan Lembaga-lembaga lain yang bekerjasama dengan KPI, membangun kesadaran masyarakat terhadap fungsi dan efek dari media penyiaran. Tujuannya agar dunia penyiaran bisa mengoptimalkan fungsi penyiaran untuk membangun masyarakat dan meminimalisir efek negative HOAX (ujaran kebencian, radikalisme, berita bohong dan lain sebagainya) dari media dan penyiaran.\n\n3. Membangun Kerjasama dengan Masyarakat, Lembaga Penyiaran dan Pemerintah KPID Kalteng membangun kerjasama dengan lembaga0lembaga melalui nota kesepahaman (MoU) lembaga-lembaga yang telah bekerjsama adalah :\na. KPUD Provinsi Kalimantan Tengah;\nb. Bawaslu Provinsi Kalimantan Tengah;\nc. Kepolisian Daerah Provinsi Kalimantan Tengah;\nd. Dinas Pendidikan Provinsi Kalimantan Tengah;\ne. Dinas Pemberdayaan Perempuan, Perlindungan Anak, Pengendalian Penduduk dan Keluarga Berencana Provinsi Provinsi Kalimantan Tengah;\nf. Kantor Wilayah Kementerian Agama Provinsi Kalimantan Tengah;\ng. Dewan Adat Dayak Provinsi Kalimantan Tengah;\nh. Forum Kerukunan Umat Beragama Provinsi Kalimantan Tengah;\ni. Majelis Ulama Indonesia Provinsi Kalimantan Tengah;\nj. Perguruan Tinggi yang ada di Kota Palangka Raya;\n\n4. Pengawasan Isi siaran\nKPID Kalteng mengawasi isi siaran seluruh lembaga penyiaran Radio dan Televisi secara langsung dan menindaklanjuti pengaduan masyarakat melalui call center, sms, whatsapp, surat atau email.\n\nAdapun untuk pengaduan, dapat disampaikan kepada kami melalui surat resmi, tujuan Kantor KPID Kalteng; Jl. Tjilik Riwut No. 02, Telp. 0536-3242805, Palangka Raya 73112 Provinsi Kalimantan Tengah. Bisa juga melalui SMS/WhatsApp ke nomor 0811522909, atau melalui Email: kpidkalteng7.1@gmail.com.\\\\n');

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `id` int(11) NOT NULL,
  `nama` varchar(225) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jabatan` varchar(225) COLLATE utf8mb4_unicode_ci NOT NULL,
  `foto` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `history` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `instagram` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `facebook` varchar(225) COLLATE utf8mb4_unicode_ci NOT NULL,
  `twitter` varchar(225) COLLATE utf8mb4_unicode_ci NOT NULL,
  `youtube` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`id`, `nama`, `jabatan`, `foto`, `history`, `instagram`, `facebook`, `twitter`, `youtube`) VALUES
(12, 'Ilham Busra HB', 'Ketua KPID Kalteng', '5054722-1661368892993.jpg', 'GENS UNA SUMUS\n\"Kita semua satu keluarga\"\n\nPegang teguh prinsip dalam bekerja : Profesional, Timing Tepat, Loyalitas dan Dedikasi Tinggi', 'https://www.instagram.com/ilham_busrahb/?hl=en', 'https://www.facebook.com/ilhambusra.barahim', '', ''),
(13, 'Chris Philip Allesandro', 'Wakil Ketua KPID Kalteng', '5054722-1661368892993.jpg', 'Bekerja secara #CPA\n\"Cepat - Profesioanal - Amanah\"', 'https://www.instagram.com/chrisphilipalessandro/?hl=en', 'https://www.facebook.com/people/Chris-Philip-Alessandro/100078890947565/', 'https://twitter.com/chrisphilip1992', ''),
(14, 'Nisa Rahimia', 'Koord. Bidang Kelembagaan', '5054722-1661368892993.jpg', '\"JANGAN BOSAN jadi orang BAIK\"', 'https://www.instagram.com/nisa.rahimia/?hl=en', 'https://www.facebook.com/people/Nisa-Rahimia/100063500679666/', 'https://twitter.com/nisarahimia', 'https://www.youtube.com/channel/UC7yo9CcEkUOB_x2IXI9ktwQ'),
(15, 'Henoch Rents Katoppo', 'Anggota Bidang Kelembagaan', '5054722-1661368892993.jpg', '\"BEKERJALAH dengan semangat dan penuh sukacita serta bersykur dengan yang didapatkan\"', 'https://www.instagram.com/henoch_rents/?hl=en', 'https://fr-ca.facebook.com/rents.katoppo.1', '', ''),
(16, 'At Prayer', 'Koord. Bidang PS2P', '5054722-1661368892993.jpg', '\"Salah satu cara untuk melakukan pekerjaan yang HEBAT adalah dengan mencintai apa yang kita lakukan\"', 'https://www.instagram.com/atprayer88/?hl=en', '', 'https://twitter.com/PTingang', ''),
(17, 'Ahmada', 'Anggota Bidang PS2P', '5054722-1661368892993.jpg', '\"Selalu ada HARAPAN bagi mereka yang mau mencoba\"', 'https://www.instagram.com/harapanpalangkaraya/?hl=en', '', '', ''),
(18, 'Eni Artini', 'Koord. Bid. Penagawasn Isi Siaran', '5054722-1661368892993.jpg', '\"PASSION Lead Us Here\"', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `reply_pengaduan`
--

CREATE TABLE `reply_pengaduan` (
  `id` int(11) NOT NULL,
  `nama` varchar(225) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reply` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `pengaduan` int(11) NOT NULL,
  `input_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reply_pengaduan`
--

INSERT INTO `reply_pengaduan` (`id`, `nama`, `email`, `reply`, `pengaduan`, `input_at`) VALUES
(5, 'Chandra', 'chandra@gmail.com', 'Semoga nnti bisa di percepat ya', 1, '2022-09-18 14:51:42'),
(7, 'Admin', 'admin@gmail.com', 'Nanti akan kami perbaiki secepatnya', 1, '2022-09-18 15:16:10');

-- --------------------------------------------------------

--
-- Table structure for table `umkm`
--

CREATE TABLE `umkm` (
  `id` int(11) NOT NULL,
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
  `qr_code` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `umkm`
--

INSERT INTO `umkm` (`id`, `type`, `nama`, `channel`, `deskripsi`, `alamat`, `instagram`, `facebook`, `youtube`, `google_maps`, `owner_name`, `owner_image`, `twitter`, `qr_code`) VALUES
(1, 'life_style', 'EIGHT POINT STORE', 'PT. DAYAK MEDIA TELEVISI', 'Semakin berkembangnya jaman kebutuhan akan fashionpun kian meningkat, Eight Point Store  merupakan satu-satunya authorized dealer resmi untuk beberapa brand clothing local. Menjual produk pakaian yang ekslusif dan selalu up to the cocok untuk selera remaja. Buka setiap hari dari pukul 09.00 - 21.00 WIB, harga mulai dari Rp. 50.000 hingga Rp. 800.000 kalian udah bisa belanja disini dan dapatkan produk fashion yang kalian butuhkan.', 'Jl. Sisingamangaraja Induk, Kelurahan Menteng, Kecamatan Jekan Raya', 'https://www.instagram.com/eightpointstore/', 'https://web.facebook.com/eightpointstore-102305108021705', '', 'https://goo.gl/maps/P5dzqaQFDXhhpY5q9', 'photoLogo1.png', '213412download.jpg', '', ''),
(2, 'digital', 'VINTAGE', 'Visi Media Asia', 'Berawal dari keresahan kurangnya spot foto di Palanga Raya, VINTAGE memberikan hal yang baru dengan membuka studio foto dengan konsep suasana klasik. Buka setiap Hari dari pukul 08.00-20.00 WIB untuk harga mulai dari Rp. 200.000 Kalian bisa datang untuk photoshoot personal, prawedding atau rame-rame bersama teman dan keluarga. Abadikan momen bahagiamu bersama VINTAGE studio. Info selengkapnya follow aja Instagram @vintagepky', 'Jl. Rajawali V No 12', 'https://www.instagram.com/vintagepky/', '', '', 'https://www.google.com/maps/place/Hotel+Triana/@-2.1894811,113.888971,17z/data=!3m1!4b1!4m8!3m7!1s0x2dfcb3c6a62bb283:0x8866b6b2a0da266!5m2!4m1!1i2!8m2!3d-2.1894614!4d113.891184', 'photoLogo2.png', '213412download.jpg', '', ''),
(84, 'f&b', 'MAN A KOPI', '', 'Tempat ngopi yang minimalis satu ini punya kopi andelannya kopi susu skuy, dan klepon latte wajib kalian coba. Ngga cuma minuman Mana Kopi juga menyediakan chicken katsu, cireng, hingga tela-tela. Buka setiap hari dari pukul 10.00-22.00 WIB, harga mulai Rp. 15.000 jangan lupa mampir kesini ya. Jangan lupa follow instagramnya @manakopi', 'Jl. Putri Junjung Buih', 'https://www.instagram.com/manakopiii/', '', '', 'https://goo.gl/maps/jrEqbR338d1bGHn96', 'riki', '213412download.jpg', '', ''),
(85, 'digital', 'LUNUK RAMBA PRODUCTION', '', 'LUNUK RAMBA PRODUCTION menerima jasa pembuatan berbagai alat musik tradisional kalimantan. LUNUK RAMBA PRODUCTION ingin melestarikan serta mengembangkan alat musik dan properti/furniture khas Kalimantan diantaranya Alat musik : Kecapi, Rebab , Gong , Kenong , Gendang , Beduk dan untuk Properti atau furniture : Gerbang sakepeng, talawang,mandau kayu. Buka dari Senin - Jumat pukul 08.00 s.d 17.00 WIB. Untuk harga tergantung alat/furniture yang dipesan, mulai dari Rp. 150.000 untuk Properti Tari ( Giring-giring) hingga Rp. 6.500.000 (Gerbang Sakepeng). Info selengkapnya follow aja Instagram @lunukramba_production', 'Jln Delly Bangkan , Gg Lunuk Ramba No 1', 'https://www.instagram.com/lunukramba_production/', '', '', 'https://goo.gl/maps/YeTetSUBK22peM7u9', 'adit', '213412download.jpg', '', ''),
(86, 'culture&art', 'DM PHOTOSTUDIO', '', 'Buat foto terbaik untuk setiap momen berharga dalam hidup Anda bersama DM PHOTOSTUDIO. Debby Motret atau yang dikenal dengan DM photostudio memebrikan layanan jasa fotografi & videography terbaik dikelasnya. Buka setiap hari dari pukul 08.00-20.00 WIB. Untuk harga mulai dari Rp. 300.000 s/d Rp. Rp. 13.000.000 tergantung jasa layanan yang diberikan. Studiophotonya juga keren rasakan sensasi yang nyaman dengan suasana yang sangat menyenangkan untuk foto sendiri maupun bareng pasangan, teman dan keluarga. Kepoin aja Instagramnya @dm_studiophoto', 'JL. KERINCI BELAKANG TRUBUS CAKE', 'https://www.instagram.com/dm_studiophoto/', '', '', 'https://goo.gl/maps/2EgupFCgaFb4vhRW6', 'agus', '213412download.jpg', '', ''),
(87, 'f&b', 'PONDOK MAKAN BOGA RASA INDAH ', '', 'Boga Rasa Indah adalah pondok makan dan kolam pemancingan yang menyediakan berbagai menu ikan bakar. Seperti gurame bakar, patin asam manis, sup udang galah, lengkap dengan aneka menu sayuran yang lezat. Boga Rasa Indah juga melayani kotakan, paket ulang tahun, arisan dan reuni. Tempatnya yang nyaman cocok untuk dijadikan untuk bersantai bersama keluarga tercinta. Buka dari selasa-minggu (senin libur) dari pukul 09.00-20.30 WIB. Jangan lupa follow instagramnya @Bogarasaindah', 'Jl. G.OBOS VII, Gang 6', 'https://www.instagram.com/bogarasaindah/', 'https://web.facebook.com/Pondok-Makan-dan-Kolam-Boga-Rasa-Indah-229663411726658', '', 'https://goo.gl/maps/DNNcRj9eDkgzmWRc7', 'badrun', '213412download.jpg', '', ''),
(88, 'life_style', 'JUNAYRONEY BARBERSHOP', '', 'Konsultasikan style rambutmu dengan barberman di JUNAYRONEY BARBERSHOP , dapatkan potongan rambut yang cocok bnget buat kamu.  Datang dan nikmati berbagai treatment di JUNAYRONEY BARBERSHOP untuk dewasa dan anak-anak. Di JUNAYRONEY BARBERSHOP Ngga cuma melayani potong rambut, tapi juga colouring. Buka setiap hari 7.30-21.30 WIB, Tempatnya full AC dan Potong bayar sesuai umur, Untuk biaya mulai dari Rp. 20.000 s/d Rp. 70.000 tergantung treatment yang diberikan. ', 'JL. SETH ADJI NO.62', 'https://www.instagram.com/junayrooney/', '', '', 'https://goo.gl/maps/8Ea96N5ETeQNrUNz6', 'akif', '213412download.jpg', '', ''),
(89, 'culture&art', 'TEKSTUR PLK', '', 'Mungkin ini yang disebut hobi yang jadi penghasilan. Tekstur PLK menghasilkan berbagai karyanya dari kegemarannya akan kerajinan kayu dengan berbagai design kekinian yang terlihat natural namun tetap berkualitas seperti gantungan kunci, figura, cobek, pajangan, dan berbagai bentuk wadah yang bisa digunakan untuk keperluan rumah tangga, sekolah/kampus hingga perkantoran. Untuk harga produk mulai Rp.15.000 – Rp.8.000.000. Oya, Tekstur PLK pernah berkompetisi diajang CraftingWood loh. Jadi sudah ngga usah diragukan lagi deh karya-karyanya.', 'Jl. Nyai Balau No. 50B', 'https://www.instagram.com/tekstur_tks/', '', '', 'https://www.google.com/maps/place/6P9MQWJJ%2BJH/@-2.2184321,113.9292488,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-2.2184375!4d113.9314375', 'nita', '213412download.jpg', '', ''),
(90, 'f&b', 'CERITA IO', '', 'Salah satu tempat nongkrong tapi bukan coffeeshop melainkan TeaShop dengan konsep space working, memiliki spot indoor ac dan outdoor rooftop, yakin bisa membuat kamu nyaman berada disini, selain bisa menikmati minuman yang ada di menu kamu juga bisa meracik atau blend tea sendiri sesuai selera kamu. Yang paling dabest dicerita itu ada tea yg basic nya dari bunga telang dan lemon. Wajib coba mocktail tea yang ada disini juga soalnya beda dari mocktail lainnya. Cerita.io buka setiap hari dari pukul 10.00 – 22.00 WIB. Jangan lupa cerita dan jangan lupa ceritain temanmu disini. ', 'Jln Bukit Keminting Induk', 'https://www.instagram.com/cerita.io/', '', '', 'https://goo.gl/maps/oT3vxHftYjHJhhdL7', 'ika', '213412download.jpg', '', ''),
(91, 'f&b', 'ROTI PKY', '', 'ROTI PKY menjual berbagai macam roti aneka rasa, rotinya fresh setiap harinya pas banget buat dijadikan menu sarapan ataupun cemilan diantaranya Roti sariwangi, Roti jordan, Roti aoka, Roti gepeng, Roti tawar, Roti sisir mentega, Roti kering gula. Buka setiap hari 08.00-17.00 WIB. Untuk harga mulai dari Rp. 2500 untuk roti sariwangi meses coklat - Rp. 10.000 untuk roti tawar. Kepoin aja instagramnya untuk liat berbagai roti yang ready @rotipky', 'jl mangga gg belimbing no 07', 'https://www.instagram.com/rotipky/', '', '', 'https://goo.gl/maps/rn6s5h5jP2zopnR27', 'risa', '213412download.jpg', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `umkm_assets`
--

CREATE TABLE `umkm_assets` (
  `id` int(11) NOT NULL,
  `umkm_id` int(11) NOT NULL,
  `foto` varchar(225) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `umkm_assets`
--

INSERT INTO `umkm_assets` (`id`, `umkm_id`, `foto`) VALUES
(9, 1, 'struktur_organisasi-1663408798623.png'),
(27, 1, 'image_picker5552087532337516963-1672407020188.jpg'),
(28, 1, 'image_picker7384586450434245301-1672407027909.jpg'),
(29, 1, 'image_picker3726802682952938170-1672407048217.jpg'),
(30, 1, 'image_picker8809148836083921757-1672407055692.jpg'),
(31, 1, 'image_picker3528001215842161171-1672407113755.jpg'),
(32, 1, 'image_picker7910989654520809689-1672407121213.jpg'),
(33, 2, 'image_picker8869038039292848510-1672418113135.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `video`
--

CREATE TABLE `video` (
  `id` int(11) NOT NULL,
  `judul` varchar(225) NOT NULL,
  `video` varchar(225) NOT NULL,
  `input_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `video`
--

INSERT INTO `video` (`id`, `judul`, `video`, `input_at`) VALUES
(1, 'ILM KPID Kalteng | UCI MTB Eliminator World Cup 2022', 'https://www.youtube.com/watch?v=Mhh2uDPV2QA', '2022-08-26 15:01:57'),
(2, 'Anugerah Penyiaran Ramah Anak 2022 | Bangga Budaya Cinta Indonesia | Media Center KPI Pusat', 'https://www.youtube.com/watch?v=TBhspwFo108', '2022-08-26 15:58:51');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD KEY `partner` (`umkm_id`);

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `article_assets`
--
ALTER TABLE `article_assets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `article` (`article`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comment_article`
--
ALTER TABLE `comment_article`
  ADD PRIMARY KEY (`id`),
  ADD KEY `article` (`article`);

--
-- Indexes for table `lembaga`
--
ALTER TABLE `lembaga`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `loker`
--
ALTER TABLE `loker`
  ADD PRIMARY KEY (`id`),
  ADD KEY `loker_ibfk_1` (`admin_id`);

--
-- Indexes for table `partner`
--
ALTER TABLE `partner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pengaduan`
--
ALTER TABLE `pengaduan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profil`
--
ALTER TABLE `profil`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reply_pengaduan`
--
ALTER TABLE `reply_pengaduan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pengaduan` (`pengaduan`);

--
-- Indexes for table `umkm`
--
ALTER TABLE `umkm`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `umkm_assets`
--
ALTER TABLE `umkm_assets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `partner` (`umkm_id`);

--
-- Indexes for table `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `article_assets`
--
ALTER TABLE `article_assets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `comment_article`
--
ALTER TABLE `comment_article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `lembaga`
--
ALTER TABLE `lembaga`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `loker`
--
ALTER TABLE `loker`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `partner`
--
ALTER TABLE `partner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pengaduan`
--
ALTER TABLE `pengaduan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `profil`
--
ALTER TABLE `profil`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `reply_pengaduan`
--
ALTER TABLE `reply_pengaduan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `umkm`
--
ALTER TABLE `umkm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT for table `umkm_assets`
--
ALTER TABLE `umkm_assets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `video`
--
ALTER TABLE `video`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `adminToUmkm` FOREIGN KEY (`umkm_id`) REFERENCES `umkm` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `article_assets`
--
ALTER TABLE `article_assets`
  ADD CONSTRAINT `article_assets_ibfk_1` FOREIGN KEY (`article`) REFERENCES `article` (`id`);

--
-- Constraints for table `comment_article`
--
ALTER TABLE `comment_article`
  ADD CONSTRAINT `comment_article_ibfk_1` FOREIGN KEY (`article`) REFERENCES `article` (`id`);

--
-- Constraints for table `loker`
--
ALTER TABLE `loker`
  ADD CONSTRAINT `loker_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`);

--
-- Constraints for table `reply_pengaduan`
--
ALTER TABLE `reply_pengaduan`
  ADD CONSTRAINT `reply_pengaduan_ibfk_1` FOREIGN KEY (`pengaduan`) REFERENCES `pengaduan` (`id`);

--
-- Constraints for table `umkm_assets`
--
ALTER TABLE `umkm_assets`
  ADD CONSTRAINT `umkm_assets_ibfk_1` FOREIGN KEY (`umkm_id`) REFERENCES `umkm` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
