import Card from "../UI/Card"
import Button from "../UI/Button"
import { useState, Fragment, useRef } from "react"
import ErrorModal from "../UI/ErrorModal";


function AddWorker(props) {

  const [error, setError] = useState("");
  const nameInputRef = useRef();
  const jobInputRef = useRef();
  const wageInputRef = useRef();

  const minimumWage = 17002;

  const addWorkerHandler = (e) => {
    const enteredName = nameInputRef.current.value;
    const enteredJob = jobInputRef.current.value;
    const enteredWage = wageInputRef.current.value;
    e.preventDefault();
    if (nameInputRef.current.value.trim().length === 0) {
      setError({
        title: "İsim Alanı Zorunludur!",
        message: "Lütfen bir isim giriniz."
      });
      return;
    }
    if (jobInputRef.current.value.trim().length === 0) {
      setError({
        title: "Görev Ünvanı Zorunludur!",
        message: "Lütfen bir görev ünvanı giriniz."
      });
      return;
    }
    if (wageInputRef.current.value.trim().length === 0) {
      setError({
        title: "Maaş Alanı Zorunludur!",
        message: "Lütfen maaş alanını doldurunuz."
      });
      return;
    }
    if (+wageInputRef.current.value < minimumWage) {
      setError({
        title: "Hatalı Maaş!",
        message: `Girmiş olduğunuz maaş ${minimumWage} ₺'den yüksek olmalıdır.`
      });
      return;
    }
    props.setWorkers((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        name: enteredName,
        job: enteredJob,
        wage: enteredWage
      }
    ])
    nameInputRef.current.value = "";
    jobInputRef.current.value = "";
    wageInputRef.current.value = "";
  }

  const errorHandler = () => {
    setError(null);
  }

  return (
    <Fragment>
      {error && <ErrorModal onConfirm={errorHandler} error={error} />}
      <Card className="mt-10">
        <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
          <label htmlFor="name" className="font-medium">Çalışan İsmi</label>
          <input className="max-w-[40rem] w-full mx-auto border p-2" type="text" placeholder="Çalışan ismi yazınız" id="name" ref={nameInputRef} />
          <label htmlFor="jobTitle" className="font-medium">Görev Ünvanı</label>
          <input className="max-w-[40rem] w-full mx-auto border p-2" type="text" placeholder="Görev ünvanı giriniz" id="jobTitle" ref={jobInputRef} />
          <label htmlFor="wage" className="font-medium">Maaş Miktarı</label>
          <input className="max-w-[40rem] w-full mx-auto border p-2" type="number" placeholder="Maaş miktarı yazınız" id="wage" ref={wageInputRef} />
          <Button className="mt-2">Ekle</Button>
        </form>
      </Card>
    </Fragment>
  )
}

export default AddWorker