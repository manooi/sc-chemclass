interface LessonInfo {
    name: string;
    no: number;
    iframeUrl: string,
    width: string,
    height: string
}

export const LESSONS: { [no: string]: LessonInfo } = {
    "1": {
        name: "pH ของสารละลาย",
        no: 1,
        iframeUrl: "https://phet.colorado.edu/sims/html/ph-scale/latest/ph-scale_all.html?locale=th",
        width: '55%',
        height: '85%'
    },
    "2": {
        name: "การไทเทรตกรด-เบส",
        no: 2,
        iframeUrl: "https://phet.colorado.edu/sims/html/ph-scale/latest/ph-scale_all.html?locale=th",
        width: '55%',
        height: '85%'
    },
    "3": {
        name: "ปฏิกิริยารีดอกซ์",
        no: 3,
        iframeUrl: "https://teachchemistry.org/simulations/2021/may/#/",
        width: '55%',
        height: '85%'
    }
}