package com.example.regis_system.service;

import com.example.regis_system.Dao.CourseDao;
import com.example.regis_system.entity.Course;
import org.springframework.beans.factory.annotation.Autowired;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;
import java.util.List;

public class CourseServiceImpl implements CourseService {
    String imageBaseUrl;
    String baseUrl;
    String imageUrl;

    public void setBaseUrl(String baseUrl) {
        this.baseUrl = baseUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }



    @PostConstruct
    protected void setImageBaseUrl(){
        this.imageBaseUrl = this.baseUrl + this.imageUrl;
    }

    @Autowired
    CourseDao courseDao;
    public List<Course> getCourses(){
        return courseDao.getCourses();
    }


    @Override
    @Transactional
    public Course findById(long id) {
        Course course = courseDao.findById(id);
        return course;
    }

    @Override
    public Course addCourse(Course course) {
        return courseDao.addCourse(course);
    }

    @Override
    @Transactional
    public List<Course> queryCourse(String query) {
        if(query == null||query.equals("")){
            return courseDao.getCourses();

        }
        return courseDao.getCoursesSearch(query);
    }


    @Override
    public Course updateCourse(Course course) {
        return courseDao.updateCourse(course);
    }
}
