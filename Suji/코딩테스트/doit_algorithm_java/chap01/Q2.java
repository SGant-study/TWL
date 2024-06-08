package doit_algorithm_java.chap01;

import java.util.Scanner;

public class Q2 { // 세 값의 최소값을 구하는 min3 메서드를 작성하라

    static int min3(int a, int b, int c) { // 최소값을 구해 반환

        int min = a; // 최소값

        if (b < min) min = b;
        if (c < min) min = c;

        return min;
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

        int min = min3(a, b, c); // a, b, c 의 최소값

        System.out.println("최소값은 " + min + "입니다.");
    }

}
