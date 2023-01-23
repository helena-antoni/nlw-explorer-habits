

const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)

const data = {
    run:["01-01", "01-02", "01-06", "01-07", "01-08", "01-09", "01-10"], 
    takePills:["01-01", "01-03"],
    journal: ["01-02"]
}

nlwSetup.setData(data)
nlwSetup.load();