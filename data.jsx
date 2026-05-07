// Mock data for the app
const FAMILY_MEMBERS = [
  { id: 1, name: "李明", role: "本人", age: 35, gender: "男", lastTest: "今日 07:32", score: 82, status: "good", abnormal: false, abnormalNote: null, avatar: "李" },
  { id: 2, name: "王芳", role: "妻子", age: 33, gender: "女", lastTest: "今日 08:15", score: 88, status: "good", abnormal: false, abnormalNote: null, avatar: "王" },
  { id: 3, name: "李小明", role: "儿子", age: 8, gender: "男", lastTest: "昨日 19:30", score: 91, status: "good", abnormal: false, abnormalNote: null, avatar: "小" },
  { id: 4, name: "李建国", role: "父亲", age: 68, gender: "男", lastTest: "昨日 06:20", score: 65, status: "warn", abnormal: true, abnormalNote: "潜血阳性,请尽快复查", avatar: "建" },
];

const STOOL_HISTORY = [
  { id: 1, type: "stool", date: "2026-04-27", time: "07:32", form: "理想型", color: "黄褐色", score: 82, device: "主卧马桶夹" },
  { id: 2, type: "urine",  date: "2026-04-26", time: "21:15", color: "淡黄色", protein: "正常", score: 90, device: "主卧马桶夹" },
  { id: 3, type: "stool", date: "2026-04-26", time: "08:05", form: "偏硬", color: "深褐色", score: 76, device: "主卧马桶夹" },
  { id: 4, type: "urine",  date: "2026-04-25", time: "22:40", color: "深黄色", protein: "偏低", score: 78, device: "主卧马桶夹" },
  { id: 5, type: "stool", date: "2026-04-25", time: "07:50", form: "理想型", color: "黄褐色", score: 85, device: "主卧马桶夹" },
  { id: 6, type: "urine",  date: "2026-04-24", time: "19:30", color: "淡黄色", protein: "正常", score: 88, device: "主卧马桶夹" },
  { id: 7, type: "stool", date: "2026-04-24", time: "07:10", form: "理想型", color: "黄褐色", score: 81, device: "主卧马桶夹" },
];

const TREND_DATA = {
  日: { points: [78, 80, 76, 82, 79, 81, 82], labels: ["4/21","4/22","4/23","4/24","4/25","4/26","4/27"] },
  周: { points: [76, 79, 80, 82], labels: ["第1周","第2周","第3周","第4周"] },
  月: { points: [74, 77, 79, 80, 81, 82], labels: ["11月","12月","1月","2月","3月","4月"] },
  年: { points: [72, 76, 79, 82], labels: ["2023","2024","2025","2026"] },
};

const STOOL_REPORT_ROWS = [
  { date: "4/27", time: "07:32", form: "理想型 (类型4)", color: "黄褐色", blood: "阴性", status: "ok" },
  { date: "4/26", time: "08:05", form: "偏硬 (类型2)",   color: "深褐色", blood: "阴性", status: "warn" },
  { date: "4/25", time: "07:50", form: "理想型 (类型4)", color: "黄褐色", blood: "阴性", status: "ok" },
  { date: "4/24", time: "07:10", form: "理想型 (类型4)", color: "黄褐色", blood: "阴性", status: "ok" },
  { date: "4/23", time: "08:22", form: "偏软 (类型5)",   color: "黄褐色", blood: "阴性", status: "warn" },
  { date: "4/22", time: "07:18", form: "理想型 (类型4)", color: "黄褐色", blood: "阴性", status: "ok" },
];

const URINE_REPORT_ROWS = [
  { date: "4/27", time: "06:45", color: "淡黄色", ph: "6.5", protein: "正常", blood: "阴性", status: "ok" },
  { date: "4/26", time: "21:15", color: "淡黄色", ph: "6.0", protein: "正常", blood: "阴性", status: "ok" },
  { date: "4/25", time: "22:40", color: "深黄色", ph: "5.5", protein: "偏低", blood: "阴性", status: "warn" },
  { date: "4/24", time: "19:30", color: "淡黄色", ph: "6.5", protein: "正常", blood: "阴性", status: "ok" },
  { date: "4/23", time: "20:10", color: "淡黄色", ph: "6.0", protein: "正常", blood: "阴性", status: "ok" },
  { date: "4/22", time: "21:05", color: "深黄色", ph: "5.8", protein: "正常", blood: "阴性", status: "warn" },
];

window.FAMILY_MEMBERS = FAMILY_MEMBERS;
window.STOOL_HISTORY = STOOL_HISTORY;
window.TREND_DATA = TREND_DATA;
window.STOOL_REPORT_ROWS = STOOL_REPORT_ROWS;
window.URINE_REPORT_ROWS = URINE_REPORT_ROWS;
