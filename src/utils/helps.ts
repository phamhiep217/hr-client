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

    static getNoiCap() {
        return [
            {code:0,value:"Hà Nội"},
            {code:1,value:"Đã Nẵng"},
            {code:2,value:"TPHCM"}
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

    static getDepartment(){
        return [
            {code:0, value: "Công nghệ thông tin"},
            {code:1, value: "Quản trị kinh doanh"},
            {code:2, value: "Cơ khí"},
            {code:4, value: "Design"}
        ]
    }

    static getMajor(){
        return [
            {code:0, value: "Phần mềm"},
            {code:1, value: "Kế toán"},
            {code:2, value: "Cơ khí công nghiệp"},
            {code:4, value: "Thiết kế nội thất"}
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