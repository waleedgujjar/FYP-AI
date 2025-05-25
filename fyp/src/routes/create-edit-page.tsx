import { FormMockInterview } from "@/components/form-mock-interview";
import { db } from "@/config/firebase.config";
import type { Interview } from "@/types";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const CreateEditPage = () => {
    const {interviewId} = useParams<{interviewId: string}>();
    const [interview, setInterview] = useState<Interview | null>(null);

    useEffect(() => {
          const fetechInterview = async () => {
            if(interviewId){
                try {
                    const interviewDoc = await getDoc(doc(db,"interviews",interviewId));
                if(interviewDoc.exists()){
                    const data = interviewDoc.data();
                    if (data && typeof data === "object") {
                        setInterview({ ...data } as Interview);
                    } else {
                        setInterview(null);
                    }
                }
                } catch (error) {
                    console.log(error)
                }
            }
        };
        fetechInterview();
    },[interviewId]);
  return (
    <div className="my-4 flex-col w-full">
        <FormMockInterview initialData={interview}/>
    </div>
  )
}

export default CreateEditPage