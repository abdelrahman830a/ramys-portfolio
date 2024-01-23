import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <div id="contact" className="transition duration-300 ease-in-out dark:bg-slate-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-3">
          <h1 className="text-indigo-600 font-bold">Contact</h1>
          <h1 className="transition duration-300 ease-in-out dark:text-white text-3xl">Get in touch with me</h1>
          <p className="transition duration-300 ease-in-out dark:text-gray-300 md:w-1/2 text-center text-gray-500">
            If you have any questions or want to work together, please feel free
            to contact me.
          </p>
        </motion.div>

        <form
          onSubmit={onSubmit}
          action="https://formsubmit.co/4f222ef7b237a9ace757bd7c0aab9588"
          method="POST"
          className="flex flex-col gap-5 items-center justify-self-center mt-5 p-8">
          <motion.input
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="transition duration-300 ease-in-out dark:bg-slate-700 p-2 w-full md:w-1/4 outline-none focus:ring-indigo-500 ring-1 ring-indigo-200 rounded-sm"
            type="text"
            placeholder="Name"
            name="name"
            required
            {...register("name", {
              required: true,
              maxLength: 100,
            })}
          />
          {errors.name && (
            <p className="text-red mt-1">
              {errors.name.type === "required" && "This field is required."}
              {errors.name.type === "maxLength" && "Max length is 100 char."}
            </p>
          )}
          <motion.input
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="transition duration-300 ease-in-out dark:bg-slate-700 p-2 w-full md:w-2/4 outline-none focus:ring-indigo-500 ring-1 ring-indigo-200 rounded-sm"
            type="email"
            placeholder="Email"
            name="email"
            required
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p className="text-red mt-1">
              {errors.email.type === "required" && "This field is required."}
              {errors.email.type === "pattern" && "Invalid email address."}
            </p>
          )}
          <motion.textarea
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="transition duration-300 ease-in-out dark:bg-slate-700 p-2 w-full md:w-2/4 outline-none focus:ring-indigo-500 ring-1 ring-indigo-200 rounded-sm"
            cols="30"
            rows="10"
            placeholder="Message"
            {...register("message", {
              required: true,
              maxLength: 2000,
            })}
          />
          {errors.message && (
            <p className="text-red mt-1">
              {errors.message.type === "required" && "This field is required."}
              {errors.message.type === "maxLength" &&
                "Max length is 2000 char."}
            </p>
          )}
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-md font-bold hover:shadow-lg hover:shadow-indigo-200 transition duration-200 ease-in-out">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
