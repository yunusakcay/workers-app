import Card from "../UI/Card"

function WorkerList(props) {
    const { workers, setWorkers } = props;

    if (workers.length < 1) {
        return;
    }

    const deleteWorker = (id) => {
        setWorkers(workers.filter((item) => item.id !== id))
    }

    const totalWage = workers.reduce((total, worker) => total + parseFloat(worker.wage || 0), 0);

    return (
        <Card className={"mt-10"}>
            <ul>
                <li className="grid grid-cols-5 p-2">
                    <span className="font-bold col-span-2">İsim</span>
                    <span className="font-bold col-span-2">Görev Ünvanı</span>
                    <span className="font-bold">Maaş</span>
                </li>
                {workers.map((worker) => (
                    <li className="grid grid-cols-5 cursor-pointer hover:shadow-lg transition-shadow p-2"
                        key={worker.id}
                        onClick={() => deleteWorker(worker.id)}
                    >
                        <span className="col-span-2">{worker.name}</span>
                        <span className="col-span-2">{worker.job}</span>
                        <span className="text-rose-700 font-medium">{worker.wage} ₺</span>
                    </li>))}
                <li className="grid grid-cols-5 p-2 font-bold bg-gray-100 mt-4">
                    <span className="col-span-4 text-left">Toplam Maaş Ödemesi :</span>
                    <span className="text-rose-700 font-medium">{totalWage} ₺</span>
                </li>
            </ul>
        </Card>
    )
}

export default WorkerList