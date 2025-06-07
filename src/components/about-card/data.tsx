import React from 'react';

type TbcInfoItem = {
  title: string;
  content: React.ReactNode;
};

export const tbcInfoData: TbcInfoItem[] = [
  {
    title: 'Apa itu TBC?',
    content: (
      <p className=''>
        Tuberkulosis (TBC) adalah penyakit menular yang disebabkan oleh bakteri
        Mycobacterium tuberculosis. Penyakit ini menyerang paru-paru dan dapat
        menyebar ke bagian lain. TBC dapat disembuhkan dengan pengobatan yang
        tepat dan teratur.
      </p>
    ),
  },
  {
    title: 'Cara Penularan TBC',
    content: (
      <p className=''>
        TBC menyebar melalui udara ketika penderita batuk, bersin, atau
        berbicara. Namun, tidak semua orang yang terpapar akan langsung sakit.
        Faktor seperti daya tahan tubuh mempengaruhi risiko infeksi.
      </p>
    ),
  },
  {
    title: 'Gejala TBC',
    content: (
      <ul className='list-disc pl-5'>
        <li>Batuk berlangsung lebih dari 2 minggu</li>
        <li>Dahak bercampur darah</li>
        <li>Demam dan berkeringat di malam hari</li>
        <li>Penurunan berat badan tanpa sebab jelas</li>
        <li>Nafsu makan menurun</li>
      </ul>
    ),
  },
  {
    title: 'Mitos yang Salah Tentang TBC',
    content: (
      <div className='flex flex-col gap-2'>
        <h1>
          Banyak orang masih percaya pada hal-hal yang tidak benar tentang TBC,
          seperti:
        </h1>
        <ul className='list-disc pl-5'>
          <li>TBC adalah penyakit kutukan atau guna-guna</li>
          <li>
            TBC hanya menyerang orang miskin atau yang tinggal di daerah kumuh
          </li>
          <li>TBC tidak bisa disembuhkan</li>
          <li>Pasien TBC harus dijauhi karena sangat menular</li>
        </ul>
        <h1>
          Faktanya, TBC adalah penyakit yang disebabkan oleh bakteri dan dapat
          diobati dengan pengobatan yang tepat. TBC bisa disembuhkan.
        </h1>
      </div>
    ),
  },
  {
    title: 'Pengobatan',
    content: (
      <p className=''>
        Pengobatan TBC tersedia gratis di Puskesmas dan rumah sakit pemerintah.
        Pasien harus minum obat setiap hari dalam 6 bulan tanpa henti agar
        bakteri-bakteri sembuh dan mencegah kuman menjadi kebal obat. Jika
        pengobatan dihentikan sebelum waktunya, penyakit bisa kambuh dan lebih
        sulit disembuhkan. Dukungan keluarga sangat membantu menjalani
        pengobatan hingga tuntas sesuai anjuran petugas kesehatan.
      </p>
    ),
  },
];
