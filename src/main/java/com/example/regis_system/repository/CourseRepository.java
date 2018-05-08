package com.example.regis_system.repository;

import com.example.regis_system.entity.Course;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CourseRepository extends CrudRepository<Course,Long> {

    Course findById(Long id);
    List<Course> findByCourseNameIgnoreCaseContainingOrDescriptionIgnoreCaseContaining(String name, String searchDes);
}

