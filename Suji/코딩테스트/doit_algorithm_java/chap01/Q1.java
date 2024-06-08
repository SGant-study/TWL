package doit_algorithm_java.chap01;

import java.util.Scanner;

public class Q1 { // 네 값의 최대값을 구하는 max4 메서드를 작성하라

    static int max4(int a, int b, int c, int d) { // 최대값을 구해 반환

        int max = a; // 최대값

        if (b > max) max = b;
        if (c > max) max = c;
        if (d > max) max = d;

        return max;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a, b, c, d;

        System.out.println("네 정수의 최댓갓을 구하시오.");

        System.out.print("a의 값: ");
        a = sc.nextInt();

        System.out.print("b의 값: ");
        b = sc.nextInt();

        System.out.print("c의 값: ");
        c = sc.nextInt();

        System.out.print("d의 값: ");
        d = sc.nextInt();

        int max = max4(a, b, c, d); // a, b, c, d 의 최대값

        System.out.println("최대값은 " + max + "입니다.");
    }

}
