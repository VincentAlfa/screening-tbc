import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { kecamatanKelurahan } from '@/data/location';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const screeningFormSchema = z.object({
  nama_lengkap: z.string().min(1, 'Nama lengkap harus diisi'),
  usia: z
    .number({
      required_error: 'Usia harus diisi',
      invalid_type_error: 'Usia harus berupa angka',
    })
    .min(1, 'Usia tidak boleh negatif')
    .int('Usia harus berupa bilangan bulat'),
  jenis_kelamin: z.enum(['Pria', 'Wanita']),
  kecamatan: z
    .string({ required_error: 'Kecamatan harus dipilih' })
    .min(1, 'Kecamatan harus dipilih'),
  kelurahan: z
    .string({ required_error: 'Kelurahan harus dipilih' })
    .min(1, 'Kelurahan harus dipilih'),
  jalan: z.string().min(1, 'Alamat jalan harus diisi'),
  no_rumah: z.string().min(1, 'Nomor rumah harus diisi'),
  rt: z.string().min(1, 'RT harus diisi'),
  rw: z.string().min(1, 'RW harus diisi'),
  no_handphone: z.string().min(1, 'Nomor handphone harus diisi'),
  layanan_kesehatan: z.string().min(1, 'Layanan kesehatan harus dipilih'),

  batuk_dua_minggu: z.enum(['Ya', 'Tidak']),
  berat_badan_turun: z.enum(['Ya', 'Tidak']),
  berkeringat_malam: z.enum(['Ya', 'Tidak']),
  demam_panas: z.enum(['Ya', 'Tidak']),
  pembesaran_kelenjar: z.enum(['Ya', 'Tidak']),
  merasa_lemah: z.enum(['Ya', 'Tidak']),
  diabetes: z.enum(['Ya', 'Tidak']),
  gagal_ginjal: z.enum(['Ya', 'Tidak']),
  berobat_tb_tidak_tuntas: z.enum(['Ya', 'Tidak']),
  tinggal_dengan_penderita_tb: z.enum(['Ya', 'Tidak']),
});

type ScreeningFormValues = z.infer<typeof screeningFormSchema>;

const layananKesehatanOptions = [
  'Puskesmas',
  'Klinik',
  'Rumah Sakit',
  'Praktek Dokter',
  'Lainnya',
];

