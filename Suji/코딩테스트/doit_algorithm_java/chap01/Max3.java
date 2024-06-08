package doit_algorithm_java.chap01;

import java.util.Scanner;

public class Max3 { // 3개의 정수값을 입력하고 최댓값을 구하여 출력
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("세 정수의 최댓값을 구합니다.");

        System.out.print("a의 값: ");
        int a = sc.nextInt();

        System.out.print("b의 값: ");
        int b = sc.nextInt();

        System.out.print("c의 값: ");
        int c = sc.nextInt();

        int max = a;
        if (b > max) max = b;
        if (c > max) max = c;
        // a, b, c 의 최댓값을 구하여 max에 대입

        System.out.println("최댓값은 " + max + "입니다.");
    }
}
