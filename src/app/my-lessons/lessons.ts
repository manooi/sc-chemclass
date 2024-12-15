interface LessonInfo {
    name: string;
    no: number;
    iframeUrl: string,
    description?: LessonDescription;
}

export interface LessonDescription {
    title: string;
    subject: string;
    objectives: string[];
}

export const LESSONS: { [no: string]: LessonInfo } = {
    "1": {
        name: "pH ของสารละลาย",
        no: 1,
        iframeUrl: "https://phet.colorado.edu/sims/html/ph-scale/latest/ph-scale_all.html?locale=th",
        description: {
            title: 'หน่วยการเรียนรู้ที่ 10 กรด-เบส',
            subject: 'เรื่อง pH ของสารละลาย',
            objectives: [
                '1.	อธิบายความสัมพันธ์ระหว่าง pH กับความเข้มข้นของไฮโดรเนียมไอออนได้ (K)',
                '2.	อธิบายความเป็นกรด-เบสของสารละลายเมื่อทราบค่า pH ได้ (K)'
            ],
        }
    },
    "2": {
        name: "การไทเทรตกรด-เบส",
        no: 2,
        iframeUrl: "https://phet.colorado.edu/sims/html/ph-scale/latest/ph-scale_all.html?locale=th",
    },
    "3": {
        name: "ปฏิกิริยารีดอกซ์",
        no: 3,
        iframeUrl: "https://teachchemistry.org/simulations/2021/may/#/",
    }
}