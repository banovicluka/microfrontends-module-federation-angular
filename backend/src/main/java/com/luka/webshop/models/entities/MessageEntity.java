package com.luka.webshop.models.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "message")
public class MessageEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Integer id;
    @Basic
    @Column(name = "subject")
    private String subject;
    @Basic
    @Column(name = "content")
    private String content;
    @Basic
    @Column(name = "seen")
    private String seen;
    @ManyToOne
    @JoinColumn(name = "operator_id", referencedColumnName = "id", nullable = false)
    private OperatorEntity operator;
    @ManyToOne
    @JoinColumn(name = "sender_id", referencedColumnName = "id", nullable = false)
    private UserEntity user;
}
