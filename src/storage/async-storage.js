import AsyncStorage from "@react-native-async-storage/async-storage";

const key = "task";

const getData = async () => {
    
    let data= JSON.parse(await AsyncStorage.getItem(key))

    // se não houverem dados, preencher e salvar um array vazio
    if (data == null) {
        data = new Array()
        setData(data)
    }
   return data
}

const setData= async (value) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
}

const addData = async (task) => {
    task.id = new Date().getTime()
    const data = await getData()
    data.push(task)
    await setData(data)
}

const removeData = async (task) => {
    const tasks = await getData();

    for (let _task of tasks) {
        if (_task.id == task.id) {
            const index = tasks.indexOf(_task)
            if (index !== -1) {
                tasks.splice(index, 1)
            }
            break
        }
    }
   await setData(tasks)
}

export {
    getData,
    setData,
    addData,
    removeData
}