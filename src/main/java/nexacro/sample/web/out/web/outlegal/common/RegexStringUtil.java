package nexacro.sample.web.out.web.outlegal.common;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 
 * @author lce
 * Regex를 이용한 Sring 처리 관련 메서드들
 */
public class RegexStringUtil {

	public static void main(String[] args) {
		String testSource = "ewlkjffwe.com";
		String testRegex = ".[\\w]+$";

		String result = extractRegexMatches(testRegex, testSource);

		System.out.println(result.substring(1));
	}

	public static String extractRegexMatches(String regex, String source){
		Pattern p = Pattern.compile(regex);
		Matcher m = p.matcher(source);

		if (m.find()) {
		    return m.group(0);
		}
		return null;
	}
}