export default function ScreeningForm() {
  const [kelurahans, setKelurahans] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ScreeningFormValues>({
    mode: 'onChange',
    resolver: zodResolver(screeningFormSchema),
  });

  const selectedKecamatan = watch('kecamatan');

  useEffect(() => {
    if (selectedKecamatan) {
      setKelurahans(kecamatanKelurahan[selectedKecamatan] || []);
      setValue('kelurahan', '');
    }
  }, [selectedKecamatan, setValue]);

  const onSubmit = (data: ScreeningFormValues) => {
    console.log(data);
    alert('Form submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
      <div>
        <h2 className='mb-4 text-lg font-semibold'>Identitas Diri</h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div>
            <Label className='mb-1 block text-sm'>Nama Lengkap</Label>
            <Input {...register('nama_lengkap')} />
            {errors.nama_lengkap && (
              <p className='mt-1 text-xs text-red-500'>
                {errors.nama_lengkap.message}
              </p>
            )}
          </div>

          <div>
            <Label className='mb-1 block text-sm'>No. Handphone</Label>
            <Input {...register('no_handphone')} placeholder='+628XXXXXXXXXX' />
            {errors.no_handphone && (
              <p className='mt-1 text-xs text-red-500'>
                {errors.no_handphone.message}
              </p>
            )}
          </div>

          <div>
            <Label className='mb-1 block text-sm'>Usia</Label>
            <Input {...register('usia')} type='number' />
            {errors.usia && (
              <p className='mt-1 text-xs text-red-500'>{errors.usia.message}</p>
            )}
          </div>
          <div>
            <Label className='mb-2 block text-sm'>Jenis Kelamin</Label>
            <RadioGroup
              onValueChange={(value) =>
                setValue('jenis_kelamin', value as 'Pria' | 'Wanita')
              }
              className='flex gap-4'
            >
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='Pria' id='pria' />
                <Label htmlFor='pria'>Pria</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='Wanita' id='wanita' />
                <Label htmlFor='wanita'>Wanita</Label>
              </div>
            </RadioGroup>
            {errors.jenis_kelamin && (
              <p className='mt-1 text-xs text-red-500'>
                Jenis Kelamin harus diisi
              </p>
            )}
          </div>

          <div className='w-full'>
            <Label className='mb-1 block text-sm'>
              Layanan Kesehatan/Puskesmas
            </Label>
            <Select
              onValueChange={(value) => setValue('layanan_kesehatan', value)}
              value={watch('layanan_kesehatan') || undefined}
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Pilih Layanan...' />
              </SelectTrigger>
              <SelectContent>
                {layananKesehatanOptions.map((layanan) => (
                  <SelectItem key={layanan} value={layanan}>
                    {layanan}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.layanan_kesehatan && (
              <p className='mt-1 text-xs text-red-500'>
                Layanan kesehatan harus dipilih
              </p>
            )}
          </div>
        </div>

        <h3 className='text-md mt-4 mb-2 font-medium'>Alamat Domisili</h3>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div>
            <Label className='mb-1 block text-sm'>Kecamatan</Label>
            <Select
              onValueChange={(value) => setValue('kecamatan', value)}
              value={watch('kecamatan') || undefined}
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Pilih Kecamatan...' />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(kecamatanKelurahan).map((kecamatan) => (
                  <SelectItem key={kecamatan} value={kecamatan}>
                    {kecamatan}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.kecamatan && (
              <p className='mt-1 text-xs text-red-500'>
                {errors.kecamatan.message}
              </p>
            )}
          </div>

          <div>
            <Label className='mb-1 block text-sm'>Kelurahan</Label>
            <Select
              onValueChange={(value) => setValue('kelurahan', value)}
              value={watch('kelurahan') || undefined}
              disabled={!selectedKecamatan}
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Pilih Kelurahan...' />
              </SelectTrigger>
              <SelectContent>
                {kelurahans.map((kelurahan) => (
                  <SelectItem key={kelurahan} value={kelurahan}>
                    {kelurahan}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.kelurahan && (
              <p className='mt-1 text-xs text-red-500'>
                {errors.kelurahan.message}
              </p>
            )}
          </div>

          <div>
            <Label className='mb-1 block text-sm'>Jalan</Label>
            <Input {...register('jalan')} />
            {errors.jalan && (
              <p className='mt-1 text-xs text-red-500'>
                {errors.jalan.message}
              </p>
            )}
          </div>

          <div className='grid grid-cols-3 gap-2'>
            <div>
              <Label className='mb-1 block text-sm'>No. Rumah</Label>
              <Input {...register('no_rumah')} />
              {errors.no_rumah && (
                <p className='mt-1 text-xs text-red-500'>
                  {errors.no_rumah.message}
                </p>
              )}
            </div>
            <div>
              <Label className='mb-1 block text-sm'>RT</Label>
              <Input {...register('rt')} />
              {errors.rt && (
                <p className='mt-1 text-xs text-red-500'>{errors.rt.message}</p>
              )}
            </div>
            <div>
              <Label className='mb-1 block text-sm'>RW</Label>
              <Input {...register('rw')} />
              {errors.rw && (
                <p className='mt-1 text-xs text-red-500'>{errors.rw.message}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className='mb-4 text-lg font-semibold'>Riwayat Kesehatan</h2>
        <div className='grid grid-cols-2 space-y-3'>
          <div className='flex flex-col'>
            <div className='col-span-3'>{'Mengalami Batuk > 2 minggu'}</div>
            <div className='col-span-2'>
              <RadioGroup
                onValueChange={(value) =>
                  setValue('batuk_dua_minggu', value as 'Ya' | 'Tidak')
                }
                className='flex justify-start gap-8'
              >
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='Ya' id='batuk-ya' />
                  <Label htmlFor='batuk-ya'>Ya</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='Tidak' id='batuk-tidak' />
                  <Label htmlFor='batuk-tidak'>Tidak</Label>
                </div>
              </RadioGroup>
              {errors.batuk_dua_minggu && (
                <p className='mt-1 text-xs text-red-500'>Pilihan harus diisi</p>
              )}
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='col-span-3'>Berat badan turun tidak menentu</div>
            <div className='col-span-2'>
              <RadioGroup
                onValueChange={(value) =>
                  setValue('berat_badan_turun', value as 'Ya' | 'Tidak')
                }
                className='flex justify-start gap-8'
              >
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='Ya' id='berat-ya' />
                  <Label htmlFor='berat-ya'>Ya</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='Tidak' id='berat-tidak' />
                  <Label htmlFor='berat-tidak'>Tidak</Label>
                </div>
              </RadioGroup>
              {errors.berat_badan_turun && (
                <p className='mt-1 text-xs text-red-500'>Pilihan harus diisi</p>
              )}
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='col-span-3'>
              Sering berkeringat malam tanpa kegiatan
            </div>
            <div className='col-span-2'>
              <RadioGroup
                onValueChange={(value) =>
                  setValue('berkeringat_malam', value as 'Ya' | 'Tidak')
                }
                className='flex justify-start gap-8'
              >
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='Ya' id='keringat-ya' />
                  <Label htmlFor='keringat-ya'>Ya</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='Tidak' id='keringat-tidak' />
                  <Label htmlFor='keringat-tidak'>Tidak</Label>
                </div>
              </RadioGroup>
              {errors.berkeringat_malam && (
                <p className='mt-1 text-xs text-red-500'>Pilihan harus diisi</p>
              )}
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='col-span-3'>
              Sering demam/panas tinggi tanpa sebab
            </div>
            <div className='col-span-2'>
              <RadioGroup
                onValueChange={(value) =>
                  setValue('demam_panas', value as 'Ya' | 'Tidak')
                }
                className='flex justify-start gap-8'
              >
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='Ya' id='demam-ya' />
                  <Label htmlFor='demam-ya'>Ya</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='Tidak' id='demam-tidak' />
                  <Label htmlFor='demam-tidak'>Tidak</Label>
                </div>
              </RadioGroup>
              {errors.demam_panas && (
                <p className='mt-1 text-xs text-red-500'>Pilihan harus diisi</p>
              )}
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='col-span-3'>
              Mudah pembesaran kelenjar getah bening
            </div>
            <div className='col-span-2'>
              <RadioGroup
                onValueChange={(value) =>
                  setValue('pembesaran_kelenjar', value as 'Ya' | 'Tidak')
                }
                className='flex justify-start gap-8'
              >
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='Ya' id='kelenjar-ya' />
                  <Label htmlFor='kelenjar-ya'>Ya</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='Tidak' id='kelenjar-tidak' />
                  <Label htmlFor='kelenjar-tidak'>Tidak</Label>
                </div>
              </RadioGroup>
              {errors.pembesaran_kelenjar && (
                <p className='mt-1 text-xs text-red-500'>Pilihan harus diisi</p>
              )}
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='col-span-3'>
              Merasa lemah/malaise (tidak enak badan)
            </div>
            <div className='col-span-2'>
              <RadioGroup
                onValueChange={(value) =>
                  setValue('merasa_lemah', value as 'Ya' | 'Tidak')
                }
                className='flex justify-start gap-8'
              >
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='Ya' id='lemah-ya' />
                  <Label htmlFor='lemah-ya'>Ya</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='Tidak' id='lemah-tidak' />
                  <Label htmlFor='lemah-tidak'>Tidak</Label>
                </div>
              </RadioGroup>
              {errors.merasa_lemah && (
                <p className='mt-1 text-xs text-red-500'>Pilihan harus diisi</p>
              )}
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='col-span-3'>Diabetes mellitus/kencing manis</div>
            <div className='col-span-2'>
              <RadioGroup
                onValueChange={(value) =>
                  setValue('diabetes', value as 'Ya' | 'Tidak')
                }
                className='flex justify-start gap-8'
              >
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='Ya' id='diabetes-ya' />
                  <Label htmlFor='diabetes-ya'>Ya</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='Tidak' id='diabetes-tidak' />
                  <Label htmlFor='diabetes-tidak'>Tidak</Label>
                </div>
              </RadioGroup>
              {errors.diabetes && (
                <p className='mt-1 text-xs text-red-500'>Pilihan harus diisi</p>
              )}
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='col-span-3'>Gagal ginjal/HIV</div>
            <div className='col-span-2'>
              <RadioGroup
                onValueChange={(value) =>
                  setValue('gagal_ginjal', value as 'Ya' | 'Tidak')
                }
                className='flex justify-start gap-8'
              >
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='Ya' id='ginjal-ya' />
                  <Label htmlFor='ginjal-ya'>Ya</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='Tidak' id='ginjal-tidak' />
                  <Label htmlFor='ginjal-tidak'>Tidak</Label>
                </div>
              </RadioGroup>
              {errors.gagal_ginjal && (
                <p className='mt-1 text-xs text-red-500'>Pilihan harus diisi</p>
              )}
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='col-span-3'>
              Pernah berobat TB tetapi tidak tuntas
            </div>
            <div className='col-span-2'>
              <RadioGroup
                onValueChange={(value) =>
                  setValue('berobat_tb_tidak_tuntas', value as 'Ya' | 'Tidak')
                }
                className='flex justify-start gap-8'
              >
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='Ya' id='berobat-ya' />
                  <Label htmlFor='berobat-ya'>Ya</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='Tidak' id='berobat-tidak' />
                  <Label htmlFor='berobat-tidak'>Tidak</Label>
                </div>
              </RadioGroup>
              {errors.berobat_tb_tidak_tuntas && (
                <p className='mt-1 text-xs text-red-500'>Pilihan harus diisi</p>
              )}
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='col-span-3'>
              Pernah tinggal satu rumah dengan penderita TB
            </div>
            <div className='col-span-2'>
              <RadioGroup
                onValueChange={(value) =>
                  setValue(
                    'tinggal_dengan_penderita_tb',
                    value as 'Ya' | 'Tidak',
                  )
                }
                className='flex justify-start gap-8'
              >
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='Ya' id='tinggal-ya' />
                  <Label htmlFor='tinggal-ya'>Ya</Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='Tidak' id='tinggal-tidak' />
                  <Label htmlFor='tinggal-tidak'>Tidak</Label>
                </div>
              </RadioGroup>
              {errors.tinggal_dengan_penderita_tb && (
                <p className='mt-1 text-xs text-red-500'>Pilihan harus diisi</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <Button type='submit' className='bg-black px-12 text-white'>
          Kirim
        </Button>
      </div>
    </form>
  );
}
