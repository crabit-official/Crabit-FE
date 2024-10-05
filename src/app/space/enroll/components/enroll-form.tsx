'use client';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import Input from '@/app/components/ui/input';
import Button from '@/app/components/ui/button';

const EnrollForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      academyName: '',
      academyAddress: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="max-w-5xl flex flex-col gap-y-8 mt-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        id="name"
        label="이름"
        register={register}
        errors={errors}
        required
      />
      <Input
        id="email"
        label="이메일"
        type="email"
        register={register}
        errors={errors}
        required
      />
      <Input
        id="phoneNumber"
        label="대표자 전화번호"
        register={register}
        errors={errors}
        required
      />
      <Input
        id="academyName"
        label="학원 이름"
        register={register}
        errors={errors}
        required
      />
      <Input
        id="academyAddress"
        label="학원 주소"
        register={register}
        errors={errors}
        required
      />
      <Button type="submit" label="학원 등록" />
    </form>
  );
};

export default EnrollForm;
