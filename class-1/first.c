#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>

#define BUFFER_SIZE 5
int buffer[BUFFER_SIZE];
int in = 0, out = 0;

sem_t empty, full, mutex;

void* producer(void* arg) {
    int item;
    while (1) {
        item = rand() % 100;   // Produce an item
        sem_wait(&empty);      // Wait for an empty slot
        sem_wait(&mutex);      // Enter critical section

        buffer[in] = item;     // Insert item into buffer
        printf("Produced: %d\n", item);
        in = (in + 1) % BUFFER_SIZE;

        sem_post(&mutex);      // Exit critical section
        sem_post(&full);       // Signal that an item has been produced
    }
}

void* consumer(void* arg) {
    int item;
    while (1) {
        sem_wait(&full);       // Wait for an item to consume
        sem_wait(&mutex);      // Enter critical section

        item = buffer[out];    // Remove item from buffer
        printf("Consumed: %d\n", item);
        out = (out + 1) % BUFFER_SIZE;

        sem_post(&mutex);      // Exit critical section
        sem_post(&empty);      // Signal that an item has been consumed
    }
}

int main() {
    pthread_t prod, cons;

    // Initialize semaphores
    sem_init(&empty, 0, BUFFER_SIZE);  // Initially, buffer is empty
    sem_init(&full, 0, 0);             // Initially, no items in buffer
    sem_init(&mutex, 0, 1);            // Mutex for critical section

    // Create producer and consumer threads
    pthread_create(&prod, NULL, producer, NULL);
    pthread_create(&cons, NULL, consumer, NULL);

    // Join threads (optional)
    pthread_join(prod, NULL);
    pthread_join(cons, NULL);

    return 0;
}
