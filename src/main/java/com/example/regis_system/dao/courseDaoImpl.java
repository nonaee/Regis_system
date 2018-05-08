package com.example.regis_system.Dao;


import com.example.regis_system.entity.Course;
import com.example.regis_system.repository.CourseRepository;
import com.google.common.collect.Lists;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class CourseDaoImpl implements CourseDao {
    CourseRepository courseRepository;
    @Autowired
    public void setCourseRepository(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }


    @Override
    public List<Course> getCourses() {
        return Lists.newArrayList(courseRepository.findAll());
    }

    @Override
    public List<Course> getCoursesSearch(String searchText) {
        return courseRepository.findByCourseNameIgnoreCaseContainingOrDescriptionIgnoreCaseContaining(searchText,searchText);

    }

    @Override
    public Course findById(long id) {
        return courseRepository.findById(id);
    }

    @Override
    public Course addCourse(Course course) {
        return courseRepository.save(course);
    }

    @Override
    public Course findByName(String searchName) {
        return null;
    }

    @Override
    public Course updateCourse(Course course) {
        return courseRepository.save(course);
    }
}
