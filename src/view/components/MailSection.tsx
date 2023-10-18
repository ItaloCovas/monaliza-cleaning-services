import { useState } from 'react';
import { CrossCircledIcon } from '@radix-ui/react-icons';
import emailjs from 'emailjs-com';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { SubmitButton } from './SubmitButton';
import { Input } from './Input';

const schema = z.object({
  name: z.string().min(1, 'Name is required.'),
  phone: z.string().min(1, 'Phone is required.'),
  email: z.string().min(1, 'Email is required').email('Email must be valid.'),
  message: z.string().min(1, 'Message is required.')
});

type FormData = z.infer<typeof schema>;

export function MailSection() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = hookFormSubmit(async (data) => {
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        {
          from_name: data.name,
          to_name: 'Monaliza',
          phone: data.phone,
          message: data.message,
          email: data.email
        },
        import.meta.env.VITE_APP_USER_ID
      );
      setLoading(false);
      reset();
      toast.success('Email successfully sent!');
    } catch (error) {
      setLoading(false);
      toast.error('Error sending email, please try again.');
    }
  });

  return (
    <div className="bg-gray-100 p-20">
      <h1 className="text-center my-8 text-3xl font-bold">
        Send us an contact email!
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          type="email"
          placeholder="Email"
          error={errors.email?.message}
          {...register('email')}
        />
        <Input
          type="text"
          placeholder="Phone"
          error={errors.phone?.message}
          {...register('phone')}
        />

        <textarea
          placeholder="Your message..."
          className="outline-none h-[150px] px-3 pt-4 resize-none focus:border-gray-800 transition-all bg-white w-full rounded-lg border border-gray-500"
          {...register('message')}
        />
        {errors.message?.message && (
          <div className="flex gap-2 items-center mt-2 text-red-500">
            <CrossCircledIcon />
            <span className="text-xs">{errors.message?.message}</span>{' '}
          </div>
        )}

        <SubmitButton
          type="submit"
          isLoading={loading}
          className="mt- bg-blue-0 px-6 h-12 rounded-2xl text-white  font-bold"
        >
          Send Email
        </SubmitButton>
      </form>
    </div>
  );
}
