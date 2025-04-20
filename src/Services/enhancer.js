import axios from "axios";

const api_key = "wx301z13umr3atig4";
const base_url = "https://techhk.aoscdn.com/";

export const enhancedImageAPI = async (file) => {
  try {
    const taskId = await uploadImage(file);
    const enhancedData = await PollEnhancedImage(taskId);
    return enhancedData;
  } catch (error) {
    console.log(error);
  }
};

async function uploadImage(file) {
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(
    `${base_url}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": api_key,
      },
    }
  );
  if(!data?.data?.task_id){
    throw new Error("image not uploaded missing task id");
  }
  else{
    return data.data.task_id;
  }
}

async function fetchEnhancedImage(taskId) {
  const { data } = await axios.get(
    `${base_url}/api/tasks/visual/scale/${taskId}`,
    {
      headers: {
        "X-API-KEY": api_key,
      },
    }
  );
    return data.data;

}

async function PollEnhancedImage(taskId,retries = 0 ){
    const result = await fetchEnhancedImage(taskId);

    if(result.state === 4){
        console.log("processing");

        if(retries >= 20){
            console.log("max limit Reached Try again Later")
        }

        await new Promise((resolve) => setTimeout(resolve,2000));
        return PollEnhancedImage(taskId, retries + 1);
    }
    return result;
}

