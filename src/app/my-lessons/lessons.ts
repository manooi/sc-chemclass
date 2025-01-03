interface LessonInfo {
    name: string;
    no: number;
    iframeUrl: string,
    description?: LessonDescription;
    simulation?: SimulationDescription;
}

export interface LessonDescription {
    titleNo: string;
    title: string;
    subject: string;
    objectives: string[];
}


export interface SimulationDescription {
    situation: string;
    description: string;
    procedures: string[];
    summaries: string[];
}

export const LESSONS: { [no: string]: LessonInfo } = {
    "1": {
        name: "pH ของสารละลาย",
        no: 1,
        iframeUrl: "https://phet.colorado.edu/sims/html/ph-scale/latest/ph-scale_all.html?locale=th",
        description: {
            titleNo: "หน่วยการเรียนรู้ที่ 10",
            title: 'กรด-เบส',
            subject: 'เรื่อง pH ของสารละลาย',
            objectives: [
                'อธิบายความสัมพันธ์ระหว่าง pH กับความเข้มข้นของไฮโดรเนียมไอออนได้ (K)',
                'อธิบายความเป็นกรด-เบสของสารละลายเมื่อทราบค่า pH ได้ (K)'
            ],
        },
        simulation: {
            situation: "การศึกษาค่า pH ของสารละลายผ่าน PhET Simulation",
            description: "ให้นักเรียนศึกษาและทดลองเกี่ยวกับการวัดค่า pH ของสารละลายประเภทต่าง ๆ โดยการสังเกตผลของการเปลี่ยนแปลงความเข้มข้นของไฮโดรเนียมไอออน (H3O+) และไฮดรอกไซด์ไอออน (OH-)  ที่เกิดขึ้นในสารละลายทั้งกรดและเบส ",
            procedures: [
                "เริ่มจากการเลือกสารละลายหนึ่งอย่างจาก สารละลายทั้งหมด 12 ชนิด จากนั้นวัดค่า pH ของสารละลายนั้น",
                "นักเรียนเจือจางสารละลายกรดหรือเบสด้วยการเติมน้ำเข้าไปในสารละลายแล้วสังเกตการเปลี่ยนแปลงของค่า pH และสีของสารละลายที่เกิดขึ้น",
                "สังเกตการเปลี่ยนแปลงของความเข้มข้นระหว่าง H3O+ และ OH- เมื่อสารละลายถูกเจือจางและวัดค่า pH อีกครั้ง"
            ],
            summaries: [
                "นักเรียนบันทึกค่า pH ของสารละลายแต่ละชนิดก่อนและหลังการเจือจาง",
                "นักเรียนอธิบายการเปลี่ยนแปลงของค่า pH จากผลการทดลองและตั้งข้อสังเกตเกี่ยวกับการที่สารละลายกรดหรือเบสจะมีค่า pH เปลี่ยนแปลงเมื่อเจือจาง",
            ]
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