package com.luka.webshop.models.entities;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "log")
public class LogEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "idlog")
    private Integer idlog;
    @Basic
    @Column(name = "username")
    private String username;
    @Basic
    @Column(name = "date")
    private Timestamp date;
    @Basic
    @Column(name = "action")
    private String action;

    public Integer getIdlog() {
        return idlog;
    }

    public void setIdlog(Integer idlog) {
        this.idlog = idlog;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        LogEntity logEntity = (LogEntity) o;

        if (idlog != null ? !idlog.equals(logEntity.idlog) : logEntity.idlog != null) return false;
        if (username != null ? !username.equals(logEntity.username) : logEntity.username != null) return false;
        if (date != null ? !date.equals(logEntity.date) : logEntity.date != null) return false;
        if (action != null ? !action.equals(logEntity.action) : logEntity.action != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = idlog != null ? idlog.hashCode() : 0;
        result = 31 * result + (username != null ? username.hashCode() : 0);
        result = 31 * result + (date != null ? date.hashCode() : 0);
        result = 31 * result + (action != null ? action.hashCode() : 0);
        return result;
    }
}
