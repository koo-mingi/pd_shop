package nexacro.shop.vo.product;

public class ProductVO {
	private int rownum;
	private String chk;
	private String code_main;
	private String code_middle;
	private String code_sub;
	private String product_code;  // 상품코드(대분류3자리 + 중분류 3자리 + 소분류 3자리 + 일련번호 2자리)
	private String product_name;  // 상품이름
	private int product_stock;    // 상품재고
	private String product_summary; // 상품요약설명
	private String product_detail;  // 상품상세설명
	private double product_point;   // 상품별점
	private int product_price;      // 상품가격
	private String product_sell_enable;  // 상품판매가능여부
	private String partner_num;          // 사업자번호(10자리)
	private String product_option_enable;  // 상품옵션유무(Y,N)
	private String partner_name;
	
	

	public int getRownum() {
		return rownum;
	}
	public void setRownum(int rownum) {
		this.rownum = rownum;
	}
	public String getProduct_code() {
		return product_code;
	}
	public void setProduct_code(String product_code) {
		this.product_code = product_code;
	}
	public String getChk() {
		return chk;
	}
	public void setChk(String chk) {
		this.chk = chk;
	}
	public String getCode_main() {
		return code_main;
	}
	public void setCode_main(String code_main) {
		this.code_main = code_main;
	}
	public String getCode_middle() {
		return code_middle;
	}
	public void setCode_middle(String code_middle) {
		this.code_middle = code_middle;
	}
	public String getCode_sub() {
		return code_sub;
	}
	public void setCode_sub(String code_sub) {
		this.code_sub = code_sub;
	}
	public String getPartner_name() {
		return partner_name;
	}
	public void setPartner_name(String partner_name) {
		this.partner_name = partner_name;
	}
	public String getProduct_name() {
		return product_name;
	}
	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}
	public int getProduct_stock() {
		return product_stock;
	}
	public void setProduct_stock(int product_stock) {
		this.product_stock = product_stock;
	}
	public String getProduct_summary() {
		return product_summary;
	}
	public void setProduct_summary(String product_summary) {
		this.product_summary = product_summary;
	}
	public String getProduct_detail() {
		return product_detail;
	}
	public void setProduct_detail(String product_detail) {
		this.product_detail = product_detail;
	}
	public double getProduct_point() {
		return product_point;
	}
	public void setProduct_point(double product_point) {
		this.product_point = product_point;
	}
	public int getProduct_price() {
		return product_price;
	}
	public void setProduct_price(int product_price) {
		this.product_price = product_price;
	}
	public String getProduct_sell_enable() {
		return product_sell_enable;
	}
	public void setProduct_sell_enable(String product_sell_enable) {
		this.product_sell_enable = product_sell_enable;
	}
	public String getPartner_num() {
		return partner_num;
	}
	public void setPartner_num(String partner_num) {
		this.partner_num = partner_num;
	}
	public String getProduct_option_enable() {
		return product_option_enable;
	}
	public void setProduct_option_enable(String product_option_enable) {
		this.product_option_enable = product_option_enable;
	}
	
	
}
