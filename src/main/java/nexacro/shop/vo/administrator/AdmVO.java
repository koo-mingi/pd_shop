package nexacro.shop.vo.administrator;

import com.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

public class AdmVO extends NexacroIbatisAbstractDAO{
	
	private String msg;
	private String sabun; 		    // 사원번호
	private String class_gbn_code;  // 업무구분코드
	private String name; 			// 사원이름
	private String reg_no;			// 주민번호
	private String eng_name; 		// 영문이름
	private String phone; 			// 회사번호
	private String hp; 				// 유대폰번호
	private String carrier; 		// 경력
	private String password; 		// 비밀번호
	 
	private String put_yn; 			// 투입여부
	private String pos_gbn_code; 	// 직위구분코드. 001 : 마스터관리자, 002 : 중간관리자, 003 : 일반관리자.
	private String sex; 			// 성별
	private String years; 			// 연령
	private String email;			// 이메일
	private String zip; 			// 우편주소
	private String addr1; 			// 주소 1
	private String addr2; 			// 주소 2
	private String mil_yn; 			// 군필여부
	private String home_phone; 		// 집전화번호
	private String join_gbn_code; 	// 입사구분코드
	private int salary; 			// 연봉
	private String kosa_reg_yn; 	// 코사등록여부
	private String kosa_class; 		// 코사등급
	private String join_day; 		// 입사일자
	private String retire_day; 		// 퇴사일자
	private String apply_day; 		// 지원일자
	private String hope_area; 		// 희망근무지역
	private String id; 				// 아이디
	
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public String getSabun() {
		return sabun;
	}
	public void setSabun(String sabun) {
		this.sabun = sabun;
	}
	public String getClass_gbn_code() {
		return class_gbn_code;
	}
	public void setClass_gbn_code(String class_gbn_code) {
		this.class_gbn_code = class_gbn_code;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getReg_no() {
		return reg_no;
	}
	public void setReg_no(String reg_no) {
		this.reg_no = reg_no;
	}
	public String getEng_name() {
		return eng_name;
	}
	public void setEng_name(String eng_name) {
		this.eng_name = eng_name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getHp() {
		return hp;
	}
	public void setHp(String hp) {
		this.hp = hp;
	}
	public String getCarrier() {
		return carrier;
	}
	public void setCarrier(String carrier) {
		this.carrier = carrier;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPut_yn() {
		return put_yn;
	}
	public void setPut_yn(String put_yn) {
		this.put_yn = put_yn;
	}
	public String getPos_gbn_code() {
		return pos_gbn_code;
	}
	public void setPos_gbn_code(String pos_gbn_code) {
		this.pos_gbn_code = pos_gbn_code;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getYears() {
		return years;
	}
	public void setYears(String years) {
		this.years = years;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getZip() {
		return zip;
	}
	public void setZip(String zip) {
		this.zip = zip;
	}
	public String getAddr1() {
		return addr1;
	}
	public void setAddr1(String addr1) {
		this.addr1 = addr1;
	}
	public String getAddr2() {
		return addr2;
	}
	public void setAddr2(String addr2) {
		this.addr2 = addr2;
	}
	public String getMil_yn() {
		return mil_yn;
	}
	public void setMil_yn(String mil_yn) {
		this.mil_yn = mil_yn;
	}
	public String getHome_phone() {
		return home_phone;
	}
	public void setHome_phone(String home_phone) {
		this.home_phone = home_phone;
	}
	public String getJoin_gbn_code() {
		return join_gbn_code;
	}
	public void setJoin_gbn_code(String join_gbn_code) {
		this.join_gbn_code = join_gbn_code;
	}
	public int getSalary() {
		return salary;
	}
	public void setSalary(int salary) {
		this.salary = salary;
	}
	public String getKosa_reg_yn() {
		return kosa_reg_yn;
	}
	public void setKosa_reg_yn(String kosa_reg_yn) {
		this.kosa_reg_yn = kosa_reg_yn;
	}
	public String getKosa_class() {
		return kosa_class;
	}
	public void setKosa_class(String kosa_class) {
		this.kosa_class = kosa_class;
	}
	public String getJoin_day() {
		return join_day;
	}
	public void setJoin_day(String join_day) {
		this.join_day = join_day;
	}
	public String getRetire_day() {
		return retire_day;
	}
	public void setRetire_day(String retire_day) {
		this.retire_day = retire_day;
	}
	public String getApply_day() {
		return apply_day;
	}
	public void setApply_day(String apply_day) {
		this.apply_day = apply_day;
	}
	public String getHope_area() {
		return hope_area;
	}
	public void setHope_area(String hope_area) {
		this.hope_area = hope_area;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	

}
