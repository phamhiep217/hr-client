export class Helps {
    static prefixApi(): string {
        return 'http://localhost:52578';
    }

    static getGender() {
        return [
            {code:0,value:"Nữ"},
            {code:1,value:"Nam"},
            {code:2,value:"Khác"}
        ]
    }

    static getMarriageStatus() {
        return [
            {code:0,value:"Độc thân"},
            {code:1,value:"Kết hôn"}
        ]
    }

    static getNationality() {
        return [
            {code:0,value:"Việt Nam"},
            {code:1,value:"Trung Quốc"}
        ]
    }

    static getReligion() {
        return [
            {code:0,value:"Không"},
            {code:1,value:"Thiên Chúa"},
            {code:1,value:"Phật Giáo"}
        ]
    }

    static getDegree(){
        return [
            {code:0, value: "Phổ thông"},
            {code:1, value: "Đại học"},
            {code:2, value: "Cao đẳng"},
            {code:4, value: "Trung cấp"}
        ]
    }

    static getRanking(){
        return [
            {code:0, value: "Xuất sắc"},
            {code:1, value: "Giỏi"},
            {code:2, value: "Khá"},
            {code:4, value: "Trung bình"}
        ]
    }
}