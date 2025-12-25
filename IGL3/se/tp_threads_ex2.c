#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

#define N 4 

int A[N][N], B[N][N], C[N][N];

void* somme_ligne(void* arg) {
    int i = *((int*)arg);

    for (int j = 0; j < N; j++) {
        C[i][j] = A[i][j] + B[i][j];
    }

    pthread_exit(NULL);
}

int main() {
    pthread_t threads[N];
    int lignes[N];

    for (int i = 0; i < N; i++)
        for (int j = 0; j < N; j++) {
            A[i][j] = rand() % 10;
            B[i][j] = rand() % 10;
        }

    for (int i = 0; i < N; i++) {
        lignes[i] = i;
        pthread_create(&threads[i], NULL, somme_ligne, &lignes[i]);
    }

    for (int i = 0; i < N; i++)
        pthread_join(threads[i], NULL);

    printf("\nMatrice A :\n");
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++)
            printf("%3d ", A[i][j]);
        printf("\n");
    }

    printf("\nMatrice B :\n");
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++)
            printf("%3d ", B[i][j]);
        printf("\n");
    }
    
    printf("\nMatrice C = A + B :\n");
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++)
            printf("%3d ", C[i][j]);
        printf("\n");
    }

    return 0;
}
