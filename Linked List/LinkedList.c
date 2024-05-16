#include <stdlib.h>
#include <stdio.h>	
typedef struct Node
{
    int data;
    struct Node* next;
}Node;

Node* insert(Node *head, int data) {
    // Allocate a new node in heap
    Node* newNode = (Node*) malloc(sizeof(Node));
    newNode->data = data; // Set the data part
    newNode->next = NULL;  // The new node is going to be the last node, so make next of it as NULL

    if (head == NULL) {
        // If the Linked List is empty, then make the new node as head
        return newNode;
    } else {
        // Else traverse till the last node
        Node* current = head;
        while (current->next != NULL) {
            current = current->next;
        }
        // Change the next of last node
        current->next = newNode;
    }
    return head; // Return the unchanged head pointer
}


void display(Node *head)
{
	Node *start=head;
	while(start)
	{
		printf("%d ",start->data);
		start=start->next;
	}
}
int main()
{
	int T,data;
    scanf("%d",&T);
    Node *head=NULL;	
    while(T-->0){
        scanf("%d",&data);
        head=insert(head,data);
    }
  display(head);
		
}
