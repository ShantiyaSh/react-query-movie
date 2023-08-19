import {
  Typography,
} from "@material-tailwind/react";
import { Layout } from "../component/Layout";

const ContactUs = () => {
  return (
    <Layout>
      <div className="w-full flex justify-center p-4 min-h-screen h-full" >
        <div className="max-w-screen-xl p-5 mt-12">
            <Typography variant="h1">Contact us</Typography>
            <Typography variant="lead">
              We value your feedback, inquiries, and suggestions. Feel free to
              get in touch with us using the information below:
            </Typography>
            <Typography variant="h4">Address:</Typography>
            <Typography variant="lead">
              123 Example Street , Cityville, State, Country - 12345
            </Typography>
            <Typography variant="h4">Phone:</Typography>
            <Typography variant="lead">(123) 456-7890</Typography>
            <Typography variant="h4">Email:</Typography>
            <Typography variant="lead">info@example.com</Typography>
            <Typography>
              Our dedicated team is here to assist you. Whether you have
              questions about our products, services, or just want to drop us a
              line, we're here to help. Please don't hesitate to reach out using
              any of the provided contact methods, and we'll get back to you as
              soon as possible. You can also use the contact form on this page
              to send us a message directly. Simply fill in your details along
              with your message, and we'll be in touch shortly. Thank you for
              considering us, and we look forward to hearing from you! Best
              regards, The ShantiyaSh
            </Typography>
        </div>
      </div>
    </Layout>
  );
};
export default ContactUs;
