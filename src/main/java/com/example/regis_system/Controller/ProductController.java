package com.example.regis_system.Controller;


import com.example.regis_system.entity.Course;
import com.example.regis_system.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class ProductController {
    CourseService courseService;

    @Autowired
    public void setCourseService(CourseService courseService) {
        this.courseService = courseService;
    }


    @GetMapping("/enroll_course")
    public ResponseEntity<?> getCourse() {
        List<Course> courses = courseService.getCourses();
        return ResponseEntity.ok(courses);
    }
}
