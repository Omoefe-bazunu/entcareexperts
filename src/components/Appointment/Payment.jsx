import SectionHeads from "../home/SectionHeads";

const Payment = () => {
  return (
    <div className="Payment w-full h-fit py-24 border-t-2 border-zinc-200">
      <div className="PaymentWrap w-5/6 mx-auto flex flex-col justify-center items-center gap-16">
        <SectionHeads text={"Payment"} color={"primary"} />
        <div className=" flex flex-col gap-4 w-full justify-center items-center">
          <p className=" w-[50%] text-center text-tet">
            Click the button below to get redirected to the Admin page on
            WhatsApp to make payment for your Appointment.
          </p>
          <p className=" w-[50%] text-center text-tet">
            Appointment Fee:{" "}
            <span className=" text-primary font-medium">NGN20,000</span>
          </p>
          <a href="https://wa.me/2348138024616">
            <button className="button px-4 mt-8 mb-8 font-bold py-2 text-white uppercase rounded text-xs bg-primary">
              MAKE APPOINTMENT
            </button> 
          </a>
        </div>
      </div>
    </div>
  );
};

export default Payment;
