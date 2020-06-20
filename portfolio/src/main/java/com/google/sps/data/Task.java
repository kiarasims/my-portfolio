package com.google.sps.data;

public final class Task {
    private final long id;
    private final String name;
    private final String title;
    private final String email;
    private final long timestamp;

public Task(long id, String name, String title, String email, long timestamp) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.email = email;
    this.timestamp = timestamp;
  }
}